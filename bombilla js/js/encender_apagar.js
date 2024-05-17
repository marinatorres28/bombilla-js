//cogemos el elemento del html
let bombilla=document.querySelector("#bombilla");
//declaramos un interruptor que en principio estará en false porque la bombilla esta
//apagada
interruptor=false;

bombilla.addEventListener("click",function(){
    if(interruptor==true){ //si el interruptor esta encendido
        bombilla.src="../img/bombilla-off.gif"; //la bombilla se apaga
        interruptor=false;
    }
    else{
        bombilla.src="../img/bombilla-on.gif"; 
        interruptor=true;
    }
})