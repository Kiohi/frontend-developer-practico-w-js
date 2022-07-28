const email = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

email.addEventListener("click", () => {
   menu.classList.toggle("inactive");
});