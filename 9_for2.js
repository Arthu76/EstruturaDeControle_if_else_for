const notas = [4.3, 5.2, 8.8, 1.6, 3.7, 9.8]

for (i in notas) {
  console.log(i, notas[i])
}

//-----------------------------------------------------------------------------------------------------------------------------

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 26,
  peso:64
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
  //console.log(atributo, pessoa[atributo])
}