function Pessoa (nome, sobrenome) {
    let pessoa = {
        nome,
        sobrenome
    }
    pessoa.nomeCompleto = `${nome} ${sobrenome}`
    return pessoa 
}

const pessoaA = Pessoa ("Marcos", "Rosalino")
const pessoaB = Pessoa ("Valdeli", "Rosalino")
console.log(pessoaA, pessoaB) 
console.log(pessoaA.nomeCompleto)