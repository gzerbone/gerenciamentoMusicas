# Gerenciador de Músicas

## Descrição

O Gerenciador de Músicas é um aplicativo web desenvolvido utilizando Node.js, Express e EJS para oferecer uma plataforma simples e eficiente de gerenciamento de informações relacionadas a músicas, álbuns e artistas. Com esta aplicação, é possível adicionar, editar e excluir entradas do banco de dados, proporcionando uma experiência personalizável e fácil de usar para organizar suas preferências musicais.

## Funcionalidades

- `Cadastro e Edição:` Adicione novas músicas, álbuns e artistas ao seu banco de dados e edite as informações conforme necessário.

- `Exclusão:` Remova músicas, álbuns ou artistas que não são mais relevantes para manter seu banco de dados atualizado.

- `Visualização:` Tenha uma visão geral de todas as músicas cadastradas, incluindo detalhes como nome, álbum, artista e ano de lançamento.

- `Ordenação:` Ordene suas músicas por nome, álbum ou artista para facilitar a busca e organização.

## Tecnologias Utilizadas

- `Node.js:` Plataforma de execução de código JavaScript do lado do servidor.

- `Express:` Framework web para Node.js que simplifica o desenvolvimento de aplicativos web.

- `EJS (Embedded JavaScript):` Linguagem de modelagem para geração de HTML com JavaScript embutido, facilitando a criação de páginas dinâmicas.

- `MySQL:` Sistema de gerenciamento de banco de dados relacional para armazenar e recuperar informações de forma eficiente.

## Configuração

### Pré-requisitos

- Node.js e npm instalados.
- Express e EJS instalados
- Banco de dados MySQL configurado.
- `DICA:` A utilização do `nodemoon` pode facilitar bastante seu desenvolvimento.

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/gzerbone/projeto_gerenciamento.git
   cd projeto_gerenciamento
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados MySQL:

   - Crie um banco de dados chamado `gerenciador_musicas`.
   - Edite o arquivo `db.js` na raiz do projeto com as informações corretas de conexão ao seu banco de dados.

4. Execute o aplicativo:

   ```bash
   npm start
   ```

5. Acesse o aplicativo em seu navegador:

   [http://localhost:3000](http://localhost:3000)

## Contribuições

Contribuições são bem-vindas! Se você encontrar problemas ou quiser adicionar novos recursos, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Aproveite o Gerenciador de Músicas para organizar suas preferências musicais de maneira simples e eficaz! 🎶✨
