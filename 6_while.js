//Lembrete
// Math.random() : aqui gera um valor entre 0 e 1...
// * (max - min) : multiplicando Math.random() pelo intervalo ele dará um range maior...
// + min : o intervalo + o valor mínimo vai definir se o numero vai ser max ou min 
//se for 0, vai dar mínimo, se for 1, vai dar maximo, e qualquer outro valor vai ficar entre eles


function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Pare')