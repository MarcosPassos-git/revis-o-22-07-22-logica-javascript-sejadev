const num = 10
const array = [10, 20]

const pessoa = {
    nome: "Marcos",
    idade: 49,
    casado: true,
    notas: [5, 8, 10],
    endereco: {
        rua: "Rua xyz",
        numero: 100,
        cidade: {
            nome: "Porto Alegre"
        }            
        
    }
}
console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa["casado"])
console.log(pessoa["notas"][2])
console.log(pessoa["endereco"]["rua"])
console.log(pessoa["endereco"]["cidade"]["nome"])
console.log(pessoa.endereco.cidade["nome"])