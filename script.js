// Simulação de dados de usuário (em um ambiente real, isso estaria no servidor)
const users = [
    { username: 'maria', password: '123' },
    { username: 'pedro', password: '123' },
    // Adicione mais usuários conforme necessário
];

function authenticateUser() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        alert('Login bem-sucedido!');
    } else {
        alert('Login falhou. Verifique seu nome de usuário e senha.');
    }
}
