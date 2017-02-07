
var listTarea =[];

function onClickButon(){
	var textarea = document.getElementById("listado");
	//Aumentar el objeto array
	if(textarea.value != ""){
		listTarea.push({nombre:textarea.value, isDone: false});
		drawTasksList();
	}else{
		alert("ingrese tarea.")
	}
	textarea.value = "";
	textarea.focus();
	
}

function drawTasksList(){		
	for(var i in listTarea){
			var html = "<li class='li'" + "><input type='checkbox' onclick='tacharInput("+i+")' onclick='lineThrough()' id='check'"+ (listTarea[i].isDone?"checked":"") + ">" + listTarea[i].nombre + "<i class='glyphicon glyphicon-trash' id='tacho' onclick='removeTrash()'>" + "</li>";
	}
	var lista = document.getElementById("lista");
	lista.innerHTML += html;	
}
function removeTrash(){
	var lista = document.getElementById("lista");
	var tacho = document.getElementById("tacho");
	lista.removeChild(tacho.parentNode);
}
function tacharInput(i){
	if(listTarea[i].isDone===false){
		listTarea[i].isDone = true;
		
	}else{
		listTarea[i].isDone = false;
	}
	lineThrough(i);
}
function lineThrough(i){
	if(listTarea[i].isDone == true){
		var lis = document.getElementsByTagName("li");
		lis[i].setAttribute("style", "text-decoration: line-through;");
	}else{
		var lis = document.getElementsByTagName("li");
		lis[i].setAttribute("style", "text-decoration: none;");
	}
}




