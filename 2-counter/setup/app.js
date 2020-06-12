const value = document.getElementById('value');

const increase = document.getElementsByClassName('increase')[0];
increase.addEventListener('click', increaseNumber );

const decrease = document.getElementsByClassName('decrease')[0];
decrease.addEventListener('click', decreaseNumber );

const reset = document.getElementsByClassName('reset')[0];
reset.addEventListener('click', resetNumber );


function increaseNumber(event) {
	var number = parseInt(value.textContent);
	value.textContent = ++number;
	if( number == 1 ){
		value.setAttribute('style', 'color:green;')
	}
	else if( number == 0 ){
		value.setAttribute('style', 'color:black;')
	}

}

function decreaseNumber(event) {
	var number = parseInt(value.textContent);
	value.textContent = --number;
	if( number == -1 ){
		value.setAttribute('style', 'color:red;')
	}
	else if( number == 0 ){
		value.setAttribute('style', 'color:black;')
	}
}

function resetNumber( event ){
	value.textContent = 0;
	value.setAttribute('style', 'color:black;')
}