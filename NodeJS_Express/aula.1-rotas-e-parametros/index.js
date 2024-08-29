// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

// Criando a rota principal
app.get("/", (req, res) => {
  res.send("<h1>Hello World!<br>Bem-vindo!</h1><br><hr>");
});

// Rota Perfil
// app.get("/perfil/:nome", (req, res) => {
//   res.send("<h1>Perfil do usuário</h1>");
// });

//:nome é um parâmetro obrigatório
app.get("/perfil/:nome", (req, res) => {
  // Coletando o parâmetro e guardando na variável
  const nome = req.params.nome
  res.send(`<h1>Olá, ${nome}! Seja bem-vindo!</h1>`);
});

// Rota de vídeos
app.get("/videos", (req, res) => {
  res.send("<h1>Página de vídeos</h1>");
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});

