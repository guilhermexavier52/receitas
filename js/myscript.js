
function mostrar(id) {
	if (document.getElementById(id).style.display == "block" & document.getElementById(id).style.visibility == "visible") {
	document.getElementById(id).style.display = "none";
	document.getElementById(id).style.visibility = "hidden";
}else{
	document.getElementById(id).style.display = "block";
	document.getElementById(id).style.visibility = "visible";
}
}

function aumenta(id){
    id.height=id.height*1.05;
	id.width=id.width*1.05;
}
 
function diminui(id){
	id.height=id.height/1.05;
	id.width=id.width/1.05;
}

function mudarcor(id) {
  document.getElementById(id).style.background = "rgb(241, 148, 138)";
}

function alerta(event) {
  var aler = event.charCode || event.keyCode;
  if (aler == 111 || aler == 79) {  
    alert("Você pressionou a letra 'O' !");
  }
}
