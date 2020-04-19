let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //Parahacer petcion

const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api,callback){
    let xhttp = new XMLHttpRequest() //Estandar de Microsoft
    xhttp.open('GET', url_api, true) //hacer un llamado a una url //asincronia activada
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){ //Validar los (5) estados 
            if(xhttp.status === 200){ //Validar estatus 
                callback(null, JSON.parse(xhttp.responseText))//Primer valor error segundo valor resultado
            }else{
                const error = new Error('Error' + url_api) //Forma correcta de formar un error
                return callback(error,null) // error, resultados no hay = null
            }
        } 
        
    }
    xhttp.send()
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1)
    fetchData(API+data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2)
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data1.info.pages)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
