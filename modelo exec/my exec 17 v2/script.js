function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] por favor digite um número')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerText = ''
        while(c <= 10){
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(op)
            c++
        }
    }
}