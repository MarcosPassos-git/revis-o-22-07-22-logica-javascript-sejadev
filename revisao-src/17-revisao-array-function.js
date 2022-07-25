const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

// forEach: passa por todos os elementos do array
array.forEach((elemento, posicao) => {
    //console.log(`${elemento} - posicao ${posicao}`) 
})
/*
find: retorna o elemento

const valor = array.find((elemento) => {
    //return elemento === 10
    if (elemento === 10) return true
    return false
})

console.log(valor)
*/
// findIndex: retorna a posição do elemento
const index = array.findIndex(elemento => elemento === 10)
    //if (elemento === 12) return true    
    //return false
console.log(index)

// some: retorna true se pelo menos um número satisfazer a condição.
const some = array.some(elemento => elemento >= 10)
console.log(some)



// every: retorna true se todos os números respeitarem a condição.
const every = array.every(elemento => elemento >= 1) 
console.log(every)

const newArray = [1, 2, 3, 4, 5, 10, 24, 80]

// splice: corta o array. O primeiro parametro é o inicio e o segundo é a quantidade.
//console.log(newArray.splice(4, 1))
/*console.log(newArray.map((elemento) => {
    return elemento * 2
}))
*/

//filter: filtrar os elementos dentro do array.

console.log(newArray.filter((elemento) => {
    return elemento % 2 === 1
}))

// reduce: reduz o array para algum outro elemeto.

console.log(newArray.reduce((acumulado, elemento) => {
    return acumulado + elemento
}, 0))