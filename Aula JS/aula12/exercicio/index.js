//************AULA 13 EXERCÍCIO */
// //Diego
// alert(`Seu nome tem ${nome.length} letras`)
// alert(`A segunda letra do seu nome é ${nome.slice(1,2)}`)
// alert(`Qual o primeiro índice da letra LETRA no seu nome? `)
// alert(`Qual o último índice da letra LETRA no seu nome? `)
// alert(`As últimas 3 letras do seu nome são: ${nome.slice(-3)}`)
// alert(`Seu nome com letras maiúsculas: ${nome.toUpperCase()}`)
// alert(`Seu nome com letras minúsculas: ${nome.toLowerCase()}`)
let nome = prompt('Digite seu nome: ')

document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br/>`
document.body.innerHTML += `Seu nome tem: <strong>${nome.length}</strong> letras <br/>`
document.body.innerHTML += ` A segunda letra do seu nome é <strong>${nome.charAt(1)}</strong> <br/>`
document.body.innerHTML += `Qual o primeiro índice da letra D no seu nome? <strong>${nome.indexOf('D')}</strong> <br/>`
document.body.innerHTML += `Qual o último índice da letra A no seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br/>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br/>`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br/>`
// document.body.innerHTML += `${nome.replace(/ /g, ' + ')}<br/>`

document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br/>`




