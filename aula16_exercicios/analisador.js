var num = document.getElementById("campo_num")
var vetor = []
var c = 0
var box = document.getElementById("select_list")

function botao_adicionar(){
    //alert(`A variável num vale ${num}`)
    if (num.value.length == 0){
        alert("Coloque ao menos um número para adicionar.")
    } else if (num < 1 || num > 100) {
        alert(`Você informou ${num}. Informe um número entre 1 e 100.`)
    } else {
        vetor.push(num.value)
        //alert(`O vetor possui ${vetor.length} campos`)
        msg = document.createElement("option")
        msg.text = `Adicionado o número ${vetor[c]}`
        box.appendChild(msg)
        //alert(`Tamanho do vetor ${vetor.length}`)
        c++                    
    }
    num.value = ""
    num.focus()
}


function botao_finalizar() {
    c1 = Number(vetor.length - 1)
    var soma = 0
    ordenar = vetor.sort((a,b) => a - b)
    if (vetor.length == 0){
        alert(`Adicione valores para analisar.`)
    } else {
        var inf1 = document.getElementById("i1")
        inf1.innerHTML = `Quantidade de itens adicionados: ${vetor.length}.`
        var inf2 = document.getElementById("i2")
        inf2.innerHTML = `O maior valor informado é ${ordenar[c1]} `
        var inf3 = document.getElementById("i3")
        inf3.innerHTML = `O menor valor informado é ${ordenar[0]}. `
        var inf4 = document.getElementById("i4")
        for (var c2 = 0; c2 < vetor.length; c2++){
            soma += Number(vetor[c2])
        }    
        inf4.innerHTML = `Somando todos os valores, temos ${soma} `
        var inf5 = document.getElementById("i5")
        inf5.innerHTML = `A média de todos os valores somados é ${soma/vetor.length}`
    }
}