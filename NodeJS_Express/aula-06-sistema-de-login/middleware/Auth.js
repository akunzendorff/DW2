function Auth(req, res, next) {
  if (req.session.user != undefined) {
    //verifica se a sessao nao esta vaiza, se o usuario esta logado
    next(); //libera a sessao para a proxima rota
  } else {
    res.render("login", {
      loggedOut: true,
    }); // se o usuario nao estiver definido, sera redirecionado pra fazer login
  }
}

export default Auth;
