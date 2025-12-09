import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Configurações do Banco de Dados
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./database.db")

# Configurações da API
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
API_PORT = int(os.getenv("API_PORT", 8000))
API_HOST = os.getenv("API_HOST", "0.0.0.0")

# Configurações de CORS
CORS_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
    "*"
]
