//Declaração de variáveis no JS
//Const X Let X Var

const nome = "Ana";
// nome = "Maria" - não executa pois não pode ser reatribuido e nem redeclarado.

var idade;
idade = 17;
// Var pode ser reatribuido e redeclarado.

let cidade;
cidade = "Registro";
// Let permite que o valor seja reatribuido, porém não pode redeclarar .

console.log(nome);
console.log(idade);
console.log(cidade);

////////////////////////////////////////////
//Typeof - indica o tipo de variável.

const sobrenome = "Vieira";
const salario = 1500;
let endereco;

console.log(typeof sobrenome);
console.log(typeof salario);
console.log(typeof endereco);

////////////////////////////////////////////
//Tipos de Funções

//Função simples
function minhaFuncao() {
  console.log("Olá, mundo!");
} //Definir funções

minhaFuncao(); //Executar funções

//Função com parâmetro/argumento
function saudacao(cidade, nome = "usuário") {
  // nome com valor pré definido e cidade não, ou seja, nome é um parâmetro opcional e cidade é um parâmetro obrigatório.
  console.log("Olá. Seja bem-vindo, " + nome + " de " + cidade);
}

saudacao("Registro"); //Executar função com o argumento

function soma(n1, n2) {
  let resultado = n1 + n2;
  //Concatenando com Literal/Template Strings
  //Placeholder = ${...}
  console.log(`A soma dos dois números é ${resultado}`);
}

soma(9, 5); //Executar função

////////////////////////////////////////////
//Função com retorno

function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois números é ${Soma(8, 4)}.`); //Executar função

////////////////////////////////////////////
//Função com mais de um retorno

function parImpar(numero) {
  if (numero % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
let numero = 4;
console.log(`O número enviado é ${parImpar(numero)}!`);

////////////////////////////////////////////
//Função anônima

const dobro = function (x) {
  return x * 2;
};
console.log(`O dobro do número é ${dobro(15)}.`);

////////////////////////////////////////////
//Arrow Function (tipo de função anônima) - Parâmetro único

const Dobro = (x) => {
  return x * 2;
};
console.log(`O dobro do número é ${Dobro(20)}.`);

////////////////////////////////////////////
//Arrow Function com mais de um parâmetro

const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
console.log(`O resultado é ${calculadora(2,'*',3)}.`);


////////////////////////////////////////////
//Função imediata - IIFE (Immediately Invoked Function Expression)
const iife = (function(){
    console.log("Executando imediatamente!")
})()// Parâmetros

//IIFE com parâmetro
const start = (function (app){
    console.log(`Executando imediatamente o app ${app}`);
})("Whatsapp");