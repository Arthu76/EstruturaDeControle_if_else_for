let contador = 1
while (contador <= 10) {
  console.log(`contador = ${contador}`)
  contador++
}

// a mesma função utilizando 'for'

for(let i = 1; i <= 10; i++) {
 console.log(`i = ${i}`)
}

// utilizando array

const notas = [6.7, 7.4, 9.8, 8.1, 7.1]
for(numero = 0; numero < notas.length; numero++) {
  console.log(`nota = ${notas[numero]}`)
}

// Lembrete
// para saber o tamanho de algo dentro de um array utilize o .length