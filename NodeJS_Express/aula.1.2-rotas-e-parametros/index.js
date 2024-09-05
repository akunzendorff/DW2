// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules

// Criando uma instância do Express
const app = express();

// Criando a rota principal
app.get("/", (req, res) => {
  res.send("<h1>Hello World!<br>Bem-vindo!</h1><br><hr>");
});

// Rota Perfil

//:nome é um parâmetro obrigatório
//:nome? é um parâmetro opcional

app.get("/perfil/:nome?", (req, res) => {
  // Coletando o parâmetro e guardando na variável
  const nome = req.params.nome;

  //Verificando se o parâmetro nome existe
  if (nome) {
    res.send(`<h1>Olá, ${nome}! Seja bem-vindo!</h1>`);
  } else {
    res.send(`<h1>Faça login para acessar seu perfil.</h1>`);
  }
});

// Rota de vídeos
//:playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;

  if (playlist && video == undefined) {
    // Verificando se playlist é igual a true e video é igual a undefined

    res.send(`<h2>Você está na playlist de ${playlist}</h2>`);
    
  }
  if (playlist && video) {
    // Verificando se os dois parâmetros são verdadeiros

    res.send(
      `<h2>Você está na playlist de ${playlist}</h2><br>Reproduzindo o vídeo ${video}...`
    );
    
  } else {
    // Caso não for informado nenhum parâmetro

    res.send("<h1>Página de vídeos</h1>");
  }
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});
