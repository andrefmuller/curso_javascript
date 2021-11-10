//Declarando variáveis compostas: em ARRAYS. Ou em português, VETORES
let num = [4, 3, 17, 25]
console.log(`Nosso vetor é o ${num}`)
num[4] = 8
console.log(`Agora é ${num}`)
num.push(99)
console.log(`Agora é ${num}`)
console.log(`O vetor num tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor num é ${num[0]}.`)
console.log(`Ordenando em ordem crescente...`)
console.log(num.sort())