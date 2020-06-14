const button = document.getElementsByClassName('nav-toggle')[0];
const links = document.getElementsByClassName('links')[0];

button.addEventListener( 'click', toggleNavLinks );


function toggleNavLinks(event) {
	links.classList.toggle('collapsed');
}