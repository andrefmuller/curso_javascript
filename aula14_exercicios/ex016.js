function calcular() {
    window.alert('Testando o sistema!')
//
var boxini = window.document.getElementById('txtini')
var boxfim = window.document.getElementById('txtfim')
var boxpasso = window.document.getElementById('txtpasso')
var res = window.document.getElementById('resultado')

if (boxini.value.length == 0 || boxfim.value.length == 0 || boxpasso.value.length == 0) {
    window.alert('[ERRO] Preencha todos os campos.')
    res.innerHTML = 'Impossível contar.'
} else {
    window.alert('Tudo OK!')
    res.innerHTML = 'Contando...<br> '
    var ini = Number(boxini.value)
    var fim = Number(boxfim.value)
    var passo = Number(boxpasso.value)
    if (passo <= 0){
        window.alert('Passo inválido. Considerando PASSO 1')
        passo = 1
    }
    if (ini < fim) {
        // Contagem CRESCENTE
        for (let c = ini; c <= fim; c += passo) {
            res.innerHTML += `${c} \u{1f449} `
        }
    }
    else {
        // Contagem DECRESCENTE
        for (let c = ini; c >= fim; c -= passo) {
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
}


/*
var res = document.getElementById('result')
var ini = Number(boxini.value)
var fim = Number(boxfim.value)
var passo = Number(boxpasso.value)
var resultado = res

var ini = 4
var fim = 40
var passo = 4
var contagem = 0

window.alert(`foi informado ${ini} e ${fim} e passo ${passo}`)
window.alert('Vai começar...')
for (contagem = ini;contagem <= fim; contagem = contagem + passo) {
//  console.log(`${contagem}`)
    window.alert(`${contagem}`)
    resultado.innerHTML = ``
}

if(fim <= ini) {
    window.alert('Insira no campo FIM, valores maiores que no campo INÍCIO.')
} else if (passo == 0){
    window.alert('Insira no campo Passo, valores maiores que 0 (zero).')
} else {
    console.log(`Vai começar...`)
    for (contagem = ini;contagem <= fim;contagem = ini + passo) {
        console.log(`Contagem ${contagem}.`)
    }
        
     
}

*/
}   