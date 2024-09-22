import express from "express";

const router = express.Router();

// Rota Produtos
router.get("/produtos/", (req, res) => {
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

export default router;
