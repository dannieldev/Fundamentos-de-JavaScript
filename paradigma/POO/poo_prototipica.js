;
((c)=>{
    //Anidación de Objetos 
    //Un objeto es una colección de varibles y funciones agrupadas de manera estructurada
    // A las variables definidas dentro de un objeto se les denomina atributos
    // A las funciones definidas dentro de un objeto se les denomina metodos 

    //Entonces un objeto puede tener propiedades y estas propiedades tener su interio mas
    //propiedades que incliso sean objetos

    //Estos se representan en forma de árbol y podemos acceder a sus propiedades con
        //1  Notación de Punto
        //2  Notación de Array
        //3  Notación  Mixta
 c('.......Anidacion de Objetos')
const curso={
    titulo: 'Cursos JS Avanzado: Paradigmas de Programación',
    docente:{
        nombre: 'Jonathan MirCha',
        edad: 33,
        nacionalidad: 'Mexicana',
        contacto:{
            telefon: '3232343232',
            email: '@hdsdad.com',
        }
    },
    costo :40,
    url:'http://edteam.com/curso/javascript',
    online: true,
    plataforma: {
        nombre: 'Edteam',
        url:'https://edteam.com',
        oficinas:['Lima','Bogotá']
    }
}
c(curso.docente.nombre);
c(curso['docente'].contacto['email']);
c(curso['plataforma'].oficinas[1]);
})(console.log);

