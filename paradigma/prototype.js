//UN OBJETO COMÚN Y CORRIENTE
//OTRO OBJETO MÁS
    //Ineficientes
        // const zelda ={
        //     name:"zelda"
        // }
        // zelda.saludar = function(){
        //     console.log(`Hola soy ${this.name}`)
        // }
        // zelda.saludar()

        // const link ={
        //     name:"Link"
        // }
        // link.saludar = function(){
        //     console.log(`Hola soy ${this.name}`)
        // }
        // link.saludar()


//SEAMOS UN POCO MÁS EFICIENTES
        // function Hero(name){
        //     const hero ={
        //         name: name
        //     }
        //     hero.saludar = function(){
        //         console.log(`Hola soy ${this.name}`)
        //     }
        //     return hero
        // }
        // const zelda = Hero("Zelda")
        // zelda.saludar()

        // const link = Hero("Link")
        // link.saludar()
//AUN PODEMOS MEJORAR MÁS Y EVITAR TENER QUE CREAR LA MISMA FUNCIÓN CADA VEZ
    // const HeroMethods = {
        //     saludar: function(){
        //         console.log(`Me llamo ${this.name}`)
        //     }
        // }
        //     function Hero(name){
        //         const hero ={
        //             name: name
        //         }
        //         hero.saludar = HeroMethods.saludar
        //         return hero
        //     }
        //     const zelda = Hero("Zelda")
        //     zelda.saludar()

        //     const link = Hero("Link")
        //     link.saludar()

//OBJERCT.CREATE
    //const nuevoObjeto = Object.create(objeto)
        // const HeroMethods = {
        //     saludar: function(){
        //         console.log(`Soy superheroe ${this.name}`)
        //     }
        // }
        //     function Hero(name){
        //     const hero = Object.create(HeroMethods)
        //     hero.name = name
            
        //     return hero
        // }
        // const zelda = Hero("Zelda")
        // zelda.saludar()
    
        // const link = Hero("Link")
        // link.saludar()

//LOS MÉTODOS DE HERO DENTRO DE HERO
        // function Hero(name){
        //     const hero = Object.create(Hero.prototype)
        //     hero.name = name
            
        //     return hero
        // }

        // Hero.prototype.saludar = function(){
        //     console.log(`Soy el gran heroe ${this.name}`)
        // }

        // const zelda = Hero("Zelda")
        // zelda.saludar()

        // const link = Hero("Link")
        // link.saludar()

//NEW ES UN ATAJO (AZUCAR SINTACTICO) PARA LLEVAR  HERO.PROTOTYPE AL OBJETO

    function Hero(name){
        // this = Object.create(Hero.prototype)
        this.name = name
        
        //return this
    }

    Hero.prototype.saludar = function(){
        console.log(`New: ${this.name}`)
    }

    const zelda = new Hero("Zelda")
    zelda.saludar()

    const link = new Hero("Link")
    link.saludar()