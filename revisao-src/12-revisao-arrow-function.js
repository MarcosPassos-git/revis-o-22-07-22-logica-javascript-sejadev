function ola () {
    console.log("OLA")
}

ola()

const arrowOla = () => {
    console.log("arrowOla")
}

arrowOla()

const soma = (A, B) => A + B
const epar = (num) => num % 2 === 0

console.log(soma(10, 20))
console.log(epar(2))
console.log(epar(3))