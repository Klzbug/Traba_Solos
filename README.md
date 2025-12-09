# 🌍 Traba Solos - Informações sobre Solos Brasileiros

Uma aplicação web completa para explorar informações sobre os diferentes tipos de solos encontrados em cada estado do Brasil, com funcionalidade de coleta de opiniões dos usuários.

## 📋 Estrutura do Projeto

```
Traba_Solos/
├── backend/                    # API FastAPI
│   ├── main.py                # Aplicação principal
│   ├── database.py            # Configuração do banco de dados
│   ├── models.py              # Modelos SQLAlchemy
│   ├── schemas.py             # Esquemas Pydantic
│   ├── config.py              # Configurações centralizadas
│   ├── .env                   # Variáveis de ambiente
│   ├── routers/               # Rotas da API
│   │   ├── pessoas.py         # CRUD de pessoas
│   │   └── opinioes.py        # CRUD de opiniões
│   └── database.db            # Banco de dados SQLite
│
├── frontend/                  # Interface do usuário
│   ├── Index.html             # Página principal
│   ├── opinioes.html          # Página de opiniões
│   ├── config.js              # Configuração centralizada
│   ├── index.js               # Scripts da página principal
│   ├── opinioes.js            # Scripts da página de opiniões
│   ├── index.css              # Estilos da página principal
│   ├── opinioes.css           # Estilos da página de opiniões
│   ├── Images/                # Imagens do projeto
│   ├── CSS_Modal/             # Estilos dos modais por estado
│   ├── JS_Modal/              # Scripts dos modais por estado
│   ├── Cards_Aruera/          # Componentes de cards
│   └── Livros/                # Recursos adicionais
│
└── README.md                  # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Python 3.8+
- pip (gerenciador de pacotes Python)
- Um navegador web moderno

### 1. Instalar Dependências

```bash
# Navegar para o diretório do backend
cd backend

# Instalar as dependências Python
pip install fastapi sqlalchemy uvicorn python-dotenv

# (Opcional) Criar um ambiente virtual
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install fastapi sqlalchemy uvicorn python-dotenv
```

### 2. Executar o Backend (API)

```bash
# A partir do diretório backend/
python main.py

# Ou usando uvicorn diretamente:
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

A API estará disponível em: **http://localhost:8000**

Documentação interativa (Swagger UI): **http://localhost:8000/docs**

### 3. Abrir o Frontend

```bash
# Abrir o arquivo Index.html em um navegador
# Opção 1: Abrir diretamente
open frontend/Index.html

# Opção 2: Usar um servidor web local (recomendado)
cd frontend
python -m http.server 3000
# Acesse: http://localhost:3000/Index.html
```

## 🔌 API Endpoints

### Pessoas

- **GET** `/pessoas/` - Listar todas as pessoas
- **POST** `/pessoas/` - Criar uma nova pessoa (ou retornar existente se e-mail duplicado)
  ```json
  {
    "nome": "João Silva",
    "email": "joao@example.com"
  }
  ```

### Opiniões

- **GET** `/opinioes/` - Listar todas as opiniões
- **POST** `/opinioes/{pessoa_id}` - Criar uma nova opinião para uma pessoa
  ```json
  {
    "texto": "Excelente informação sobre solos!"
  }
  ```

### Health Check

- **GET** `/health` - Verificar se a API está funcionando

## 🛠️ Configuração

### Backend (.env)

O arquivo `backend/.env` contém as configurações da API:

```env
DATABASE_URL=sqlite:///./database.db
DEBUG=True
API_PORT=8000
API_HOST=0.0.0.0
CORS_ORIGINS=["http://localhost:3000", "http://localhost:8000", "*"]
```

### Frontend (config.js)

O arquivo `frontend/config.js` contém as configurações do frontend:

```javascript
const CONFIG = {
    API_BASE_URL: 'http://localhost:8000',
    isDevelopment: true,
    timeout: 5000,
    retries: 3,
};
```

## 📊 Banco de Dados

O projeto utiliza **SQLite** como banco de dados. As tabelas são criadas automaticamente ao iniciar a API.

### Modelos

#### Pessoa
- `id` (Integer, Primary Key)
- `nome` (String)
- `email` (String, Unique)
- Relacionamento: `opinioes` (one-to-many)

#### Opiniao
- `id` (Integer, Primary Key)
- `texto` (String)
- `pessoa_id` (Integer, Foreign Key)
- Relacionamento: `autor` (many-to-one)

## ✨ Funcionalidades

### Frontend
- 🗺️ Mapa interativo dos solos brasileiros por estado
- 📱 Slider de imagens sobre solos
- 💬 Formulário para enviar opiniões
- 📋 Listagem de opiniões recentes
- 🎨 Design responsivo e moderno

### Backend
- 🔐 Validação de dados com Pydantic
- 🗄️ ORM com SQLAlchemy
- 🔄 Lógica de Upsert para pessoas (evita duplicação de e-mail)
- 📝 Documentação automática com Swagger UI
- 🚀 CORS habilitado para desenvolvimento

## 🐛 Troubleshooting

### Erro: "Failed to fetch"

**Causa:** O servidor FastAPI não está rodando ou não está acessível.

**Solução:**
1. Certifique-se de que o servidor está rodando em `http://localhost:8000`
2. Verifique se a porta 8000 não está sendo usada por outro processo
3. Verifique o console do navegador (F12) para mais detalhes

### Erro: "ModuleNotFoundError: No module named 'fastapi'"

**Causa:** As dependências não foram instaladas.

**Solução:**
```bash
pip install fastapi sqlalchemy uvicorn python-dotenv
```

### Erro: "CORS policy"

**Causa:** O frontend está tentando acessar a API de um domínio diferente.

**Solução:**
1. Certifique-se de que a URL da API está correta em `frontend/config.js`
2. Verifique se o CORS está habilitado no `backend/main.py`

## 📚 Tecnologias Utilizadas

### Backend
- **FastAPI** - Framework web assíncrono
- **SQLAlchemy** - ORM para Python
- **Pydantic** - Validação de dados
- **Uvicorn** - Servidor ASGI
- **SQLite** - Banco de dados

### Frontend
- **HTML5** - Estrutura
- **CSS3** - Estilização
- **JavaScript (Vanilla)** - Interatividade
- **Fetch API** - Comunicação com a API

## 🤝 Contribuindo

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Autores

- **Kauê Lázaro** - Desenvolvedor
- **Daniel Moreira** - Desenvolvedor
- **Nicollas Marques** - Desenvolvedor
- **Gustavo Santos** - Desenvolvedor
- **Layzon Nicolas** - Desenvolvedor
- **Ronald Teobaldo** - Desenvolvedor

## 📞 Suporte

Para reportar bugs ou sugerir melhorias, abra uma issue no repositório GitHub.

---

**Desenvolvido com ❤️ para o IFCE - Informática 2**
