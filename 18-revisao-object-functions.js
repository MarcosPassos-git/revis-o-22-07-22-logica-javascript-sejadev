const person = {
    name: "Marcos",
    lastName: "Rosalino"
}

// Object.keys() - Cria um array com todas as chaves do objeto.
console.log(Object.keys(person))

// Object.values() - Cria um array com todas os valores do objeto.
console.log(Object.values(person))

// Object.entries() - Cria um array com um array de objetos e valores.
console.log(Object.entries(person))

const livros = {
    'Livro A': 19.90,
    'Livro B': 97.00,
    'Livro C': 20.00
}

const values = Object.values(livros)
//console.log(values)
const sum = values.reduce((val, acc) => val + acc, 0)

console.log(sum)