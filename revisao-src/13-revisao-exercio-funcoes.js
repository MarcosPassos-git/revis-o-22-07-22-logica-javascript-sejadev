/*
Crie um algoritimo para calcular o fatorial de um numero n!
Ofatorial de um numero é calculado pela multiplicação desse número por todos os seus antecessores até chegar ao número 1.

Exemplos:
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1

exemplo:
n = 5:
resposta = 5 * 1
n = 4:
resposta = 5 * 4
n = 3:
resposta = 5 * 4 * 3 
n = 2:
resposta = 5 * 4 * 3 * 2 
n = 1
sai e retorna a resposta
*/

function fatorial (n) {
    //let i = n // i = ao número que for lançado em n
    let fatorial = 1
    //while (i >= 2) {
        //fatorial = fatorial * i
       // i--
       while (n >= 2) {
        fatorial = fatorial * n
        n--
       }
    //}
    return fatorial
}

const number =5
const resposta = fatorial(number)
console.log(resposta)