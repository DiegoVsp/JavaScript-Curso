
// Strings são iteráveis
//               01234567
let umaString = 'Um texto';
let fraseRato = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.charAt(6));
// console.log(umaString.concat(` em um lindo dia.`));
// console.log(`${umaString} em um lindo dia.`);


// console.log(umaString.indexOf('texto')) // palavra texto começa no índice 3
// console.log(umaString.indexOf('o', 3))
// console.log(umaString.lastIndexOf('U', 2)) // do índice 2 pra trás
// console.log(umaString.match(/[a-z]/g))
// console.log(umaString.search(/[x]/g))
console.log(umaString.replace('Um', 'Outra'))
console.log(fraseRato.replace(/r/, 'b'))
// console.log(fraseRato.replace(/r/g, 'b'))
console.log(umaString.length) //verificar tamanho
console.log(fraseRato.slice(3, 7)) //índice 5 não será adicionado

console.log(fraseRato.length - 3)
console.log(fraseRato.slice(32))
console.log(fraseRato.slice(-5))

console.log(fraseRato.slice(-5, fraseRato.length - 1));
//OU
console.log(fraseRato.slice(-5, -1))

//Dividir uma String

console.log(fraseRato.split(' ')) //por espaço
console.log(fraseRato.split('r')) //o r não não se inclui
console.log(fraseRato.split(' ', 2))//colocando limite
