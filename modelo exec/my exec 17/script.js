function gerar(){
    var numero=document.getElementById('numero')
    var res=document.getElementById('res')
    if(numero.value.length == 0){
        window.alert ('[ERRO] Por favor digite um número')
        res.innerHTML=`impossível gerar tabuada`
    } else{
        var n=Number(numero.value)
        var rsm=1
        var ism=1
    }
    if(n < 0){
        window.alert('[ERRO] número inválido')
    }
    if(n == 0){
        var ism=0
        var rsm=0
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    }else if(n == 1){
            res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 2){
        (rsm++ && ism++)
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 3 ){
        var ism=3
        var rsm=3
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 4){
        var ism=4
        var rsm=4
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 5){
        var ism = 5
        var rsm=5
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 6){
        var ism=6
        var rsm=6
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 7){
        var ism=7
        var rsm=7
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 8){
        var ism=8
        var rsm=8
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 9){
        var ism=9
        var rsm=9
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } else if (n == 10){
        var ism=10
        var rsm=10
        res.innerHTML = `${ism} x 1 = ${rsm*1}`
            res.innerHTML += `<br> ${ism} x 2 = ${rsm*2}`
            res.innerHTML += `<br> ${ism} x 3 = ${rsm*3}`
            res.innerHTML += `<br> ${ism} x 4 = ${rsm*4}`
            res.innerHTML += `<br> ${ism} x 5 = ${rsm*5}`
            res.innerHTML += `<br> ${ism} x 6 = ${rsm*6}`
            res.innerHTML += `<br> ${ism} x 7 = ${rsm*7}`
            res.innerHTML += `<br> ${ism} x 8 = ${rsm*8}`
            res.innerHTML += `<br> ${ism} x 9 = ${rsm*9}`
            res.innerHTML += `<br> ${ism} x 10 = ${rsm*10}`
    } 
    if(n > 10){
        window.alert('[ERRO] tabuada indisponível, tente um número abaixo de 10')
    }       
}