// let nome = 'Diego'

// function saudacao(nome) {
//   console.log(`Olá ${nome},Bom dia!!`)
// }
// saudacao(nome)

// let saudacao2 = () => {
//   console.log('Olá,Boa tarde!')
// }
// saudacao2()

// function soma(x, y) {
//   const resultado = x + y
//   return resultado
// }
// let result = soma(1, 2)
// console.log(resultado)


console.log('------Função Anônima---------')
const raiz = function (n) {
  return n ** 0.5
};

console.log(raiz(25))

console.log('------Arrow Function---------')
let soma = (n1, n2) => {
  return n1 + n2 //primeira forma
}
console.log(soma(2, 5))
let multiplicacao = (n1, n2) => n1 * n2; // segunda forma
console.log(multiplicacao(2, 2))

let aoQuadrado = n => n ** 2
console.log(aoQuadrado(10))