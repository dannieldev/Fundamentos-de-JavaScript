const fetchData = require('../utils/fechData')  //Peticion
const API = 'https://rickandmortyapi.com/api/character/' //API

fetchData(API) 
    .then(data  =>{
        console.log(data.info.count)
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data =>{
        console.log(data.name)
        console.log(data.status)
        return fetchData(data.origin.url)
    })
    .then(data =>{
        console.log(data.dimension)
    })
    .catch(err => console.error(err)) // Mostrar error