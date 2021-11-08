function calc_tabuada() {
    //window.alert('testando')

    var boxtab = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (boxtab.value.length == 0) {
        window.alert('Insira um número!')        
    } else if (boxtab.value == 0) {
        window.alert('Insira um número MAIOR que 0 (zero)!')
    } else {
        num = Number(boxtab.value)
        window.alert(`Calculando a tabuada do ${num}.`)
    }
    var c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        var item = window.document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}. `
        tab.value = `tab${c}`
        tab.appendChild(item)
        c += 1                
    } 
}