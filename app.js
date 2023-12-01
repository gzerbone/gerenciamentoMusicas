const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Conectando com o BD
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teste_gerenciamento',
});

// Verificação do BD
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados');
  }
});


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
