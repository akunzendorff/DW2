import express from "express";
const app = express();
import filmesController from "./controllers/filmesController.js";
import connection from "./config/sequelize-config.js";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", filmesController);

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`create database if not exists filmes;`)
  .then(() => {
    console.log(`O banco de dados está criado!`);
  })
  .catch((error) => {
    console.log(error);
  });

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor ${error}.`);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
