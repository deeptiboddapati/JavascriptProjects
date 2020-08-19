const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const textIndicator = document.getElementsByClassName('color')[0];
const backgroundElement = document.getElementsByTagName('main')[0];

var btn = document.getElementById('btn');
btn.addEventListener('click',changeColor);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeColor(event) {
	var color = colors[getRandomInt(4)];
	backgroundElement.setAttribute('style', "background-color:"+ color +";");

	textIndicator.textContent = color;
}