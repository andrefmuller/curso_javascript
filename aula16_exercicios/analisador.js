qtd_adicionado = 0
function botao_adicionar(){
    box = document.getElementById("select_list")
    var num = document.getElementById("campo_num").value
    if (num.length == 0){
        alert("Coloque ao menos um número para adicionar.")
        box.remove(0)
        document.getElementById("select_list")
        msg = document.createElement("option")
        msg.text = `Adicione um número.`
        box.appendChild(msg)
    } else if (num < 1 || num > 100) {
        window.alert(`Você informou ${num}. Informe um número entre 1 e 100.`)
        box.remove(0)
        document.getElementById("select_list")
        msg = document.createElement("option")
        msg.text = "Adicione um número."
        box.appendChild(msg)
        //lista.innerHTML = "Adicione um número"
      } else {
            
        }

        
    /*{
        var num_adicionado = window.document.createElement("option")
        num_adicionado.text = `Adicionado o número ${num}.` 
        qtd_adicionado += 1
        window.alert(`Total de itens adicionados: ${qtd_adicionado}`)
        lista.appendChild(num_adicionado)
    }
    */
    
}