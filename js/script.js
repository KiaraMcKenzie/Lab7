function init(){
	var button = document.getElementById("entrybutton").addEventListener('click', init);
	var input = document.getElementById("entryinput");
	var output = document.getElementById("textoutput");
	
	output.innerHTML = input.value;
	alert("Kiara McKenzie:" + input.value);
}







window.addEventListener('load', init);