const API_BASE_URL = 'http://localhost:8000';
let currentToken = null;

function showForm(formType) {
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(`${formType}-form`).classList.add('active');
    event.target.classList.add('active');
}

function showMessage(message, type = 'success') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

function showDashboard() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('dashboard-section').classList.remove('hidden');
    loadUsers();
}

function showAuth() {
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('dashboard-section').classList.add('hidden');
    currentToken = null;
}

async function register(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Usuário registrado com sucesso! Faça login para continuar.');
            showForm('login');
        } else {
            showMessage(data.detail || 'Erro ao registrar usuário', 'error');
        }
    } catch (error) {
        showMessage('Erro de conexão com o servidor', 'error');
    }
}

async function login(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            currentToken = data.access_token;
            showMessage('Login realizado com sucesso!');
            showDashboard();
        } else {
            showMessage(data.detail || 'Erro ao fazer login', 'error');
        }
    } catch (error) {
        showMessage('Erro de conexão com o servidor', 'error');
    }
}

async function loadUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users`);
        const users = await response.json();
        
        const usersContainer = document.getElementById('users-container');
        usersContainer.innerHTML = '';
        
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <strong>Email:</strong> ${user.email}<br>
                <small>Registrado em: ${new Date(user.created_at).toLocaleString('pt-BR')}</small>
            `;
            usersContainer.appendChild(userCard);
        });
    } catch (error) {
        showMessage('Erro ao carregar usuários', 'error');
    }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    login(email, password);
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    register(email, password);
});

document.getElementById('logout-btn').addEventListener('click', () => {
    showAuth();
    showMessage('Logout realizado com sucesso!');
});