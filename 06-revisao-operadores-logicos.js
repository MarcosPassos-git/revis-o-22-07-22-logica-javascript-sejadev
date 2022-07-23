/*
Elabore um algoritimo que dada a idade de um nadador
classifique-o em uma das seguintes categorias:

Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos =maiores de 18 anos

Operadores logicos:
ou = || - a condição é verdadeira se UM ou OUTRO for verdadeiro
E = && - a condição é verdadeira se todos forem verdadeiros.
*/

/* Código feio ou estranho
const idade = 10

if (idade >= 5) {
    if (idade <=7) {
        console.log("Infanti A")
    } else if (idade <=11) {
        console.log("Infantil B")
    }
}
*/


const idade = 6

if (idade >= 5 && idade <= 7) console.log("Infantil A")
else if (idade >= 8 && idade <= 11) console.log("infantil B")
else if (idade >= 12 && idade <= 13) console.log("Juvenil A")
else if (idade >= 14 && idade <= 17) console.log("Juvenil B")
else if (idade >= 18) console.log("Adultos")


if (idade === 5 || idade === 6 || idade === 9) {
    console.log("Infantil C")
}