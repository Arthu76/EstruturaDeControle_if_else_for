function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(7.8)
soBoaNoticia(6.7)

//--------------------------------------------------------------------------------------------------------------------------------------

function seForVerdadeEuFalo(valor) {
  if(valor) { //apenas vai imprimir no console caso o valor pedido seja verdadeiro
    console.log('É verdade... ' + valor)
  }
}

seForVerdadeEuFalo()// false
seForVerdadeEuFalo(null)// false
seForVerdadeEuFalo(5)// true
seForVerdadeEuFalo('!')// true
