function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minuto}.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens_ex014/manha_circular250.png'
        document.body.style.background = '#ECD2C1'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens_ex014/tarde_circular250.png'
        document.body.style.background = '#FDE4A2'        
    } else {
        //BOA NOITE
        img.src = 'imagens_ex014/noite_circular250.png'
        document.body.style.background = '#2A4148'
    }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]: Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        //Criando através do javascript o img foto  
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        //Fim da criação.
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','imagens_ex015/bebe_masculino.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src','imagens_ex015/jovem_masculino.png')
            } else if (idade >= 21 && idade < 60){
                //Adulto
                img.setAttribute('src','imagens_ex015/adulto_masculino.png')
            } else if (idade >= 60) {
                //Idoso
                img.setAttribute('src','imagens_ex015/idoso_masculino.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens_ex015/bebe_feminino.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','imagens_ex015/jovem_feminino.png')
            } else if (idade >=21 && idade < 60) {
                //Adulto
                img.setAttribute('src','imagens_ex015/adulto_feminino.png')
            } else if (idade >= 60) {
                //Idoso
                img.setAttribute('src','imagens_ex015/idoso_feminino.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//Para fazer as fotos aparecer.
    }
}

