// Importando o Express
const express = require("express");

// Criando uma instância do Express
const app = express();

// Definindo o EJS como renderizador de páginas
app.set("view engine", "ejs");

// Definir a pasta dos arquivos estáticos (public)
app.set(express.static("public"));

// Criando a rota principal
app.get("/", (req, res) => {
  //Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

// Rota Clientes
app.get("/clientes/:nome?/:cpf?/:endereco?", (req, res) => {
  const cliente = req.params.cliente;
  const listaClientes = [
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
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  });
});

// Rota Produtos
app.get("/produtos/:nome?/:preco?/:categoria?", (req, res) => {
  const nome = req.params.nome;
  const preco = req.params.preco;
  const categoria = req.params.categoria;

  res.render("produtos", {
    nome: nome,
    preco: preco,
    categoria: categoria,
  });
});

// Rota pedidos
app.get("/pedidos/:numero?/:valor?", (req, res) => {
  const numero = req.params.numero;
  const valor = req.params.valor;

  res.render("pedidos", {
    numero: numero,
    valor: valor,
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
