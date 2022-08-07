const buttonBuger = document.querySelector(".button-menu");
const buttonMenuClose = document.querySelector(".button-close__header-page");
const burgerMenu = document.querySelector(".header-page__menu");

buttonBuger.addEventListener('click', function () {
	burgerMenu.classList.add('active');
})
buttonMenuClose.addEventListener('click', function () {
	burgerMenu.classList.remove('active');
})