import express from "express"; // ES6 Modules

const router = express.Router();

// Rota de produtos
router.get("/produtos/:produto?", (req, res) => {
    const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];

    res.render("produtos", {
        listaProdutos: listaProdutos,
    });
});

export default router;