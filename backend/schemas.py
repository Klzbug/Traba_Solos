from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class PessoaCreate(BaseModel):
    nome: str
    email: EmailStr

class PessoaOut(BaseModel):
    id: int
    nome: str
    email: str
    class Config:
        orm_mode = True

class OpiniaoCreate(BaseModel):
    texto: str

class OpiniaoOut(BaseModel):
    id: int
    texto: str
    data: datetime
    pessoa: PessoaOut
    class Config:
        orm_mode = True
