
from contextlib import asynccontextmanager
from fastapi import FastAPI, Body, Request, HTTPException, Depends, Header
from fastapi.responses import HTMLResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from random import randint
import BTrees
import transaction
import ZODB, ZODB.FileStorage

from ..config.Config import *
from ..util.Util import *

@asynccontextmanager
async def lifespan(app: FastAPI):
    global db, root

    storage = ZODB.FileStorage.FileStorage('back/database/yum_teen_data.fs')
    db = ZODB.DB(storage)
    connection = db.open()
    root = connection.root

    init_db(root)
    transaction.commit()

    yield

    connection.close()
    db.close()

app = FastAPI(lifespan=lifespan)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@app.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    users = root.users

    email = form_data.username
    password = form_data.password

    # email not in database
    if email not in users:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    user = users[email]

    # password incorrect
    if not verify_password(password, user["password"]):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    token = gen_token(root, email)
    return {"access_token": token, "token_type": "token"}

@app.get("/signup")
async def signup(form_data: OAuth2PasswordRequestForm = Depends()):
    users = root.users

    email = form_data.username
    password = form_data.password

    # email already exists
    if email in users:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # create new user
    hashed_password = hash_password(password)
    new_user = User(email, hashed_password, [], [])
    users[email] = new_user
    root.users[email] = users[email]

    token = gen_token(root, email)
    return {"access_token": token, "token_type": "token"}


def gen_token(email):
    tokens = root.tokens

    # return if token already exists
    for t in tokens:
        if tokens[t] == email: return t

    # gen new token
    token = "%20x" %(randint(0, 0xffffffffffffffffffff))
    while token in tokens:
        token = "%20x" %(randint(0, 0xffffffffffffffffffff))
    
    # add new token to db
    tokens[token] = email
    for t in tokens:
        root.tokens[t] = tokens[t]

    return token

def verify_token(token: str):
    tokens = root.tokens
    token = token.lower()
    if token in tokens:
        return tokens[token]
    return None

def get_user_by_email(email: str):
    users = root.users

    result = None
    for u in users:
        user = users[u]
        if user.getEmail() == email:
            result = user
    return result

def get_current_user(authorization: str = Header(None)):
    # Missing header -> 401 (instead of 422 from FastAPI)
    if authorization is None:
        raise HTTPException(status_code=401, detail="Missing authorization header")

    # Wrong token format
    if not isinstance(authorization, str) or not authorization.startswith("token "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")

    token = authorization[len("token "):].strip()
    id = verify_token(token)

    # invalid token
    if not id:
        raise HTTPException(status_code=401, detail="invalid or expired token")
    user_record = get_user_by_email(id)

    # user not found
    if not user_record:
        raise HTTPException(status_code=401, detail="User not found")
    return user_record

# # - - Pages function - - # # 

@app.get("/") # home page
async def get_home():
    stores = root.stores
    popular = []
    trending = []

    # random generate popular / trending store
    for store in stores.values():
        rand_num = randint(0, len(stores) - 1)
        if rand_num > len(stores) / 2:
            popular.append(store)
        else:
            trending.append(store)
    
    return {
        "Popular": popular,
        "Trending": trending
    }

@app.get("/search/name/{name}")
async def search_name(name: str):
    stores = root.stores
    result = []

    for store in stores.values():
        if name.lower() in store.getName().lower():
            result.append(store)
    
    return {
        "results": result
    }

@app.get("/search/category/{category}")
async def search_category(category: str):
    stores = root.stores
    result = []

    for store in stores.values():
        if category.lower() in store.getCategory().lower():
            result.append(store)
    
    return {
        "results": result
    }

@app.get("/user/current")
async def get_current(current_user: dict = Depends(get_current_user)):
    return {
        "current" : current_user.getCurrent()
    }

@app.get("/user/history")
async def get_history(current_user: dict = Depends(get_current_user)):
    return {
        "order_history" : current_user.getOrderHistory()
    }

@app.get("/user/favorites")
async def get_favorites(current_user: dict = Depends(get_current_user)):
    return {
        "favorites" : current_user.getFavorites()
    }

@app.get("/store/{store_id}")
async def get_store(store_id: str):
    stores = root.stores

    # store keys are integers in the DB (see init_db), convert incoming path param
    try:
        key = int(store_id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid store id. Must be an integer.")

    if key not in stores:
        raise HTTPException(status_code=404, detail="Store not found")

    store = stores[key]
    return {
        "store": store
    }

@app.get("/user/coupons/{code}")
async def get_coupons(code: str, current_user: dict = Depends(get_current_user)):
    coupons = current_user.getCouponList()
    result = []

    for coupon in coupons:
        if code.lower() in coupon.getCode().lower():
            result.append(coupon)
    
    return {
        "results": result
    }

@app.get("/store/queue/{store_id}")
async def get_store_queue(store_id: str):
    stores = root.stores

    # store keys are integers in the DB (see init_db), convert incoming path param
    try:
        key = int(store_id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid store id. Must be an integer.")

    if key not in stores:
        raise HTTPException(status_code=404, detail="Store not found")

    store = stores[key]
    return {
        "queue": store.getQueue()
    }

@app.get("/store/{store_id}/setting")
async def get_store_setting(store_id: str):
    stores = root.stores

    # store keys are integers in the DB (see init_db), convert incoming path param
    try:
        key = int(store_id)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid store id. Must be an integer.")

    if key not in stores:
        raise HTTPException(status_code=404, detail="Store not found")

    store = stores[key]
    return {
        "store": store
    }