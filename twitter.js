var textarea = document.getElementById("listado");
var listTarea =[];
listTarea = [
	{nombre:textarea, isDone: false}
];
function onClickButon(){
	drawTasksList();
}

function drawTasksList(){
	if(textarea.value == ""){
		alert("ingrese texto");
	}else{ 
		var lista = document.getElementById("lista");
		for(var i in listTarea){
			var html = "<li class='li'" + "><input type='checkbox' onclick='tacharInput("+i+")' id='check'"+ (listTarea[i].isDone?"checked":"") + ">" + listTarea[i].nombre.value + "<i class='glyphicon glyphicon-trash' id='tacho' onclick='removeTrash()'>" + "</li>";
			lista.innerHTML += html;
		}
	}
	textarea.value = "";
	textarea.focus();
}
function removeTrash(){
	var lista = document.getElementById("lista");
	var tacho = document.getElementById("tacho");
	lista.removeChild(tacho.parentNode);
}
function tacharInput(i){
	if(listTarea[i].isDone==false){
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

/*
function tacharCheck(_mark){
	if(listTarea[_mark].isDone == false){
		listTarea[_mark].isDone = true;
		lista.childNodes[_mark].style.textDecoration = "line-through";
	}else{
		listTarea[_mark].isDone = false;
		lista.childNodes[_mark].style.textDecoration = "none";
	}
}
*/



