// Importando o Express na aplicação
import express from "express"; // CommonJS Modules

// Criando uma instância do Express
const app = express();

//Importando os controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

//Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

//Definindo o uso das rotas que estão nos controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// Criando a rota principal
app.get("/", (req, res) => {
  // Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
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
