//function que me permite tener el elemento a partir del identificador
var productos=[];
var agregar = document.querySelector(".agregarProducto");
var eliminar = document.querySelector(".eliminarProducto")
var xProducto = document.querySelector(".producto");
var xStock = document.querySelector(".stock");
var xPrecio = document.querySelector(".precio");
var tbProductos = document.querySelector(".tablaProductos");
var comprar = document.querySelector(".comprarProducto");

//agrego un evento 
agregar.addEventListener("click",function() {
	var vProducto = xProducto.value;
	var vStock = parseInt(xStock.value);
	var vPrecio = parseInt(xPrecio.value);
	//valido los datos ingresados
	if (vProducto=="") {
		alert("Ingrese el nombre del producto") ;
		return false;
	}
	if (vStock==0 || vStock=="") {
		alert("Ingrese la cantidad") ;
		return false;
	}
	if (vPrecio==0 || vPrecio=="") {
		alert("Ingrese el precio del producto") ;
		return false;
	}

	if (productos[vProducto] === undefined) {
		//el producto no existe, entonces creo un array de clave valor
		productos[vProducto] = {
			"stock": vStock,
			"precio": vPrecio,
		} 
	} else {
		//el producto ya existe y modifico el stock
		var stockAnterior = productos[vProducto]["stock"];
		var stockTotal = stockAnterior + vStock;
		productos[vProducto] = {
			"stock": stockTotal,
			"precio": vPrecio,
		} 
	}

	tbProductos.innerHTML+= `
	<tr>
		<td>${vProducto}</td>
		<td>${vStock}</td>
		<td>${vPrecio}</td>
	</tr>
`;

listarProductos();
console.log(productos);
})

eliminar.addEventListener("click",function() {
	var vProducto = xProducto.value;
	delete(productos[vProducto]);
	alert(`el producto: ${vProducto} se ha eliminado`)

listarProductos();
console.log(productos);
})

function listarProductos() {
	//antes de recorrer la tabla la vacio
	tbProductos.innerHTML = "";
	var i=0
	for (cProducto in productos) {
		var datos = productos[cProducto];
		i++;
		tbProductos.innerHTML+= `
			<tr>
				<td>${cProducto}</td>
				<td>${datos["stock"]}</td>
				<td>${datos["precio"]}</td>
				<td><button onclick="comprarProducto('${cProducto}','cant${i}')" class="comprar">Comprar</button>
					<input type="number" class="cant${i}" name="cant${i}" placeholder="cantidad">
				</td>
			</tr>
		`;


	}


}

comprar.addEventListener("click", function() {
	var vProducto = xProducto.value;
	
	if (productos[vProducto] != undefined) {
		alert(`Compro ${xStock.value} un. del producto ${vProducto}` );
		productos[vProducto]["stock"] -= parseInt(xStock.value); 
		listarProductos();


	} else {
		alert(`El producto ${vProducto} no existe`);
	}

})
function comprarProducto(nombre,indice) {
		
		let nCant = parseInt(document.querySelector(`.${indice}`).value);
		
		if (nCant > 0) {

			productos[nombre]["stock"] -= nCant; 
			listarProductos();
			alert(`Compro ${nCant} un. del producto ${nombre}` );
			
		} else {
			alert("Ingrese la cantidad a comprar...!!!")
		}
		
		}