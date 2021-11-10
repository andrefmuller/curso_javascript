var valores = [7,8,3,40,8,9,3,2]
//console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])

for (var pos = 0;pos < valores.length;pos += 1) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

for (var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

var pos1 = valores.indexOf(7)
console.log(`O valor 7 está na posição ${pos1}`)
