//CALL
//ESTABLECER 'THIS' USADNDO 'CALL'
function saludar(){
    console.log(`Hola soy ${this.name} ${this.apellido}`)
}
const richard ={
    name: 'Richard',
    apellido:'Raufman Lopez'
}
saludar.call(richard) //Call existe en todas JS

//ESTABLECER 'THIS' USANDO 'CALL' Y PASAR ARGUMENTO A LA FUNCIÓN
function caminar(metros,direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`)
}
caminar.call(richard, 400,'norte') 

//APPLY
//ESTABLECER 'THIS' USANDO 'APPLY' Y PASAR ARGUMENTOS A LA FUNCIÓN
//1
caminar.apply(richard,[802,"norteste"])
//2
datos =[400, "Este"]
caminar.apply(richard, datos)

//como no confundirce de  call y apply
/**
 * 
 * Call - Comas (pasar agrumentos pasador por comas)
 * Apply - Arreglo (pasar agumentos por arreglos)
 */

//BIND
//ESTABLECER  'THIS' EN UNA NUEVA FUNCIÓN USANDO 'BIND'
const daniel = {
    name:"Daniel",
    apellido:"Crespin"
}
const danielSaludar = saludar.bind(daniel)
danielSaludar()
const danielCamina = caminar.bind(daniel)
danielCamina(1000,"Este")
//0 pasarlo directamente
const danielCaminar = caminar.bind(daniel,2000,"Este")
danielCaminar()
//O pasarlo separados 
//Guargar parcialmente establecidos los valores
const danielCaminara = caminar.bind(daniel,3000)
danielCaminara('Oeste')


//CUANDO ES ÚTIL USAR UNO DE ESTOS MÉTODOS

const buttons = document.getElementsByClassName("call-to-action")
//buttons.forEach(buttons =>{
//    buttons.onclick = () => alert('Nunca pares de aprender')
//})

Array.prototype.forEach.call(buttons, button =>{
    button.onclick = () => alert('Nunca pares de aprednder')
})
