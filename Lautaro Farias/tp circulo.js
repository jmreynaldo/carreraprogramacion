var xarea=document.querySelector(".button");
var xradio= document.querySelector(".radio");

    function calcularArea(xradio) {
        radio = parseIn(xradio.value);
        xarea = Math.PI * Math.pow(xradio, 2);
        console.log("El area del circulo es: "+ xarea.toFixed(2) );

    }
var radio = parseFloat(xradio);
var resultado = calcularArea(radio);

