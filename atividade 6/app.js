const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, dataAgendamento } = req.body;
    res.render('dados'); // O nome do arquivo de visualização sem a extensão .html
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
