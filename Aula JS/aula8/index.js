const nome = 'Diego';
const sobrenome = 'Vespa';
const nomeCompleto = nome + ' ' + sobrenome
const idade = 32;
const peso = 88;
const alturaEmM = 1.83;
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()//pega o ano atual
let anoNascimento = anoAtual - idade;
// console.log(anoAtual)
// console.log(nomeCompleto)
let imc = peso / (alturaEmM ** 2)
// console.log(imc.toFixed(2))

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc}`)
console.log(`${nomeCompleto} nasceu em ${anoNascimento}`)

