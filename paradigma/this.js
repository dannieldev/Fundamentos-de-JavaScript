;
//Asignacion Implicita
((c)=>{
    //    THIS
    //Asignacion Implicita
    // Caso 1 
    //This esta siendo invocado drentro de un metodo
    //this hace referencia al objeto que contiene el metodo donde se invoca
    c('Asignacion de this implicita');
    let  yo ={
        nombre : 'Lucas',
        edad: 32,
        //Funcion anonima para no perder el this
        saludar: function(){
            c(`Hola mi nombre es ${this.nombre}`)
        }
    }
    yo.saludar()
    // Caso 2
    //Existe una funcion que recibe un objeto como parametro dentro de ella 
    // Se le asigna un metodo al objeto
    // This Es este caso hace referenci al objeto que se le añade el metodo

    let preparandoSaludo = function(obj){
        obj.saludar = function(){
            c(`Hola mi nombre es ${this.nombre}`)
        }
    }
    const kila ={
        nombre : 'Julio',
        edad: 33,
    },alvara={
        nombre:'felipoe',
        edad:34
    }
    preparandoSaludo(kila)
    preparandoSaludo(alvara)
    kila.saludar()
    alvara.saludar()
    //Caso 3
    //Una funcion qu retorne un objeto que contiene un metodo que invoca this
    let Humano = function(nombre,edad,perro){
        return {
            nombre: nombre,
            edad: edad,
            saludar: function(){
                c(`Hola mi nombre es ${this.nombre}`);
            },
            perro:{
                nombre: perro,
                saludar: function(){
                    c(`${this.nombre} gauuud guaaa`)
                }
            }
        }
    }
    const mircha = Humano ('Janatan',33,'Kenai')
    mircha.saludar()
    mircha.perro.saludar()
})(console.log);  

//Asignación Explicita 
((c)=>{
    // 2 Asignacion explicita: 
    //Desde ES5 cuando estamos explicando refenrencias 
    //this contamos con 3 metodos call, aplly y bind
    c('Asignación de this Explicita');
    
    const nombrar = function(f1,f2,f3){
        c(`${this.nombre} es el lenguaje Front end de la web y tiene librerias 
        y framework muy poderosos como : ${f1},${f2},${f3}`);
    }
    const lenguaje={
        nombre: 'JavaScript',
        version: 6
    } 
    let framework= ['Angular','React','Vue.js']

    //Call: opermite definir a que se va a hacer referencia this, en su primer
    //parametro, los parámetros siguientes son los que recibe la función
    nombrar.call(lenguaje,framework[0],framework[1],framework[2]);

    //Apply: permite referencia this en el primer parámetro, pero este no 
    //permite pasar una array, como parámetro de las funcion
    nombrar.apply(lenguaje,framework);
    //Bind: devuelve una función, en dónde this, hace referencia al objeto que
    //pasamos en su parametro
    let frameworksJS = nombrar.bind(lenguaje,framework[0],framework[1],framework[2])
    frameworksJS();
})(console.log);
// Asignacion con New
((c)=>{
//3. Asingnacion con New
//Cuando invocamos this en un contructor este hace referencia al objeto que 
//se ha istanciado
    c('Asignación con New')
    let Framework = function (nombre,url,lenguaje){
        this.nombrar = nombre
        this.url = url
        this.lenguaje = lenguaje
    }
    const react = new Framework('React' ,'http://facebook.github.io.react',
    'JavaScript'),
    vue = Object.create(Framework)
    vue.nombre = 'Vue.js'
    c(react,vue)
})(console.log);
((c)=>{
c('Asignacion Global')
//Asignacion Global 
//Unos de los errores con this es que  cuando nose tiene una 
// referncia al objeto, que representa this esta hace referencia al Objeto Global
//Golbal:
//window en los navegadores
//Global en Node.js
    const dimeUnFramework = function(){
        c(this.nombre)
    }
    dimeUnFramework()
    //Variable global
    //nombre = 'Angular'
    window.nombre = 'Angular'
    dimeUnFramework()
})(console.log);
((c)=>{
    //5. Arrow Funtions
    c("Arrow Function y el problema de this");

    const lenguaje = {
        name: 'JavaScript',
        version: 6,
        framework:[
            {name:'Angular',url:'https://angular.io/'},
            {name:'React',url:'https://react.react/'},
            {name:'Vue.js',url:'https://vues.org/'},
        ],
        nombrar: function (){
            //El problema de this en Javascript
            // this.framework.forEach(function(fw){
            //     c(`${fw.name} es un framework de ${this.name}`);
            //})
            //Solucion ES3
            //let that = this;
            //this.framework.forEach(function(fw){
            //    c(`${fw.name} es un framework de ${that.name}`);
            //})
            //Solucion ES5
            //this.framework.forEach(function(fw){
            //    c(`${fw.name} es un framework de ${this.name}`);
            //}.bind(this)) //enlasar bind en this
            //Solucion ES6
            this.framework.forEach(fw => c(`${fw.name} es un framework de ${this.name}`))

        }

    }
    lenguaje.nombrar()
})(console.log);
