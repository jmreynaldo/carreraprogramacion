var tareas=[];
var xtext=document.querySelector(".texto");
var xboton=document.querySelector(".boton");
var c=1;
var xtabla=document.querySelector(".tabla");

xboton.addEventListener("click",function(){
    var textovalue=xtext.value;
    if (textovalue==""){
        alert("Ingrese el texto")
        return false
    } else {
        tareas[c]={
            "tarea":textovalue,
        }
        c=c+1;
    }
    xtabla.innerHTML="";
    for(textos in tareas){
        var valor= tareas[textos];
        xtabla.innerHTML+=`
        <tr>
            <th>${textos}</th>
            <th>${valor["tarea"]}</th>
            <th><button class="${textos}">Eliminar</button></th>
        </tr>
        `;
    }
})