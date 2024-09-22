import express from "express";

const router = express.Router();

// Rota pedidos
router.get("/pedidos/", (req, res) => {
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

export default router;