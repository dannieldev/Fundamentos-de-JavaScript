let defa = "";

function num1(){
    iner(1);
}
function num2(){
    iner(2);
}
function num3(){
    iner(3);
}
function num4(){
    iner(4);
}
function num5(){
    iner(5);
}
function num6(){
    iner(6);
}
function num7(){
    iner(7);
}
function num8(){
    iner(8);
}
function num9(){
    iner(9);
}
function num0(){
    iner(0);
}
function sumar(x,a){
    res = x+a;
    return res;
}
function suma(){
    console.log("Sumar");
    x=document.getElementById('input-nu1').value;
    a=document.getElementById('input-nu2').value;
    console.log(sumar(x,a));
}
function restar(x,a){
    res = x-a;
    return res;
}
function resta(){
    console.log("Resta");
    x=document.getElementById('input-nu1').value;
    a=document.getElementById('input-nu2').value;
    console.log(restar(x,a));
}
function multiplicar(x,a){
    res = x*a;
    return res;
}
function multiplica(){
    console.log("Multiplicar");
    x=document.getElementById('input-nu1').value;
    a=document.getElementById('input-nu2').value;
    console.log(multiplicar(x,a));
}
function dividir(x,a){
    res = x/a;
    return res;
}
function divide(){
    console.log("Dividir");
    x=document.getElementById('input-nu1').value;
    a=document.getElementById('input-nu2').value;
    console.log(dividir(x,a));
}






if(document.getElementById('input-nu1').onfocus == true){
    console.log("seleccionado")
}
function iner(valor){
    var x = document.getElementById("input-nu1");
    x.addEventListener("focus", iner1, true);
    
    var x = document.getElementById("input-nu2");
    x.addEventListener("focus", iner2, true);
    
    function iner1(valor){
        console.log("seleccionado en input 1")
    }
    function iner2(valor){
        console.log("seleccionado en input 2")
    }

    if(document.getElementById('input-nu1').onfocus == true){
        console.log("seleccionado")
    }
    defa=document.getElementById('input-nu1').value=defa+""+valor;
    numes =defa;
}

((c,d)=>{
    //var porTagName=d.getElementsByTagName("input")[0].value;
    //Crear una calculadora
    c("Calculadora");

    rest = resta(7,4);
    function num(){
        alert("Me haz dado un click");
    }
    function num(){
        c("Boton de numero 1");
    }
    c(rest);
    function resta(x,a){
        res = x-a;
        return res;
    }
    
    function multiplicar(x,a){
        res = x*a;
        return res;
    }
    function dividir(x,a){
        res = x/a;
        return res;
    }
    function elevar(x,a){
        res = x^a;
        return res;
    }
})(console.log,document)