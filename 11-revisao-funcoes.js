/*
Faça uma função que verifica se o numero é par ou não
Depois mostrar os numeros pares de 0 a 100
*/

function par (num) {
    //const condicao = num % 2 === 0
    //return condicao
    return num % 2 === 0
}

const epar = par(3)
console.log(epar)

for (let i = 0; i <= 100; i++) {
    if (par(i)) console.log(i)
    }







/*
function soma (A, B) {
    return A + B 
}

function subtracao (A, B) {
    return A - B
}

function calculadora (tipo) {
    const A = 1500
    const B = 2500
    if (tipo === "soma") return soma(A, B)
    else if (tipo === "subtracao") return subtracao(A, B)
    
}

const resultado = calculadora("subtracao")
console.log(resultado)


function ola () {
    return "ola"
    console.log("Não chega aqui")
}

const variavel = ola
const outraVariavel = variavel()
console.log(outraVariavel)




const A = 1
const B = 2
const tipo = "soma"
let R = 0

esse jeito é muito trabalhoso
if (tipo === "soma") {
    R = A + B
} else if (tipo === "subtracao") {
    R = A - B
}
*/