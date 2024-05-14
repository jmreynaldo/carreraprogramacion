var alumnos = [];
var xdni = document.querySelector(".dni");
var xNombre = document.querySelector(".nombre");
var xEmail = document.querySelector(".email");
var xDatosP = document.querySelector(".datosP");
var xAlumnoos = document.querySelector(".Alumnoos")

var xmateria = document.querySelector(".materia");
var xagregar = document.querySelector(".agregar");
var xnota = document.querySelector(".nota");
var btnverInfo = document.querySelector(".verInfo");
var tbInfo = document.querySelector(".tablaInfo");

xagregar.addEventListener("click",function(){

	if (alumnos[xdni.value] === undefined){

		alert("el alumno no existe...!!!")
		alumnos[xdni.value] = {
			"info": {
						"nombre": xNombre.value,
						"email": xEmail.value,
					} ,
			"materias": {
						"Matematica": [],
						"Programacion": [],
						"Sistemas": []			
						}
		}

	} else {
		alert("el alumno ya esta cargado...!!!")
	}
	
	alumnos[xdni.value]["materias"][xmateria.value].push(parseInt(xnota.value));
	console.log(alumnos)
	selecAlumno()

})

btnverInfo.addEventListener("click",function() {
	//ver infor del alumno
	MostrarTabla();

})

xdni.addEventListener("focusout", function(){
	xNombre.value = "";
});

xAlumnoos.addEventListener("change", function(){

	xdni.value = parseInt(xAlumnoos.value);
	console.log(xdni.value);
	MostrarTabla();
});


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
function selecAlumno(xA) {
	xAlumnoos.innerHTML= "";
	for (alu in alumnos){
	var valAlumno = alumnos[alu]["info"]["nombre"];
		xAlumnoos.innerHTML+= ` 

				<option value="${alu}">${valAlumno}</option>

			`	
	}

}

function MostrarTabla() {
var nuevoDniValor = parseInt(xdni.value);

	if (isNaN(nuevoDniValor) || xdni.value==0) {
		alert("Por favor ingrese un DNI");
		return false;

	}
	if (alumnos[xdni.value] === undefined) {
		alert("No existen notas para este DNI");
		return false;

	}

	var mMateria1 = alumnos[xdni.value]["materias"]["Matematica"];
	var mMateria2 = alumnos[xdni.value]["materias"]["Programacion"];
	var mMateria3 = alumnos[xdni.value]["materias"]["Sistemas"];
	let p1 = xPromedio(mMateria1);
	let p2 = xPromedio(mMateria2);
	let p3 = xPromedio(mMateria3);

	xDatosP.innerHTML= "";
	xDatosP.innerHTML= `
						"Alumno: " ${xNombre.value} " e-mail: " ${xEmail.value}

						`
	tbInfo.innerHTML = "";
	tbInfo.innerHTML += `
			
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
}

