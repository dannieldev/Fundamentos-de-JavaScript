
// ES Modules syntax
//import Unsplash from 'unsplash-js';
// require syntax
//const Unsplash = require('unsplash-js').default;
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //Parahacer petcion

const API = "https://api.unsplash.com/photos/?client_id=LrcZ0ii_fwQ4CEbQgSX-nqNLqEnrTaKP2QchK1LnH80"
function fetchData(url_api, callback){
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
            console.log(data1)
})
