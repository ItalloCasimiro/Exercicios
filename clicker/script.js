var num=document.getElementById('number')
var n = 0
var res=document.getElementById('res')
function adicionar(){
    num.innerHTML = `${n + 1}`
    n++
}
function resetar(){
    num.innerHTML = `0`
    n = 0
}
function retirar(){
    if(n > 0){
        num.innerHTML = n - 1
        n--
    }
}