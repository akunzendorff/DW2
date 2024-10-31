import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    message: req.flash(),
  });
});

router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
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

router.post("/autenticate", (req, res) => {
  const email = req.body.email;
});
