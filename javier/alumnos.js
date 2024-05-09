var alumnos = [];
var xdni = document.querySelector(".dni");
var xmateria = document.querySelector(".materia");
var xagregar = document.querySelector(".agregar");
var xnota = document.querySelector(".nota");
var verNotas = document.querySelector(".verNotas");
var tbNotas = document.querySelector(".tablaNotas");

xagregar.addEventListener("click", function(){
	
	var nuevoDniValor = parseInt(xdni.value);

	if (isNaN(nuevoDniValor) || xdni.value==0) {
		alert("Por favor ingrese un DNI");
		return false;

	}
	
	if (xnota.value == 0) {
		alert("Por favor ingrese la nota");
		return false;
	}

	if(alumnos[xdni.value] === undefined){
		//Agrego el alumno con datos en blanco
		alumnos[xdni.value] = {
			"Matematica": [],
			"Programacion": [],
			"Sistemas": []
		}
		
	}
	alumnos[xdni.value][xmateria.value].push(parseInt(xnota.value));

})


verNotas.addEventListener("click",function(){
	var nuevoDniValor = parseInt(xdni.value);

	if (isNaN(nuevoDniValor) || xdni.value==0) {
		alert("Por favor ingrese un DNI");
		return false;

	}
	if (alumnos[xdni.value] === undefined) {
		alert("No existen notas para este DNI");
		return false;

	}
	var mMateria1 = alumnos[xdni.value]["Matematica"];
	var mMateria2 = alumnos[xdni.value]["Programacion"];
	var mMateria3 = alumnos[xdni.value]["Sistemas"];
	let p1 = xPromedio(mMateria1);
	let p2 = xPromedio(mMateria2);
	let p3 = xPromedio(mMateria3);

	tbNotas.innerHTML = "";
	tbNotas.innerHTML += `
			<tr>
				<td>Matematica</td>
				<td>${mMateria1}</td>
				<td>${p1}</td>
				<td>${siAprobo(p1)}</td>
			</tr>
			<tr>
				<td>Programacion</td>
				<td>${mMateria2}</td>
				<td>${p2}</td>
				<td>${siAprobo(p2)}</td>
			</tr>
			<tr>
				<td>Sistemas</td>
				<td>${mMateria3}</td>
				<td>${p3}</td>
				<td>${siAprobo(p3)}</td>
			</tr>
		`;
})

function xPromedio(xN) {
	var Total = 0;
	
	if (xN.length <= 0) { 
		return 0
	}
	
	for (let i=0; i < xN.length; i++) {
		Total = Total + xN[i];

	}
	//calculo el promedio
	var Prom = (Total/xN.length).toFixed(2);
	return Prom
}
function siAprobo(xp) {
	if (xp >= 6) {
		return "Aprobado   "
	} else if (xp>0 && xp<6) {
		return "Desaprobado"
	} else {
		return "sin Calif."
	}
}
