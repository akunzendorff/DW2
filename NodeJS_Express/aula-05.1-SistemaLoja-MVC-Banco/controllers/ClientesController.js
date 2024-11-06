import express from "express";
const router = express.Router();
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll();
  res.render("clientes", {
    clientes: clientes,
  });
});

export default router;
