const somethingsWillHappen = () =>{
    return new Promise((resolve,  reject)=>{
        if(true){
            resolve('Hey')
        }else{
            reject('Whooops')
        }
    })
}
somethingsWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err))

somethingsWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(()=>{
                resolve('True')
            },2000)
        } else {
            const error = new Error('Whoop!')//OSo correcto de error par debuger mejor
            reject(error)
        }
    })
}
somethingsWillHappen2()
    .then(response => console.log(response))
    //.then(() => console.log('hola')) //Encadenamiento de acciones
    .catch(err => console.error(err));

/*
Correr las dos promesas y regresa un arreglo con las 2 respuestas
*/
Promise.all([somethingsWillHappen(), somethingsWillHappen2()]) 
    .then(response =>{
        console.log('Array of results', response)
    })
    .catch(err =>{
        console.error(err)
    })