((c)=>{
    //POO con Closures a la antigua
    c('.......POO con Closures');    
    function Carrito(articulo){
        let _articulo = articulo,
        _carrito = {}

        function agregar (articulo, cantidad){
            _carrito[articulo] = cantidad;
        }

        function quitar (articulo){
            delete _carrito[articulo];
        }
        function _iterable(){
            let message = 'Carrito\n';
            for(let key in _carrito)
               message +=`\t${_carrito[key]} ${key}\n`
            return message
        }
        function ver (articulo = 'todos'){
            return (articulo == 'todos')
            //? _carrito           //Operador Ternario
            ? _iterable()
            : (_carrito.hasOwnProperty(articulo)) //Si el carrito tiene la propiedad
                ? `${_carrito[articulo]} ${articulo}`
                : `El articulo ${articulo} no existe en el Carrito`
        }
        return{
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    const comics = Carrito('Comics')
    c(comics);
    comics.agregar('Flash Point Paradax',2);
    comics.agregar('The Return of the Dark Knight',3);
    comics.agregar('Civil War',3);
    comics.agregar('Final Crisis',1);
    c(comics.ver());
    c(comics.ver('Flash Point Paradax'));
    c(comics.ver('Civil War'))
    comics.quitar('Civil War')
    c(comics.ver('Civil War'))
    c(comics.ver());
})(console.log);

((c)=>{
    //POO con Funciones Constructoras 
    c('.......POO con  Funciones Constructoras');    
    function Carrito(articulo){
        this._articulo = articulo
        this._carrito = {}
        this.agregar= (articulo, cantidad)=>this._carrito[articulo] = cantidad;
        this.quitar= articulo=>delete this._carrito[articulo];
        this._iterable = () => {
            let message = 'Carrito\n';
            for(let key in this._carrito)
               message +=`\t${this._carrito[key]} ${key}\n`
            return message
        }
        this.ver =(articulo = 'todos')=>{
            return (articulo == 'todos')
            //? this._carrito           //Operador Ternario
            ? this._iterable()
            : (this._carrito.hasOwnProperty(articulo)) //Si el carrito tiene la propiedad
                ? `${this._carrito[articulo]} ${articulo}`
                : `El articulo ${articulo} no existe en el Carrito`
        }
        
    }

    const comics = new Carrito('Comics')
    c(comics);
    comics.agregar('Flash Point Paradax',2);
    comics.agregar('The Return of the Dark Knight',3);
    comics.agregar('Civil War',3);
    comics.agregar('Final Crisis',1);
    c(comics.ver());
    c(comics.ver('Flash Point Paradax'));
    c(comics.ver('Civil War'))
    comics.quitar('Civil War')
    c(comics.ver('Civil War'))
    c(comics.ver());
    c('....Patron de Diseño: Factori o Fabrica')
    /*
        Esta forma de codificar las funciones como clases se conoce como Factory
        Pattern o Template functions 

        Un Problema importante que tiene este tipo de estructuras, es que cuando creamos
        un nuveo objeto a partir de estas funciones se reservará espacio en memoria para 
        toda las funciones 
        Con un Objeto creado no supone mucha desventaja, pero con varios objetos sí
    
    */
   const libro = new Carrito('Libos'),
   musica = new Carrito('Musica'),
   juegos = new Carrito('Juegos'),
   peliculas = new Carrito('Peliculas'),
   series = new Carrito('Series')
   
   /*Esto supone que los métodos agregar, quitar ver, e _iterables estan siendo replicados
   en memoria, lo que es ineficiente*/

   c(
       libro,'\n',
       musica,'\n',
       juegos,'\n',
       peliculas,'\n',
       series,
   )
   /*Para solucionar esto podemos hacer uso del objeto Prototype que permite que objetos de 
   las misma clase comparta métodos y no sean replicados en memoria de manera ineficiente
   */
})(console.log);
((c)=>{
    //POO con Prototype 
    c('.......POO con  Prototype');    
    function Carrito(articulo){
        this._articulo = articulo
        this._carrito = {}
    }
    Carrito.prototype ={
        agregar: function (articulo, cantidad){
            this._carrito[articulo] = cantidad
        },
        quitar: function (articulo){
            delete this._carrito[articulo]
        },
        _iterable: function () {
            let message = 'Carrito\n';
            for(let key in this._carrito)
               message +=`\t${this._carrito[key]} ${key}\n`
            return message
        },
        ver: function(articulo = 'todos'){
            return (articulo == 'todos')
            //? this._carrito           //Operador Ternario
            ? this._iterable()
            : (this._carrito.hasOwnProperty(articulo)) //Si el carrito tiene la propiedad
                ? `${this._carrito[articulo]} ${articulo}`
                : `El articulo ${articulo} no existe en el Carrito`
        }
    }
    //Carrito.prototype.agregar = function(){} Se puede agregar uno por uno
    //Carrito.prototype.quitar = function(){}
    //Carrito.prototype.ver = function(){}

    const comics = new Carrito('Comics')
    c(comics);
    comics.agregar('Flash Point Paradax',2);
    comics.agregar('The Return of the Dark Knight',3);
    comics.agregar('Civil War',3);
    comics.agregar('Final Crisis',1);
    c(comics.ver());
    c(comics.ver('Flash Point Paradax'));
    c(comics.ver('Civil War'))
    comics.quitar('Civil War')
    c(comics.ver('Civil War'))
    c(comics.ver());
    
   const libro = new Carrito('Libos'),
   musica = new Carrito('Musica'),
   juegos = new Carrito('Juegos'),
   peliculas = new Carrito('Peliculas'),
   series = new Carrito('Series')

   c(
       libro,'\n',
       musica,'\n',
       juegos,'\n',
       peliculas,'\n',
       series,
   )
   /*De esta manera creanod nuevos objetos, su espacui en memoria es menor y ya
   no hay replicación de metodos , internamenete sera más eficiente el uso de las memoria
   por parte de JavaScript y obtenemos un mejor rendiminto en la apliccion */
})(console.log);
((c)=>{
    //Herencia Prototípica
    c('Herencia Prototípica');
    function  Telefono(){
        this.puedoLlamar = true
    }
    Telefono.prototype = {
        llamar: function(){
            c('Riiing Rinng');
        }
    }
    function Celular (){
        this.tengoCables = false
    }
    Celular.prototype = new Telefono()
    Celular.prototype.vibrar = function(){
        c('vbbbrrr vbbbrrr ');
    }
    function Smartphone(){
        this.tengoInternet = true
    }
    Smartphone.prototype = new Celular()
    Smartphone.prototype.conectar = function(){
        c('Conectado a Internet ¡¡');
    }
    let g4 = new Smartphone()
    c(g4)
    g4.llamar()
    c(g4.puedoLlamar)
    g4.vibrar()
    c(g4.tengoCables)
    g4.conectar()
    c(g4.tengoInternet)
    
    let nokia5120 = new Celular ()
    c(nokia5120)
    nokia5120l.llamar()
    c(nokia5120.puedoLlamar)
    nokia5120.vibrar()
    c(nokia5120.tengoCables)
    nokia5120.conectar()
    c(nokia5120.tengoInternet)
})(console.log);