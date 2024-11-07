import express from "express";
const router = express.Router();
// Importando o model de Cliente
import Cliente from "../models/Cliente.js";

import Auth from "../middleware/Auth.js";

// ROTA CLIENTES
router.get("/clientes", Auth, (req, res) => {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// Rota de cadastro de clientes
router.post("/clientes/new", Auth, (req, res) => {
  // Recebendo dados do formulário e gravando nas variáveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

//Rota de exclusão de clientes
//essa rota possui um parâmetro id
router.get("/clientes/delete/:id", Auth, (req, res) => {
  //Coletar o id que veio na url
  const id = req.params.id;
  //método para excluir
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de edição de clientes
router.get("/clientes/edit/:id", Auth, (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEdit", {
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Rota de alteração de cliente
router.post("/clientes/update/", Auth, (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    {
      where: { id: id },
    }
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
