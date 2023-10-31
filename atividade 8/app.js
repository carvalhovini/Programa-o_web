const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

const calculadoraRouter = require('./routes/calculadora');
app.use('/', calculadoraRouter);

app.listen(port, () => {
  console.log(`Aplicativo de calculadora rodando na porta ${port}`);
});
