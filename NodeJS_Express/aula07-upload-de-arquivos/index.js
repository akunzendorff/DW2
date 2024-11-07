import express from "express";
const app = express();

//Importando o multer
import multer from "multer";
const upload = multer({ dest: "public/uploads/" });

//Configurações
app.use(express.static("public"));
app.set("view engine", "ejs");

//Rota Principal
app.get("/", (req, res) => {
  res.render("index");
});

//Rota de Upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
});

const port = 8081;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro! ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
