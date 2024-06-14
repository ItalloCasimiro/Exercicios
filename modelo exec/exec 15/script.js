function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique seus dados e tente novamente!')
    } else {
        var fsex=document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança homem.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem masculino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança mulher.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem mulher.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulher idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

    
