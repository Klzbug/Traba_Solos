from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine, get_db
import models
from routers import pessoas, opinioes
from config import CORS_ORIGINS, DEBUG

# Criar as tabelas no banco de dados
models.Base.metadata.create_all(bind=engine)

# Inicializar a aplicação FastAPI
app = FastAPI(
    title='API do Traba Solos',
    description='API para gerenciar informações sobre solos brasileiros e opiniões de usuários',
    version='1.0.0'
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rotas
app.include_router(pessoas.router)
app.include_router(opinioes.router)

# Rota de health check
@app.get("/health")
def health_check():
    return {"status": "ok", "message": "API do Traba Solos está funcionando"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
