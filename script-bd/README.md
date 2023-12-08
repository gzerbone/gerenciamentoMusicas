# Script de Banco de Dados

Este diretório contém o script SQL para criação do banco de dados utilizado no projeto "Gerenciador de Músicas". Antes de executar o aplicativo, é necessário criar o banco de dados e as tabelas necessárias.

## Instruções

1. **Nome do Banco de Dados:** O nome do banco de dados utilizado é `gerenciamento`.

2. **Conexão MYSQL:** Certifique-se de que o seu aplicativo Node.js está configurado para se conectar ao seu próprio servidor MySQL. Para isso, verifique as configurações de conexão SQL no arquivo `db.js` ou equivalente no seu projeto.

   ```js
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

   ```
   `DICA:` Se necessário, altere a porta para alguma disponível na sua máquina.

3. **Executando o Script:**
   - Abra o seu cliente MySQL ou ferramenta de administração preferida.
   - Execute o conteúdo do arquivo `gerenciamento.txt` para criar a sua própria estrutura do banco de dados.

4. **Inserções Iniciais (Opcional):**
   - O script inclui algumas inserções iniciais para artistas, álbuns e músicas fictícias. Se desejar, você pode executar essas inserções para ter dados iniciais.


## Estrutura do Banco de Dados

### Tabela Artista
```sql
CREATE TABLE artista
(
	id_artista int unsigned not null auto_increment PRIMARY KEY,
    nome varchar(60) not null
);

```

### Tabela Album
````sql

CREATE TABLE album
(
	id_album int unsigned not null auto_increment PRIMARY KEY,
    titulo_album varchar(20) not null,
    ano_lancamento YEAR,
    id_artista int unsigned not null,
    CONSTRAINT FK_artista FOREIGN KEY (id_artista) REFERENCES artista(id_artista)
);

````
### Tabela Música
````sql

CREATE TABLE musica
(
	id_musica int unsigned not null auto_increment PRIMARY KEY,
    titulo varchar(80) not null,
    id_album int unsigned not null,
    CONSTRAINT FK_album FOREIGN KEY (id_album) REFERENCES album(id_album)
);
````


Lembre-se de *ajustar as configurações de conexão* do seu aplicativo para corresponder às suas credenciais e configurações do banco de dados MySQL.

---

Este script foi desenvolvido como parte do projeto "Gerenciador de Músicas" utilizando Node.js, Express.js, EJS e MySQL. Consulte o `README` principal do projeto para mais informações.
