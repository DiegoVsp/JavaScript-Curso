//Objeto Math

let num1 = 9.54578

// let num2 = Math.floor(num1) // arredonda para baixo
// let num3 = Math.ceil(num1) // arredonda para cima
// let num4 = Math.round(num1) // arredonda para o mais próximo
// console.log(num2)
// console.log(num3)
// console.log(num4)


console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500))// pega o maior número dessa sequencia
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500))//pega o menor número dessa sequencia

console.log(Math.pow(2, 3))//potencia
console.log(Math.sqrt(9))//raiz quadrada
console.log(Math.abs(-10))//retorna o valor absoluto
console.log(Math.random())//retorna um número aleatório entre 0 e 1
console.log(Math.round(Math.random() * (99 - 10) + 10))// retorna um número aleatório entre 5 e 10

console.log(100 / 0)