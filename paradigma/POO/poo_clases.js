((c)=>{
//POO con Clases 
//Con la llegada ES6 la definición de una función contructora ha cambiado y nos ofrece la posiblidada
/*de crear clases

ES6 aporta un 'Azúcar sintáctico' para declarar una clase como en la mayoria de los lenguajes POO, pero por 
debajo sigue siendo una función prototipal

El método especial contructor recibe los parametros que anteriormente recibia la función conrtructora
Las clases ES6 sustituyen a las funciones prototipas de ES5

Las declaraciones de la clase no siguen las reglas de hoisting como si lo hacen las declaraciones de funciones,
esto quiere decir que solo existen tras ser declaradas

De forma  implicita una clase se comporta como una constante, no siendo posible redeclararlas más delante en un
mismo ámbito o scope

Los métodos no se declaran de forma explicita con var, let o const
Al tratarse de un construtor y no una función, no hay una salida de datos explicita con return
Al encotrarnos nuevas palabras reservadas: constructor, super, get, set y static*/
c('.......POO con  Clases'); 
    class Carrito{
        constructor (articulo){
            this._articulo = articulo
            this._carrito = {}
        }
        agregar (articulo, cantidad){
            this._carrito[articulo] = cantidad
        }
        quitar(articulo){
            delete this._carrito[articulo]
        }
        _iterable () {
            let message = 'Carrito\n';
            for(let key in this._carrito)
               message +=`\t${this._carrito[key]} ${key}\n`
            return message
        }
        ver(articulo = 'todos'){
            return (articulo == 'todos')
            //? this._carrito           //Operador Ternario
            ? this._iterable()
            : (this._carrito.hasOwnProperty(articulo)) //Si el carrito tiene la propiedad
                ? `${this._carrito[articulo]} ${articulo}`
                : `El articulo ${articulo} no existe en el Carrito`
        }
    }
    

  
    Carrito.prototype ={

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
})(console.log);

((c)=>{
    //Herencia Polimorfismo
    /* Metodo Constructor, Setters y Getters, Módificadores de Acceso (Publico, estatico, privado)
    Super Constructores, Super Llamadas y Muxins*/
    /* Privacidad en JavaScript*/
    // Es JS las Propiedades de los Objetos son publicas, en las clases es igual
    /*Para apilar ciertas propiedades y evitar que puedan ser modificadas de forma externa, tenemos que
    recurrir al uso de WeakMap
    Un WeakMap es un Map que solo acepta objetos como Claves, las referecias a las claves es débil, lo que 
    significa que si no hay otra referencia al objeto que actúa como clave, el recolector de basura podra
    liberarlo
    Investigar 
    Map------------
    WeakMap-----------*/
    let privado = new WeakMap() //Para tener variables Privadas

    c('Herencia Polimorfismo');
    class Telefono{
        constructor(marca, modelo,numero){
            this.puedoLlamar = true
            this.marca = marca
            //this._numero = numero
            privado.set(this,{_numero:numero}) //Istanciar Privacidad
            this.modelo = modelo
        }   
        // Un método estático se puede ejecutar sin necesidad de intaciar la clase
        /* por lo general este tipo de metodos se reservan a clases que collecionan utilidades 
        y que no se esperan que sean instanciadas 
        Estamos hablando de las tipicas 'Helpes' habituales en la mayoria de Frameworks y librerias */ 
        static queEs(){
            c('El telefono, este texto esta en un metodo estatico');
        }  
        //Los Settters y Getters son métodos especiales que nos permiten establecer
        /*y obtener los valores de atributos de nuestra clase, aunque son metodos se
        pueden acceder por ASIGNACION  y No por INVOCACIÖN, es decir como si fuera atributos*/

        set numero(numero){
            //this._numero = numero
            privado.get(this)._numero = numero
        }
        get numero(){
            //return c(this._numero)
            return c(privado.get(this)._numero)
        }

        llamar (){
            c('Riiing Rinng');
        }
        verInfo(){
            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`, 
            )
        }
    }
    Telefono.queEs()
    let tel = new Telefono('Panasinix','aadsad','543345')
    tel.llamar()
    tel.numero
    tel.numero = ('22999999')
    tel.numero
    tel.verInfo()
    //Mixins
    /*En los lenguajes de POO, un mixin es una clase que ofrece cierta
    funcionalidad para ser heredada por una subclase, pero que no está ideada
    para ser autónoma
    Es una especie de clases Abstracta
    Los conceptos de superclase y subclase no existen como tipos de objetos
    contretos
    Una subclase es la clase que hereda (extiende) de otra (clase hija)
    Una superclase es la clase a partir de la cual heredan (extienden)
    otra (clase madre)
    En JavaScript, la clases pueden ser utilizadas como expresiones 
    Gracias a esto, es posible crear una clase cada vez que dicha expresión es evaluada
    La cláusula extends permite actuar sobre expresiones, lo cual habilita que una clase
    extienda de otra creada en tiempo de ejecución*/
    const Operadora = Superclass => class extends Superclass { //Mixins
        asignarOperadora(operadora){
           return c(`La operadora asignada es ${operadora}`)
        }
    }
    const Red = Superclass => class extends Superclass{
        asignarRed(red){
            return c(`La red de datos asignada es ${red}`)
        }
    }

    class Celular extends Operadora( Red (Telefono)){
        constructor(marca,modelo,numero){
            //Como el metodo super () se manda a llamar el constructor de la clase padre
            //En el construntor de una clase, es obliglatorio llamar a super antes de utilizar this
            super(marca,modelo,numero)
            this.tengoCables = false
        }
        vibrar(){
            c('vbbbrrr vbbbrrr ');
        }
            //Polimorfismo: Diferentes Clases podrían definir el mismo método o propiedad
            verInfo(){
                 // return super.verInfo()
                return c(
                    `${this.constructor.name}\n`,
                    `\tModelo: ${this.modelo}\n`,
                    `\tMarca: ${this.marca}\n`,
                    `\tPuedo llamar: ${this.puedoLlamar}\n`,
                    `\tTengo cables: ${this.tengoCables}\n` 
            )
        }
    }
    
    class Smartphone extends Celular{
        constructor(marca, modelo, numero){
            // Con el metodo super() se manda a llamar el construtor de la clase padre
            // En el contructor de una clase hija, es obligatorio llamar a super() antes de utilizar this
            super(marca, modelo, numero)
            this.tengoInternet = true
            this.tengoCables = false
        }
        conectar(){
            c('Conectado a Internet ¡¡');
        }
        vibrar(){
            c('Vbbbbrrr Vbbrrr')
        }
        //Polimorfismo: Diferentes Clases podrían definir el mismo método o propiedad
        verInfo(){
           // return super.verInfo()
            return c(
                `${this.constructor.name}\n`,
                `\tModelo: ${this.modelo}\n`,
                `\tMarca: ${this.marca}\n`,
                `\tPuedo llamar: ${this.puedoLlamar}\n`,
                `\tTengo cables: ${this.tengoCables}\n` ,
                `\tTengo cables: ${this.tengoInternet}\n` 
            )
        }
    }
    let cel = new Celular('Nokia','5120','000432342325')
    cel.llamar()
    cel.vibrar()
    cel.numero
    cel.numero = '523434543'
    cel.numero
    cel.verInfo()
    cel.asignarRed('4G')
    cel.asignarOperadora('Movistar')

    let sm = new Smartphone('Motorola','G4','45343664545')
    sm.verInfo()
    sm.llamar()
    sm.vibrar()
    sm.conectar()
    sm.numero
    sm.numero = '3543435436'
    sm.numero
    cel.asignarRed('5G')
    cel.asignarOperadora('Tigo')

    let g4 = new Smartphone()
    c(g4)
    g4.llamar()
    c(g4.puedoLlamar)
    g4.vibrar()
    c(g4.tengoCables)
    g4.conectar()
    c(g4.tengoInternet)

})(console.log);