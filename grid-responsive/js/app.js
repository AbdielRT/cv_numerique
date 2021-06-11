var navbar = document.querySelector('navbar');
//var shrink = navbar.offsetTop;

window.onscroll = function () {
	if (window.pageYOffset >= 10) {
		navbar.classList.add('shrink')
	}
}