let contador = (()=>{
    //vARIBLES PRIVADAS CON GUION bAJO
    let _contador = 0;
    function incrementar(){
        return _contador++
    }
    function decrementar(){
        return _contador--
    }
    function valor (){
        return _contador
    }
    return{
        incrementar: incrementar,
        decrementar:decrementar,
        valor: valor
    }
})();

//closure da privacidad a los elementos
console.log(contador.valor());
contador.incrementar();
contador.incrementar();
console.log(contador.valor());