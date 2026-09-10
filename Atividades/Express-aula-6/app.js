const express = require('express');

const app = express();

const PORT = 3000;

// Middleware de registro de acesso
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Rota /
app.get('/', (req, res) => {
    res.send('<h1>/</h1>');
});

// Rota /about
app.get('/about', (req, res) => {
    res.send('<h1>/about</h1>');
});

// Rota /data
app.post('/data', (req, res) => {
    res.send('<h1>/data</h1>');
});

// Rota /users
app.get('/users', (req, res) => {
    res.send('<h1>/users</h1>');
});

// Rota /signin
app.get('/signin', (req, res) => {
    res.redirect('/signup');
});

// Rota /signup
app.get('/signup', (req, res) => {
    res.send('<h1>/signup</h1>');
});

// Rota /users/:userid
app.get('/users/:userid', (req, res) => {
    const userid = req.params.userid;

    res.send(`<h1>Bem-vindo, usuário ${userid}!</h1>`);
});

// Página de erro 404
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Página não encontrada</h1>
        <a href="/">Voltar para o início</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
