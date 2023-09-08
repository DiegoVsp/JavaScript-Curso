let numero = Number(prompt('Digite aqui um número'))
let numeroTitulo = document.querySelector('#numero-titulo')
let resultado = document.querySelector('.resultado')
let raizQuadrada = Math.sqrt(numero)
let eInteiro = Number.isInteger(numero)
let eNaN = Number.isNaN(numero)
let arredondaBaixo = Math.floor(numero)
let arredondaCima = Math.ceil(numero)
let duasCasas = numero.toFixed(2)

numeroTitulo.innerHTML = numero

resultado.innerHTML = `
<p>A raiz quadrada de ${numero} é igual a ${raizQuadrada}</p>
<p>${numero} é inteiro: ${eInteiro}</p>
<p>É NaN: ${eNaN}</p>
<p>Arredonda para baixo ${arredondaBaixo}</p>
<p>Arredonda para cima ${arredondaCima}</p>
<p>Com duas Casas decimais: ${duasCasas}</p>

`
