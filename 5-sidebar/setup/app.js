const sidebartoggle = document.getElementsByClassName('sidebar-toggle')[0];
const sidebar = document.getElementById('sidebar');
const closebutton = document.getElementsByClassName('close-btn')[0];
sidebartoggle.addEventListener('click', sidebarToggle );

closebutton.addEventListener('click', sidebarClose );

function sidebarToggle(event) {
	if( sidebar.classList.contains('show-sidebar') ){
		sidebar.classList.remove('show-sidebar');
	}else{
		sidebar.classList.add('show-sidebar');
	}
}

function sidebarClose(event) {
	sidebar.classList.remove('show-sidebar');
}