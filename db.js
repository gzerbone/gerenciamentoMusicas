const mysql = require('mysql');

// Conectando com o BD
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gerenciamento',
  });
  
  
  // Verificação do BD
  conexao.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados: ' + err.message);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados');
    }
  });
  module.exports = conexao;
