
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