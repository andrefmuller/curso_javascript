function parimp(n) {
    if (n%2 == 0){
        return `Par!`
    } else {
        return `Impar!`
    }
}
var result = parimp(4)
console.log(result)

//Também pode ser representado assim:
//Colocando a função e o parâmetro direto.
console.log(parimp(222))