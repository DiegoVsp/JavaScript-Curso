//Diferença entre Var vs Let

// nome = 'Diego' // Não faça isso

//Tipos de dados primitivos
// String, number, undefined, null , boolean, symbol

const nome = 'Diego'
const sobrenome = "Vespa"
const nome2 = `Diego`
const num1 = 10 // number
const num2 = 10.52 // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null // Nulo -> não aponta pra local nenhuma na memória
const boolean = true // Boolean = true or false(lógico)

console.log(typeof nome, nome)

let a = 2
const b = a
console.log(a, b) // 2, 2

a = 5
console.log(a, b)// 5, 2



