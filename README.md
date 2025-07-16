# User Registration SaaS

Um sistema SaaS simples para cadastro e autenticação de usuários, desenvolvido com Python (FastAPI), PostgreSQL e interface web responsiva.

## 🚀 Funcionalidades

- **Registro de Usuários**: Cadastro com email e senha
- **Autenticação**: Login com JWT tokens
- **Dashboard**: Lista de usuários registrados
- **API REST**: Endpoints para integração
- **Interface Responsiva**: UI moderna e intuitiva

## 🛠️ Tecnologias Utilizadas

### Backend
- **FastAPI**: Framework web moderno e rápido
- **SQLAlchemy**: ORM para Python
- **PostgreSQL**: Banco de dados relacional
- **JWT**: Autenticação com tokens
- **bcrypt**: Hash de senhas

### Frontend
- **HTML5/CSS3**: Interface moderna
- **JavaScript**: Funcionalidades interativas
- **Nginx**: Servidor web

### Infraestrutura
- **Docker**: Containerização
- **Docker Compose**: Orquestração de serviços

## 📁 Estrutura do Projeto

```
teste-claude/
├── backend/
│   ├── main.py              # Aplicação FastAPI
│   ├── database.py          # Configuração do banco
│   ├── auth.py              # Autenticação
│   ├── requirements.txt     # Dependências Python
│   └── Dockerfile          # Container do backend
├── frontend/
│   ├── index.html          # Interface principal
│   ├── styles.css          # Estilos
│   ├── script.js           # Funcionalidades JS
│   └── Dockerfile          # Container do frontend
├── docker-compose.yml      # Orquestração dos serviços
├── init.sql               # Inicialização do banco
└── README.md              # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Docker
- Docker Compose

### Execução

1. **Clone o repositório**:
```bash
git clone <url-do-repositorio>
cd teste-claude
```

2. **Execute o sistema**:
```bash
docker-compose up --build
```

3. **Acesse a aplicação**:
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:8000
   - **Documentação da API**: http://localhost:8000/docs

### Parar o sistema
```bash
docker-compose down
```

## 📊 Endpoints da API

### Autenticação
- `POST /api/register` - Registrar novo usuário
- `POST /api/login` - Fazer login

### Usuários
- `GET /api/users` - Listar todos os usuários

## 🎯 Como Usar

1. **Registro**: Acesse http://localhost:3000 e clique em "Registrar"
2. **Login**: Use suas credenciais para entrar
3. **Dashboard**: Visualize a lista de usuários registrados

## 🔧 Configuração

### Variáveis de Ambiente
O sistema usa as seguintes configurações padrão:
- **Database**: `postgresql://user:password@db:5432/saas_db`
- **JWT Secret**: `your-secret-key-here`

### Personalização
Para personalizar as configurações, edite:
- `backend/main.py` - Configurações gerais
- `backend/auth.py` - Configurações de autenticação
- `docker-compose.yml` - Configurações de infraestrutura

## 🐳 Serviços Docker

- **db**: PostgreSQL 13
- **backend**: FastAPI (Python)
- **frontend**: Nginx com arquivos estáticos

## 📝 Desenvolvimento

### Executar em modo de desenvolvimento
```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd frontend
# Servir arquivos estáticos com servidor local
```

### Logs
```bash
# Ver logs de todos os serviços
docker-compose logs

# Ver logs de um serviço específico
docker-compose logs backend
```

## 🔒 Segurança

- Senhas são hasheadas com bcrypt
- Autenticação via JWT tokens
- CORS configurado para desenvolvimento
- Validação de entrada com Pydantic

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.