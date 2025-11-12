from fastapi import Header, HTTPException
from random import randint
import bcrypt

def hash_password(password: str):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

def verify_password(password, hashed_password):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)

def gen_token(root, email):
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

def verify_token(root, token: str):
    tokens = root.tokens
    token = token.lower()
    if token in tokens:
        return tokens[token]
    return None

def get_user_by_email(root, email: str):
    users = root.users

    result = None
    for u in users:
        user = users[u]
        if user.getEmail() == email:
            result = user
    return result

async def get_current_user(root, authorization: str = Header(...)):
    # wrong token format
    if not authorization.startswith("token "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    token = authorization[len("token "):].strip()
    id = verify_token(root, token)
    
    # invalid token
    if not id:
        raise HTTPException(status_code=401, detail="invalid or expired token")
    user_record = get_user_by_email(id)

    # user not found
    if not user_record:
        raise HTTPException(status_code=401, detail="User not found")
    return user_record

    