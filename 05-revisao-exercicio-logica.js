const limite = 50 // limite em kg definido
const valorDaMulta = 4 // valor da multa em R$ definido
const pesoDosPeixes = 100 // peso de peixes do João

let excesso = pesoDosPeixes > limite ? pesoDosPeixes - limite : 0
let multa // valor da multa

/*
if (pesoDosPeixes > limite) {
    excesso = pesoDosPeixes - limite
} else {
    excesso = 0
}
*/
multa = excesso * valorDaMulta
console.log("Excesso: ", excesso)
console.log("Multa: R$", multa)