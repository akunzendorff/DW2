// Importando o Express
const express = require("express");

// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

// Criando a rota principal
app.get("/", (req, res) => {
  //Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

// Rota Clientes
app.get("/clientes/", (req, res) => {
  const clientes = [
    {
      nome: "Ana Flávia Kunzendorff",
      cpf: "123.456.789-01",
      endereco: "rua das oliveiras, 999",
    },
    {
      nome: "Gustavo Lanna",
      cpf: "234.567.890-12",
      endereco: "rua das papoulas, 555",
    },
    {
      nome: "Isabely Lemos",
      cpf: "345.678.901-23",
      endereco: "rua dos escreventes, 444",
    },
    {
      nome: "Yasmin Pires",
      cpf: "456.789.012-34",
      endereco: "rua dos pratos, 222",
    },
  ];

  // Renderizando a página clientes.ejs que está na pasta 'views'
  res.render("clientes", {
    clientes: clientes,
  });
});

// Rota Produtos
app.get("/produtos/", (req, res) => {
  const produtos = [
    {
      produto: "Alface",
      preco: 5,
      categoria: "Verduras",
    },
    {
      produto: "Morango",
      preco: 10,
      categoria: "Frutas",
    },
    {
      produto: "Batata",
      preco: 6,
      categoria: "Legumes",
    },
    {
      produto: "Pitaya",
      preco: 13,
      categoria: "Frutas",
    },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

// Rota pedidos
app.get("/pedidos/", (req, res) => {
  const pedidos = [
    {
      numero: "159263147852",
      valor: 82,
    },
    {
      numero: "169487236548",
      valor: 65,
    },
    {
      numero: "948516234785",
      valor: 43,
    },
    {
      numero: "346781592146",
      valor: 28,
    },
  ];

  res.render("pedidos", {
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
