from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, schemas

# Cria as tabelas
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Opiniões sobre Solos")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou apenas ["https://seu-frontend.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ========================
# Rota criar/buscar pessoa
# ========================
@app.post("/pessoas", response_model=schemas.PessoaOut)
def criar_ou_buscar_pessoa(pessoa: schemas.PessoaCreate, db: Session = Depends(get_db)):
    pessoa_db = db.query(models.Pessoa).filter(models.Pessoa.email == pessoa.email).first()
    if pessoa_db:
        return pessoa_db
    nova_pessoa = models.Pessoa(nome=pessoa.nome, email=pessoa.email)
    db.add(nova_pessoa)
    db.commit()
    db.refresh(nova_pessoa)
    return nova_pessoa

# ========================
# Rota enviar opinião
# ========================
@app.post("/opinioes/{pessoa_id}", response_model=schemas.OpiniaoOut)
def enviar_opiniao(pessoa_id: int, opiniao: schemas.OpiniaoCreate, db: Session = Depends(get_db)):
    pessoa_db = db.query(models.Pessoa).filter(models.Pessoa.id == pessoa_id).first()
    if not pessoa_db:
        raise HTTPException(status_code=404, detail="Pessoa não encontrada")
    
    nova_opiniao = models.Opiniao(texto=opiniao.texto, pessoa_id=pessoa_id)
    db.add(nova_opiniao)
    db.commit()
    db.refresh(nova_opiniao)
    return nova_opiniao

# ========================
# Rota listar opiniões
# ========================
@app.get("/opinioes", response_model=list[schemas.OpiniaoOut])
def listar_opinioes(db: Session = Depends(get_db)):
    opinioes = db.query(models.Opiniao).order_by(models.Opiniao.data.desc()).all()
    return opinioes
