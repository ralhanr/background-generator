var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var button = document.querySelector("a");

console.log(body.style.background);

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value  
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function pickRandom () {
	var color1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var color2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	body.style.background = "linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2
	+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", pickRandom);




