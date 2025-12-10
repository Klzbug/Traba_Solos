from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from http import HTTPStatus
from typing import List
import models, schemas
from database import get_db
router = APIRouter(prefix="/pessoas", tags=["Pessoas"] )
@router.post("/", response_model=schemas.Pessoa)
def criar_pessoa(pessoa: schemas.PessoaCreate, db: Session = Depends(get_db)):
    pessoa_existente = db.query(models.Pessoa).filter(models.Pessoa.email == pessoa.email).first()
    if pessoa_existente:
        return pessoa_existente
    nova = models.Pessoa(**pessoa.model_dump())
    db.add(nova)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        pessoa_existente = db.query(models.Pessoa).filter(models.Pessoa.email == pessoa.email).first()
        if pessoa_existente:
            return pessoa_existente
        raise HTTPException(status_code=400, detail="Erro ao registrar pessoa. Tente novamente.")
    db.refresh(nova)
    return nova
@router.get("/", response_model=list[schemas.Pessoa])
def listar_pessoas(db: Session = Depends(get_db)):
    return db.query(models.Pessoa).all()