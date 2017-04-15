//document.body.style.zoom = 0.9;

var button = document.querySelector('button');
var menu = document.querySelector('header #main-menu #menu');
button.onclick = () => {
	var coords = button.getBoundingClientRect();
	
	if (menu.style.display == 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.left = coords.left - 80 + 'px';
		menu.style.top = coords.top + 'px';

		menu.style.display = 'block';
		menu.style.opacity = 0.5;	
	}
};

window.onresize = () => {
	menu.style = null;
};
