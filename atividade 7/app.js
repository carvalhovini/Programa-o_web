const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Formulário de Marcação de Consulta</h1>
        <form action="/submit" method="post">
          <h2>Dados Pessoais</h2>
          <label>Nome Completo: <input type="text" name="nome" required></label><br>
          <label>CPF: <input type="text" name="cpf" required></label><br>
          <label>Data de Nascimento: <input type="date" name="dataNascimento" required></label><br>
          <label>Endereço: <input type="text" name="endereco" required></label><br>
          <label>UF: <input type="text" name="uf" required></label><br>
          <label>CEP: <input type="text" name="cep" required></label><br>
          <label>E-mail: <input type="email" name="email" required></label><br>
          <label>Telefone: <input type="tel" name="telefone" required></label><br>

          <h2>Dados da Consulta</h2>
          <label>Especialidade Médica:
            <select name="especialidade" required>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Dermatologia">Dermatologia</option>
              <!-- Adicione outras especialidades aqui -->
            </select>
          </label><br>
          <label>Data e Hora da Consulta: <input type="datetime-local" name="dataHoraConsulta" required></label><br>
          <label>Medicamentos Alergicos:
            <input type="checkbox" name="alergia[]" value="Antibióticos"> Antibióticos
            <input type="checkbox" name="alergia[]" value="Anti-inflamatórios"> Anti-inflamatórios
            <!-- Adicione outros medicamentos aqui -->
          </label><br>
          <label>Informações Adicionais: <textarea name="informacoes" rows="4"></textarea></label><br>

          <button type="submit">Marcar Consulta</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  const emptyFields = [];

  for (const field in formData) {
    if (formData[field] === '') {
      emptyFields.push(field);
    }
  }

  if (emptyFields.length > 0) {
    res.status(400).send(`Campos vazios: ${emptyFields.join(', ')}`);
  } else {
    res.send('Consulta marcada com sucesso!');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
