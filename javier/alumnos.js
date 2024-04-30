var alumnos=[];
var xdni= document.querySelector(".dni");
var xmateria= document.querySelector(".materia");
var xagregar= document.querySelector(".agregar");
var xnota= document.querySelector(".nota");
var xboton= document.querySelector(".notas");
var tbalumnos= document.querySelector(".tablaNotas");
xagregar.addEventListener("click", function(){
	if(alumnos[xdni.value]=== undefined){
		alert("El alumno no existe");
		alumnos[xdni.value]={
			"Matematica": [],
			"Programacion": [],
			"Sistemas": [],
			
		}
			alumnos[xdni.value][`${xmateria.value}`].push(parseInt(xnota.value));
		console.log(alumnos)
	}
	else{
			//el alumnos y la materia ya estan cargadas
				alumnos[xdni.value][`${xmateria.value}`].push(parseInt(xnota.value));	
		}
		

console.log(xdni.value);
console.log(xmateria.value);
})
xboton.addEventListener("click",function(){
	tbalumnos.innerHTML="";
		var mMateria1= alumnos[xdni.value]["Matematica"];
		var P1= Promedio(mMateria1);
		var mMateria2= alumnos[xdni.value]["Programacion"];
		var mMateria3= alumnos[xdni.value]["Sistemas"];
	tbalumnos.innerHTML+= `
			<tr>
				<td>Matematica</td>
				<td>${mMateria1}</td>
				<td>${P1}</td>
			</tr>
			<tr>
				<td>Programacion</td>
				<td>${mMateria2}</td>
			</tr>
			<tr>
				<td>Sistemas</td>
				<td>${mMateria3}</td>
			</tr>
		`;
})

function Promedio(xN){
	var Total= 0;
	var Pro= 0; 
	for (let i=0; xN.length-1; i++){
		Total=Total+xN[i];


	}
	Pro= Total/xN.length;
	return Pro
}
