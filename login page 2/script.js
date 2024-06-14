function logar(){
    var email=document.getElementById('email')
    var pass=document.getElementById('pass')
    if(email.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] por favor digite seus dados')
    } else{
        if(email.value == 'admin' && pass.value == 'admin'){
            window.alert('Bem vindo!')
        }else{
            window.alert('[ERRO] dados incorretos')
        }
    }
}