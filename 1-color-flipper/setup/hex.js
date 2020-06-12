const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const textIndicator = document.getElementsByClassName('color')[0];
const backgroundElement = document.getElementsByTagName('main')[0];

var btn = document.getElementById('btn');
btn.addEventListener('click',changeColor);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeColor(event) {
	var color = '#';
	for (var i = 5; i >= 0; i--) {
		color += hex[getRandomInt(16)];
	}
	backgroundElement.setAttribute('style', "background-color:"+ color +";");

	textIndicator.textContent = color;
}