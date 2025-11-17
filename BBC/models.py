from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database.database import Base

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
