
from contextlib import asynccontextmanager
from fastapi import FastAPI, Body, Request, HTTPException, Depends, Header
from fastapi.responses import HTMLResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from random import randint
import transaction
import ZODB, ZODB.FileStorage

from ..model.Menu import *
from ..model.Order import *
from ..model.Store import *
from ..model.User import *
from ..util.Util import *

@asynccontextmanager
async def lifespan(app: FastAPI):
    global db, root

    storage = ZODB.FileStorage.FileStorage('back/database/yum_teen_data.fs')
    db = ZODB.DB(storage)
    connection = db.open()
    root = connection.root

    root.stores = BTrees._OOBTree.BTree()
    root.users = BTrees._OOBTree.BTree()
    root.tokens = BTrees._OOBTree.BTree()

    # other things (later)

    yield

    transaction.commit()
    connection.close()
    db.close()

app = FastAPI(lifespan=lifespan)
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# other things (later)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

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

# later
# @app.get("/home")
# async def get_home(current_user: User = Depends(lambda: get_current_user(root))):
#     return {
#         "email": current_user.getEmail(),
#         "orders": [order.to_dict() for order in current_user.getOrders()],
#         "favorites": [store.to_dict() for store in current_user.getFavorites()]
#     }

# @app.get("/search/name/{name}")

# @app.get("/search/category/{category}")

@app.get("/current")
async def get_current(current_user: User = Depends(lambda: get_current_user(root))):
    return {
        "current" : current_user.getCurrent()
    }

@app.get("/history")
async def get_history(current_user: User = Depends(lambda: get_current_user(root))):
    return {
        "order_history" : current_user.getOrderHistory()
    }

@app.get("/favorites")
async def get_favorites(current_user: User = Depends(lambda: get_current_user(root))):
    return {
        "favorites" : current_user.getFavorites()
    }

@app.get("/setting")
async def get_setting(current_user: User = Depends(lambda: get_current_user(root))):
    return {
        "name": current_user.getName(),
        "email": current_user.getEmail(),
        "phone": current_user.getPhone(),
        "default_payment": current_user.getDefaultPayment(),
        "location": current_user.getLocation(),
        "store": current_user.getStore()
    }

@app.post("/setting")
async def update_setting(form_data: Request, current_user: User = Depends(lambda: get_current_user(root))):
    data = await form_data.json()

    if "name" in data:
        current_user.setName(data["name"])
    if "phone" in data:
        current_user.setPhone(data["phone"])
    if "default_payment" in data:
        current_user.setDefaultPayment(data["default_payment"])
    if "location" in data:
        current_user.setLocation(data["location"])
    if "store" in data:
        current_user.setStore(data["store"])

    root.users[current_user.getEmail()] = current_user

    return {"message": "Settings updated successfully."}

@app.get("/store")
async def get_store(current_user: User = Depends(lambda: get_current_user(root))):
    return {
        "store" : current_user.getStore()
    }

@app.get("/user/coupon")
async def get_coupon(current_user: User = Depends(lambda: get_current_user(root))):
    return {
        "coupons" : current_user.getCouponList()
    }