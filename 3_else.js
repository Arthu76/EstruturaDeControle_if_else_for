const imprimirResultado = function(nota) {
  if(nota >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
}

imprimirResultado(4.9)
imprimirResultado(9.5)
// cuidado com linguagem fracamente tipada
imprimirResultado('Epa')