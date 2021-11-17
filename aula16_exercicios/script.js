var num = 5
var vetor = [2,6,8,3]
console.log(`Nosso vetor vale ${vetor}`)
vetor[4] = 10
console.log(`Nosso vetor vale ${vetor[4]}`)
vetor.push(num)
console.log(`Nosso vetor agora vale ${vetor}`)
tam = vetor.length
console.log(`Tamanho do vetor: ${tam}`)
ordem = vetor.sort((a,b) => a - b);
console.log(`Ordenando o vetor do menor para o maior, fica: ${ordem}`)
console.log(`O tamanho do vetor é ${vetor.length}` )
for (var c = 0;c < vetor.length; c++) {
    console.log(`Posição ${c} do vetor: ${vetor[c]} `)
}
console.log(`Usando o "for in" abaixo:`)
for (var pos in vetor){
    console.log(`Valor da posição ${pos} do vetor: ${vetor[pos]}.`)
}
var posicao = vetor.indexOf(5)
console.log(`O valor 5 está na posição ${posicao}.`)
var soma = 0
for (c1 = 0;c1 < vetor.length;c1 += 1) {
    soma += Number(vetor[c1])
}
console.log(`A soma total é ${soma}`)
console.log(`O primeiro valor do vetor é ${vetor[0]}.`)
