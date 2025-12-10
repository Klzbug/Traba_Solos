from fastapi import FastAPI, HTTPException, Depends, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship, Session, joinedload
from pydantic import BaseModel, ConfigDict
from typing import List

# --- 1. Configuração do Banco de Dados (SQLite Simples) ---
DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- 2. Modelos SQLAlchemy ---
class Pessoa(Base):
    __tablename__ = "pessoas"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    email = Column(String, unique=True, index=True)

    opinioes = relationship("Opiniao", back_populates="autor")

class Opiniao(Base):
    __tablename__ = "opinioes"

    id = Column(Integer, primary_key=True, index=True)
    texto = Column(String, index=True)
    pessoa_id = Column(Integer, ForeignKey("pessoas.id"))

    autor = relationship("Pessoa", back_populates="opinioes")

# --- 3. Schemas Pydantic ---
class OpiniaoBase(BaseModel):
    texto: str

class OpiniaoCreate(OpiniaoBase):
    pass

class PessoaOpiniao(BaseModel):
    nome: str
    email: str
    model_config = ConfigDict(from_attributes=True)

class OpiniaoSchema(OpiniaoBase):
    id: int
    pessoa_id: int
    autor: PessoaOpiniao

    model_config = ConfigDict(from_attributes=True)

class PessoaBase(BaseModel):
    nome: str
    email: str

class PessoaCreate(PessoaBase):
    pass

class PessoaSchema(PessoaBase):
    id: int
    opinioes: List[OpiniaoSchema] = []

    model_config = ConfigDict(from_attributes=True)

# --- 4. Inicialização da Aplicação FastAPI ---
app = FastAPI(
    title='API do Traba Solos (Simplificada)',
    description='API para gerenciar informações sobre solos brasileiros e opiniões de usuários',
    version='1.0.0'
)

# Criar as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

# Configurar CORS (Simplificado)
CORS_ORIGINS = ["*"] # Permitindo todas as origens para simplicidade

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rota de health check
@app.get("/health")
def health_check():
    return {"status": "ok", "message": "API do Traba Solos está funcionando"}

# --- 5. Rotas (Endpoints) ---

# Rotas de Pessoas
@app.post("/pessoas", response_model=PessoaSchema, tags=["Pessoas"])
def criar_pessoa(pessoa: PessoaCreate, db: Session = Depends(get_db)):
    # Verificar se a pessoa já existe pelo e-mail
    pessoa_existente = db.query(Pessoa).filter(Pessoa.email == pessoa.email).first()
    
    if pessoa_existente:
        return pessoa_existente
    
    # Se não existir, criar uma nova pessoa
    nova = Pessoa(**pessoa.model_dump())
    db.add(nova)
    db.commit()
    db.refresh(nova)
    return nova

@app.get("/pessoas", response_model=List[PessoaSchema], tags=["Pessoas"])
def listar_pessoas(db: Session = Depends(get_db)):
    return db.query(Pessoa).all()

# Rotas de Opiniões
@app.post("/opinioes/{pessoa_id}", response_model=OpiniaoSchema, tags=["Opiniões"])
def criar_opiniao(pessoa_id: int, opiniao: OpiniaoCreate, db: Session = Depends(get_db)):
    nova = Opiniao(**opiniao.model_dump(), pessoa_id=pessoa_id)
    db.add(nova)
    db.commit()
    db.refresh(nova)
    return nova

@app.get("/opinioes", response_model=List[OpiniaoSchema], tags=["Opiniões"])
def listar_opinioes(db: Session = Depends(get_db)):
    opinioes = db.query(Opiniao).options(joinedload(Opiniao.autor)).all()
    return opinioes

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
