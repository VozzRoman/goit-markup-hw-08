const buttonBuger = document.querySelector(".button-menu");
const buttonMenuClose = document.querySelector(".button-close-menu");
const burgerMenu = document.querySelector(".header-page__menu");
const bodyLock = document.body;

buttonBuger.addEventListener('click', function () {
	const expanded = buttonBuger.getAttribute("aria-expanded") === "true" || false;
	burgerMenu.classList.add('active');
	bodyLock.classList.add('lock');
	buttonBuger.setAttribute("aria-expanded", !expanded);
})
buttonMenuClose.addEventListener('click', function (event) {
	event.stopPropagation();
	const expanded = buttonBuger.getAttribute("aria-expanded") === "false" || true;
	burgerMenu.classList.remove('active');
	bodyLock.classList.remove('lock');
	buttonBuger.setAttribute("aria-expanded", !expanded);
	
})