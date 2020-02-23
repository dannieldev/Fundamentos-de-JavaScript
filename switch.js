var signo = prompt("Cual es tu color favorito")

switch(signo){
    case 'azul': 
        console.log("Tu color favorito es el azul");
        break
    case 'ROSADO':
    case 'rosado': 
        console.log("Tu color favorito es el rosado");
        break
    case 'verde': 
        console.log("Tu color favorito es el verde");
        break
    case 'rojo': 
        console.log("Tu color favorito es el rojo");
        break
    default:
        console.log("No es un color Valido")
        break
}