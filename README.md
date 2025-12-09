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
├── server.js                  # Servidor proxy (Node.js/Express)
├── package.json               # Dependências do Node.js
└── README.md                  # Este arquivo
```

## 🚀 Como Executar o Projeto

### Opção 1: Usando o Servidor Proxy (Recomendado) ⭐

Esta é a forma mais fácil e recomendada para desenvolvimento. O servidor proxy serve o frontend e redireciona as requisições da API para o backend.

#### Pré-requisitos

- Node.js 14+ e npm
- Python 3.8+
- pip (gerenciador de pacotes Python)

#### Passos

1. **Instale as dependências do Node.js:**
   ```bash
   npm install
   ```

2. **Instale as dependências do Python (backend):**
   ```bash
   cd backend
   pip install fastapi sqlalchemy uvicorn python-dotenv
   cd ..
   ```

3. **Inicie o backend (em um terminal separado):**
   ```bash
   cd backend
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

4. **Inicie o servidor proxy (em outro terminal):**
   ```bash
   npm start
   ```

5. **Acesse a aplicação:**
   - Página principal: **http://localhost:3000**
   - Página de opiniões: **http://localhost:3000/opinioes**
   - API (via proxy): **http://localhost:3000/api**
   - Documentação da API: **http://localhost:3000/api/docs**

### Opção 2: Execução Separada (Desenvolvimento Avançado)

Se você preferir executar o frontend e backend separadamente:

#### Terminal 1 - Backend

```bash
cd backend
pip install fastapi sqlalchemy uvicorn python-dotenv
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

A API estará disponível em: **http://localhost:8000**

#### Terminal 2 - Frontend

```bash
cd frontend
python -m http.server 3000
```

O frontend estará disponível em: **http://localhost:3000/Index.html**

**Nota:** Nesta configuração, você precisará ajustar o `frontend/config.js` para apontar para `http://localhost:8000` em vez de `/api`.

## 🔌 API Endpoints

### Pessoas

- **GET** `/api/pessoas/` - Listar todas as pessoas
- **POST** `/api/pessoas/` - Criar uma nova pessoa (ou retornar existente se e-mail duplicado)
  ```json
  {
    "nome": "João Silva",
    "email": "joao@example.com"
  }
  ```

### Opiniões

- **GET** `/api/opinioes/` - Listar todas as opiniões
- **POST** `/api/opinioes/{pessoa_id}` - Criar uma nova opinião para uma pessoa
  ```json
  {
    "texto": "Excelente informação sobre solos!"
  }
  ```

### Health Check

- **GET** `/api/health` - Verificar se a API está funcionando

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
    API_BASE_URL: '/api',      // Proxy para o backend
    isDevelopment: true,
    timeout: 5000,
    retries: 3,
};
```

### Servidor Proxy (server.js)

O arquivo `server.js` configura o servidor proxy:

```javascript
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';
```

Você pode alterar a porta e a URL do backend usando variáveis de ambiente:

```bash
PORT=5000 BACKEND_URL=http://localhost:9000 npm start
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
- 🔄 Lógica de Upsert para pessoas (evita duplicação)
- 📝 Documentação automática com Swagger UI
- 🚀 CORS habilitado para desenvolvimento

### Servidor Proxy
- 🔀 Redirecionamento de requisições para o backend
- 📁 Serve arquivos estáticos do frontend
- 🔗 Resolução de problemas de CORS
- 📊 Logging de requisições

## 🐛 Troubleshooting

### Erro: "Cannot find module 'express'"

**Causa:** As dependências do Node.js não foram instaladas.

**Solução:**
```bash
npm install
```

### Erro: "ModuleNotFoundError: No module named 'fastapi'"

**Causa:** As dependências do Python não foram instaladas.

**Solução:**
```bash
cd backend
pip install fastapi sqlalchemy uvicorn python-dotenv
```

### Erro: "Connection refused" ao conectar com a API

**Causa:** O servidor backend não está rodando.

**Solução:**
1. Certifique-se de que o backend está rodando em `http://localhost:8000`
2. Execute:
   ```bash
   cd backend
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

### Erro: "HTTP 404" ao acessar a API

**Causa:** O servidor proxy não consegue conectar com o backend.

**Solução:**
1. Verifique se o backend está rodando
2. Verifique a URL do backend em `server.js` ou na variável de ambiente `BACKEND_URL`
3. Reinicie o servidor proxy

### Erro: "CORS policy" no console do navegador

**Causa:** O CORS não está configurado corretamente.

**Solução:** Este erro não deve ocorrer ao usar o servidor proxy, pois ele redireciona as requisições para o mesmo domínio. Se ocorrer, verifique:
1. Se o servidor proxy está rodando
2. Se o frontend está acessando a API via `/api` em vez de uma URL externa

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

### Servidor Proxy
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **http-proxy-middleware** - Proxy reverso

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
