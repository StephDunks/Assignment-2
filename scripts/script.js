
var toggleButton  = document.querySelector('#toggle-button');
var mobileMenu    = document.querySelector('#mobile-menu');
var menuIsOpen = true;

function toggleMenu() {
	menuIsOpen = !menuIsOpen

 if (menuIsOpen) {
	mobileMenu.className = 'mobile-menu';
   } else {
	mobile-menu.className = 'mobile-menu open';
 }

}




// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Wire everything up
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
toggleButton.addEventListener('click', toggleMenu);
