var boton = document.getElementById("boton");
var textarea = document.getElementById("listado");
var lista = document.getElementById("lista");
var salida = document.getElementById("salida");

//evento para agregar la lista de tarea
boton.addEventListener("click", mySecondFunction);

function mySecondFunction(evt){
	agregarListado();
}
function agregarListado(){
	
	// condicion mensaje de error si no se ingresa texto
	if(textarea.value == "" ||textarea.value == 0){
		alert("Tiene que ingresar texto.");
	}else{ 
	//creando elementos para agregar a la lista
	var elemento = document.createElement("li");
	var span = document.createElement("span");
	var input = document.createElement("input");
	var icon = document.createElement("i");
	
	//los elementos creados su posicion
	span.innerHTML = textarea.value;
	input.type = "checkbox";
	icon.className = "glyphicon glyphicon-trash";
	elemento.className = "li"
	elemento.appendChild(input);
	elemento.appendChild(icon);
	elemento.appendChild(span);
	lista.appendChild(elemento);
	
	textarea.focus();
	textarea.value = "";
	
	//creando eventos para el tachado y delete
	input.addEventListener("click", onCheckClick);
	icon.addEventListener("click", onTrashClick);
}

//funcion para tachar la lista con un check
function onCheckClick(evt){
	if(evt.target.checked){
		evt.target.parentNode.style.textDecoration = "line-through";
	}else{
		evt.target.parentNode.style.textDecoration = "none";
	}
}
//funcion eliminar al hacer click en el icono tacho
function onTrashClick(evt){
	lista.removeChild(evt.target.parentNode);
}

}

