from pydantic import BaseModel

# ---------- Opiniões ----------

class OpiniaoBase(BaseModel):
    texto: str

class OpiniaoCreate(OpiniaoBase):
    pass

class Opiniao(OpiniaoBase):
    id: int
    pessoa_id: int

    class Config:
        orm_mode = True


# ---------- Pessoas ----------

class PessoaBase(BaseModel):
    nome: str
    email: str

class PessoaCreate(PessoaBase):
    pass

class Pessoa(PessoaBase):
    id: int
    opinioes: list[Opiniao] = []

    class Config:
        orm_mode = True
