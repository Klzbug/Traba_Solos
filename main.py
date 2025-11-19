from fastapi import FastAPI
from database import Base, engine
import models
from routers import pessoas, opinioes

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="API de Pessoas e Opiniões")

app.include_router(pessoas.router)
app.include_router(opinioes.router)
