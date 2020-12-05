function calculate(){
	let radius= document.getElementById('radius').value;
	var circumference =calCircumference(radius);
	console.log(circumference);
	result.innerHTML= "The circumference is" + circumference;

function calCircumference(radius){
	return 2 * Math.PI * radius
}
	

	
}