const email = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");

var toggleMobileMenu = burgerMenu.addEventListener("click",() => {
   mobileMenu.classList.toggle("inactive");
});

var toggleDesktopMenu = email.addEventListener("click", () => {
   desktopMenu.classList.toggle("inactive");
});