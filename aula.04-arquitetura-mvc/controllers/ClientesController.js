import express from "express"; // ES6 Modules

const router = express.Router();

// Rota Clientes
router.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Ana Silva",
      cpf: "123,456,789-01",
      endereco:
        "Rua das Flores, 123 - Bairro Jardim Primavera - Felicidade - SP",
    },
    {
      nome: "Isabely Moreira",
      cpf: "123,456,789-01",
      endereco:
        "Rua das Dores, 123 - Bairro Jardim Sofrimento - Felicidade - SP",
    },
    {
      nome: "Gustavo Santos",
      cpf: "123,456,789-01",
      endereco:
        "Rua das Pedras, 123 - Bairro Jardim Concreto - Felicidade - SP",
    },
    {
      nome: "Yasmin Tiradentes",
      cpf: "123,456,789-01",
      endereco:
        "Rua das Laranjas, 123 - Bairro Jardim Dentista - Felicidade - SP",
    },
  ];

  // Será renderizada a página clientes.ejs que está na pasta 'views'
  res.render("clientes", {
    clientes: clientes,
  });
});

export default router;
