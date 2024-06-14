var num =document.getElementById('txtn')
var tab =document.getElementById('selval')
var res=document.getElementById('res')
var nmrs = []
function adicionar(){
    if(num.value.length == 0){
        window.alert('[ERRO] adicione um número')
    }else{
        var n = Number(num.value)
        nmrs.push(n)
        var opt = document.createElement('option')
        opt.text=(`valor ${n} adicionado.`)
        tab.appendChild(opt)
        num.value=''
        num.focus()
        res.innerHTML= ''
    }
}
function finalizar(){
    if(nmrs.length == 0){
        window.alert('[ERRO] adicione valores')
    }else{
        let tot = nmrs.length 

        res.innerHTML = (`ao todo temos ${tot} números <br>`)
        res.innerHTML += (`o maior valor informado foi  <br>`)
        res.innerHTML += (`o menor número informado foi  <br>`)
        res.innerHTML += (`somando todos os valores temos  <br>`)
        res.innerHTML += (`a média dos valores digitados é `)
}
}