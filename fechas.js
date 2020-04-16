function diasEntreFechas(fecha1, fecha2){
    const unDias = 1000 * 60 * 60 * 24 
    const diferencia = Math.abs(fecha1 - fecha2) 

    return (diferencia / unDias) 
}
const hoy = new Date()
const nacimiento = new Date(1999,6,13)

let diafecha = diasEntreFechas(hoy,nacimiento)
console.log(diafecha)
console.log(diafecha/ 365)