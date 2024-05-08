var xboton1= document.querySelector(".boton1");
var xboton2= document.querySelector(".boton2");
var c= 0;
var xtexto=document.querySelector(".texto");

xboton1.addEventListener("click", function(){
    c= c+1;
    xtexto.innerHTML= `<b class="texto">${c}</b>`
})

xboton2.addEventListener("click", function(){
    c= c-1;
    xtexto.innerHTML= `<b class="texto">${c}</b>`
})