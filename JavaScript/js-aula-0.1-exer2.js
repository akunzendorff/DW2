//Função anônima
const notas = function (n1, n2) {
  media = (n1 + n2) / 2;
  if (media <= 5) {
    return "reprovado!";
  } else {
    return "aprovado!";
  }
};
console.log(`O aluno foi ${notas(5, 5)}`);

//Arrow function com parâmetro único
const triplo = (x) => {
  return x * 3;
};
console.log(`O triplo do número é ${triplo(12)}.`);

//Arrow function com mais de um parâmetro
const soma = (n1, n2, n3, n4) => {
  return n1+n2+n3+n4;
};
console.log(`O resultado é ${soma(2, 5, 3, 6)}.`);

//IIFE
const saudacao = (function (nome) {
  console.log(`Seja bem vindo(a),  ${nome}!`);
})("Paola");
