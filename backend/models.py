from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from database import Base
class Pessoa(Base):
    __tablename__ = "pessoas"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    opinioes = relationship("Opiniao", back_populates="pessoa")
class Opiniao(Base):
    __tablename__ = "opinioes"
    id = Column(Integer, primary_key=True, index=True)
    texto = Column(Text, nullable=False)
    data = Column(DateTime(timezone=True), server_default=func.now())
    pessoa_id = Column(Integer, ForeignKey("pessoas.id"))
    pessoa = relationship("Pessoa", back_populates="opinioes")