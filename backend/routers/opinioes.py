from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from http import HTTPStatus
from typing import List
import models, schemas
from database import get_db
router = APIRouter(prefix="/opinioes", tags=["Opiniões"])
@router.post("/{pessoa_id}", response_model=schemas.Opiniao)
def criar_opiniao(pessoa_id: int, opiniao: schemas.OpiniaoCreate, db: Session = Depends(get_db)):
    nova = models.Opiniao(**opiniao.dict(), pessoa_id=pessoa_id)
    db.add(nova)
    db.commit()
    db.refresh(nova)
    return nova
@router.get("/", response_model=list[schemas.Opiniao])
def listar_opinioes(db: Session = Depends(get_db)):
    from sqlalchemy.orm import joinedload
    opinioes = db.query(models.Opiniao).options(joinedload(models.Opiniao.autor)).all()
    return opinioes