let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //Parahacer petcion

//EMS6
const fetchData = (url_api) => {
    return new Promise((resolve, reject) =>{
        const xhttp = new XMLHttpRequest() //Estandar de Microsoft
        xhttp.open('GET', url_api, true) //hacer un llamado a una url //asincronia activada
        xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4){ //Validar los (5) estados 
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api))            
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData
