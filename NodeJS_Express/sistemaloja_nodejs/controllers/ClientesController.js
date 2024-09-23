import express from "express"; // ES6 Modules

const router = express.Router();

// Rota Clientes
router.get("/clientes", (req, res) => {
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

export default router;