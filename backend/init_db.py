from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import Pessoa, Opiniao
Base.metadata.create_all(bind=engine)
def init_db():
    db: Session = SessionLocal()
    if db.query(Pessoa).count() == 0:
        pessoa_exemplo = Pessoa(nome="Usuário de Teste", email="teste@exemplo.com")
        db.add(pessoa_exemplo)
        db.commit()
        db.refresh(pessoa_exemplo)
        print(f"Pessoa de exemplo criada com ID: {pessoa_exemplo.id}")
        opiniao_exemplo = Opiniao(texto="Esta é uma opinião de teste inicial.", pessoa_id=pessoa_exemplo.id)
        db.add(opiniao_exemplo)
        db.commit()
        db.refresh(opiniao_exemplo)
        print(f"Opinião de exemplo criada com ID: {opiniao_exemplo.id}")
    else:
        print("O banco de dados já contém dados.")
    db.close()
if __name__ == "__main__":
    init_db()