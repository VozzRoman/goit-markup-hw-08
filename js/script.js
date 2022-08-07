const buttonBuger = document.querySelector(".button-menu");
const buttonMenuClose = document.querySelector(".header-page__menu");
const burgerMenu = document.querySelector(".header-page__menu");

buttonBuger.addEventListener('click', function () {
	const expanded = buttonBuger.getAttribute("aria-expanded") === "true" || false;
	burgerMenu.classList.add('active');
	buttonBuger.setAttribute("aria-expanded", !expanded);
})
buttonMenuClose.addEventListener('click', function (event) {
	event.stopPropagation();
	const expanded = buttonBuger.getAttribute("aria-expanded") === "false" || true;
	burgerMenu.classList.remove('active');
	
	buttonBuger.setAttribute("aria-expanded", !expanded);
	
})