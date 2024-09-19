import express from "express"; // ES6 Modules

const router = express.Router();

//Rota de pedidos
router.get("/pedidos", (req, res) => {
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

export default router;
