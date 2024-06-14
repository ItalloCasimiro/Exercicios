var agora= new Date()
var diasem= agora.getDay()

switch(diasem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    default:
        console.log('dia invalido')
        break
}