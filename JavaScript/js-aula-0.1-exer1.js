//Função Simples 
const nome = "Ana"
const idade = 17
const cidade = "Registro"
    
function Simples(nome, idade, cidade){
    console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e eu moro em ${cidade}.`)
}

Simples(nome, idade, cidade)


//Função com parâmetros 
function Divisao(n1, n2){
    resultado = n1/n2
    console.log(`A divisão dos dois números é ${resultado}`)
}

Divisao(40, 5)

//Função com retorno
function Multiplicacao(n1, n2, n3){
    return n1*n2*n3
}
console.log(`A multiplicação dos números inseridos é ${Multiplicacao(10,2,5)}`)

//Função com mais de um retorno

function maiorMenor(idade1){
    if(idade1 >= 18){
        return 'Maior de Idade'
    }else{
        return 'Menor de Idade'
    }
}
let idade1 = 19
console.log(`Você é ${maiorMenor(idade1)}`)