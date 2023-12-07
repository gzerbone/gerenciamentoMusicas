    mysql.query(queryNumMinMusicas, [numMinMusicas], (err, resultMinMusicas) => {
      if (err) {
          console.error('Erro na consulta SQL:', err);
          res.send('Erro interno do servidor');
          return;
      }