const nome = 'Diego Vespa'
console.log(nome[4])

const alunos = ['Diego', 'Mauricio', 'Rodrigo']

console.log(alunos)//array completo
console.log(alunos[2])//acessando o indice

//editando um valor da lista
console.log(`______Editando um valor da lista_________`)
alunos[0] = 'Eduardo'
console.log(alunos)
console.log()
//adicionando elemento em um array
console.log(`_____Adicionando elemento em um array__________`)
alunos[3] = 'Bárbara'
console.log(alunos)
console.log()
//saber o tamanho do array
console.log(`____Saber o tamanho do array___________`)
console.log(alunos.length)
console.log()
//adicionando no final do meu array
console.log(`____Adicionando no final do meu array___________`)
alunos.push('Renan')
console.log(alunos)
console.log()
//adicionando no inicio do meu array
console.log(`_____Adicionando no inicio do meu array__________`)
alunos.unshift('Renato')
console.log(alunos)
console.log()
//removendo do final do array
console.log(`_______________`)
const removido = alunos.pop() // posso salvar o elemento removido em uma variável

console.log(`"${removido}" foi removido do array`)
console.log(alunos)
console.log()
// removendo do inicio do array
console.log(`_____ removendo do inicio do array__________`)
const removeDoInicio = alunos.shift()
console.log(alunos)
console.log(removeDoInicio)

// apagando índice
// delete alunos[1]
// console.log(alunos)

//acessando índice que não existe
console.log(alunos[50])

console.log(`____Fatiando Array___________`)
//Fatiando array
console.log(alunos.slice(0,3))
console.log(alunos.slice(0,-2))

console.log(typeof alunos) // retorna como objeto

console.log(alunos instanceof Array)