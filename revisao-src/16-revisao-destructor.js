/*
const pessoa = {
    nome: "Marcos",
    sobrenome: "Rosalino",
    idade:49
}

const {nome, sobrenome, idade} = pessoa

//const nome = pessoa.nome
//const sobrenome = pessoa.sobrenome
//const idade = pessoa.idade
console.log(nome)
console.log(sobrenome)
console.log(idade)

const array = [1, 2, 3, 4]
const [a, b] = array
console.log(a)
console.log(b)

const pessoaComMaisDados = {
    ...pessoa
}

console.log(pessoaComMaisDados)

const pessoaAtualizada = {
    ...pessoa,
    idade: 50,
    senha: "121212"
}

console.log(pessoaAtualizada)
*/
const array = [1, 2, 3, 4]
const [a, b] = array

const newArray = [0 ,...array, 100]
console.log(newArray)

