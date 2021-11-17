let amigo = {
    nome: 'André',
    idade: 37,
    peso: 87.5,
    engordar(p=0) {
        console.log(`Engordou`)
        this.peso += p
    }
}
console.log(`${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}Kg.`)

amigo.engordar(4)

console.log(`${amigo.nome} de ${amigo.idade} anos, pesa ${amigo.peso} kg.`)
