const email = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const shoppingCart = document.querySelector(".navbar-shopping-cart");


var toggleMobileMenu = burgerMenu.addEventListener("click",() => {
   mobileMenu.classList.toggle("inactive");
   
   if(!productDetail.classList.contains("inactive")){
      productDetail.classList.add("inactive");
   }
});

var toggleEmailMenu = email.addEventListener("click", () => {
   desktopMenu.classList.toggle("inactive");

   if(!productDetail.classList.contains("inactive")){
      productDetail.classList.add("inactive");
   }
});

var toggleDetails = shoppingCart.addEventListener("click", () => {
   productDetail.classList.toggle("inactive");

   if(!email.classList.contains("inactive")){
      desktopMenu.classList.add("inactive");
   }

   if(!mobileMenu.classList.contains("inactive")){
      mobileMenu.classList.add("inactive");
   }

   
})