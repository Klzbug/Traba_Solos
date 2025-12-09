from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine, get_db
import models
from routers import pessoas, opinioes

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title='API do Traba Solos')

origins = [
    "*", # Permitir todas as origens para desenvolvimento
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pessoas.router)
app.include_router(opinioes.router)
