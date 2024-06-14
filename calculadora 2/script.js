function somar(){
    var num1=document.getElementById('num1')
    var num2=document.getElementById('num2')
    var res=document.getElementById('res')
    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] digite os números')
        res.innerHTML=  "impossivel somar"
    } else{
        var n1=Number(num1.value)
        var n2=Number(num2.value)
        var s = (n1 + n2)
        res.innerHTML = `a soma dos valores ${n1} e ${n2} é igual a <strong>${s}</strong>`
    }
}