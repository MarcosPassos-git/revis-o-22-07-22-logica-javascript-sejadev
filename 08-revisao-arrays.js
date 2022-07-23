//const variavel = 10
//let array = [true, false, 0, 1, 2, "string aqui", "seja dev", variavel, null]

//console.log(array)

//array.pop() // remove o ultimo elemento do array

//console.log(array) // adiciona elementos no array

let newArray = [10, 20, 30]
let i = 0
while (i < newArray.length) {
    //console.log(i)
    //console.log(newArray[i])
    i++

}

for (let pos = 0; pos < newArray.length; pos++) {
    //console.log(newArray[pos])
}

// for..in
for (let pos in newArray) {
    //console.log(pos)
    //console.log(newArray[pos])
}

// for..of
for (let arr of newArray) {
    //console.log(arr)
}

/*
Dado um array com x numeros, encontrar a média desses numeros.
Média = soma dos elementos / tamanho
*/

let numbers = [10, 20, 30, 40, 50]
let sum = 0
for (let num of numbers) {
    sum = sum + num
}
const media = sum / numbers.length
//console.log(sum)
console.log(media)

