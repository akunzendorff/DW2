// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules

// Criando uma instância do Express
const app = express();

//Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

// Criando a rota principal
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

// Rota Perfil
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  // Será renderizada a página perfil.ejs que está na pasta 'views'
  res.render("perfil", {
    nome: nome,
  });
});

// Rota de vídeos
//:playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const videos = req.params.videos;
  const playlist = req.params.playlist;
  const video = req.params.video;
  // Será renderizada a página videos.ejs que está na pasta 'views'
  res.render("videos", {
    videos: videos,
    playlist: playlist,
    video: video,
  });
});

// Rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    //Enviando a variável para a página
    produto /*Será chamado na página*/: produto, //Variável que está no index (rew.params)
    listaProdutos: listaProdutos,
    // Na página produto.ejs haverá uma testagem de condição
  });
});

//Rota de pedidos
app.get("/pedidos", (req, res) => {
  // Arrays de objetos com os pedidos
  const pedidos = [
    { produto: "Celular", valor: 3000 },
    { produto: "Computador", valor: 4000 },
    { produto: "Tablet", valor: 2000 },
    { produto: "Notebook", valor: 3800 },
  ];
  res.render("pedidos", {
    // Enviando o array de objetos para a página
    pedidos: pedidos,
  });
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
