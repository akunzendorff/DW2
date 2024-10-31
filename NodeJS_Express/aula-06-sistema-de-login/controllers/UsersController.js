import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    messages: req.flash(),
  });
});

router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
    messages: req.flash(),
  });
});

router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (user == undefined) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("/login");
      });
    } else {
      req.flash("danger", "Usuário não cadastrado. Faça o login!");
      res.redirect("/cadastro");
    }
  });
});

router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user != undefined) {
        //valida a senha/ verifica o hash
        const correct = bcrypt.compareSync(password, user.password);
        //se a senha for valida
        if (correct) {
          //autoriza o login
          req.session.user = {
            id: user.id,
            email: user.email,
          };
          //res.send(`Usuário logado: <br>
          //  ID: ${req.session.user['id']}<br>
          //  Email: ${req.session.user['email']}`);

          //enviar uma messagem de sucesso
          req.flash("success", "Login efetuado com sucesso!");

          res.redirect("/");
          // se a senha nao for valida
        } else {
          req.flash(
            "danger",
            "A senha informada está incorreta. Tente novamente!"
          );
          res.redirect("/login");
        }
      } else {
        //se o usuario nao existe
        req.flash(
          "danger",
          "O usuário digitado não existe! Verifique os dados digitados."
        );
        res.redirect("/login");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
