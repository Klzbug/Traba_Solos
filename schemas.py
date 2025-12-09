from pydantic import BaseModel, ConfigDict

# ---------- Opiniões ----------

class OpiniaoBase(BaseModel):
    texto: str

class OpiniaoCreate(OpiniaoBase):
    pass

class PessoaOpiniao(BaseModel):
    nome: str
    email: str
    model_config = ConfigDict(from_attributes=True)

class Opiniao(OpiniaoBase):
    id: int
    pessoa_id: int
    autor: PessoaOpiniao

    model_config = ConfigDict(from_attributes=True)


# ---------- Pessoas ----------

class PessoaBase(BaseModel):
    nome: str
    email: str

class PessoaCreate(PessoaBase):
    pass

class Pessoa(PessoaBase):
    id: int
    opinioes: list[Opiniao] = []

    model_config = ConfigDict(from_attributes=True)
