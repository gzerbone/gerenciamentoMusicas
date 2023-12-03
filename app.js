const express = require('express');
const app = express();
const mysql = require('./db.js');
app.use(express.urlencoded({extended: false}));
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  //Pondo informações do cards
  const query = 
  `
  SELECT album.id_album ,musica.titulo, album.ano_lancamento, album.titulo_album, artista.nome , artista.id_artista
  FROM musica 
  INNER JOIN album ON musica.id_album = album.id_album
  INNER JOIN artista ON album.id_artista = artista.id_artista 
  `;
  
  mysql.query(query, (err, resultCard) => {
    if (err) {      console.error('Erro ao consultar o banco de dados:', err);
      res.send('Erro ao consultar o banco de dados');
      return;
    }
  res.render('index', {resultCard});
  });
});

/*******
  INSERÇÃO
********/

app.post('/salvar-album', (req, res) => {
  const { id_artista, titulo_album } = req.body;

  const query = 'INSERT INTO album (titulo_album, id_artista) VALUES (?, ?)';
  mysql.query(query, [titulo_album, id_artista], (err, result) => {
    if (err) {
      console.error('Erro ao inserir álbum no banco de dados:', err);
    } else {
      console.log('Álbum inserido com sucesso');
    }
    
  });
});

// (2)GET /inserir
app.get('/inserir', (req, res) => {
  const query = 'SELECT id_artista, nome FROM artista';

  mysql.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.send('Erro ao consultar o banco de dados');
      return;
    }

    res.render('inserir', { results }); // Enviando a variável results para o modelo EJS
  });
});

  
  // (2)POST /inserir
app.post("/inserir", function (req, res) {
  //Inserir Artista
  const insert_artista = "INSERT INTO artista (nome) VALUES (?)";
  const dadosArtista = [req.body.nome];
  mysql.query(insert_artista, dadosArtista, function(err) {});


  //RECUPERAÇÃO DE ID DO ARTISTA PARA RELACIONAMENTO COM A TABELA ALBUM
  FK_artista = "";
  const ref_artista = "SELECT * FROM artista ORDER BY id_artista DESC limit 1";
  mysql.query(ref_artista, [], function(err, IdArtista){
  FK_artista = IdArtista[0].id_artista;
    

  //Inserir Album
  const insert_album = "INSERT INTO album (titulo_album, ano_lancamento, id_artista) VALUES (?, ?, ?)";
  const dadosAlbum = [req.body.titulo_album, req.body.ano_lancamento, FK_artista];
  mysql.query(insert_album, dadosAlbum, function(err) {});
  });


  //RECUPERAÇÃO DE ID's PARA O RELACIONAMENTO
  FK_album = "";
  const ref_album = "SELECT * FROM album ORDER BY id_album DESC limit 1";
  mysql.query(ref_album, [], function(err, IdAlbum){
  FK_album = IdAlbum[0].id_album;
  console.log(FK_album);


    //Inserir MÚSICA
    const sql = "INSERT INTO musica (titulo, ano_lancamento, id_album) VALUES (?, ?, ?)";
    const dadosMestre = [req.body.titulo, req.body.ano_lancamento, FK_album];
    mysql.query(sql, dadosMestre, function (err) {
      if (err) {
      return console.error(err.message);
      }
      res.redirect("/");
    });
  });
});


/*******
  UPDATE
********/

app.get('/editar-album/:id', (req, res) => {
  const albumId = req.params.id;
  const query = 
  `
  SELECT album.id_album ,album.titulo_album, album.ano_lancamento, artista.id_artista, artista.nome
  FROM album 
  INNER JOIN artista ON album.id_artista = artista.id_artista
  WHERE album.id_album = ?
  `;
  // Consulta ao banco de dados para obter os detalhes do álbum a ser editado
  mysql.query(query, [albumId], (error, dados) => {    
    // Renderiza o formulário de edição e passa os detalhes do álbum para o template EJS
    res.render('editar', {dados});
  });
});


// Rota para processar a submissão do formulário de edição
app.post('/editar-album/:id', (req, res) => {
  const albumId = req.params.id;
  const { titulo_album, ano_lancamento, id_artista } = req.body;

  // Atualiza o registro do álbum no banco de dados
  mysql.query(
    'UPDATE album SET titulo_album = ?, ano_lancamento = ?, id_artista = ? WHERE id_album = ?',
    [titulo_album, ano_lancamento, id_artista, albumId],
    (error, result) => {
      if (error) {
        console.error('Erro na atualização do álbum:', error);
        return res.status(500).send('Erro interno do servidor');
      }
      

      // Redireciona para a página principal ou exibe uma mensagem de sucesso
      res.redirect('/');
    }
  );
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
