const email = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const shoppingCart = document.querySelector(".navbar-shopping-cart");


var toggleMobileMenu = burgerMenu.addEventListener("click", () => {
   mobileMenu.classList.toggle("inactive");

   if (!productDetail.classList.contains("inactive")) {
      productDetail.classList.add("inactive");
   }
});

var toggleEmailMenu = email.addEventListener("click", () => {
   desktopMenu.classList.toggle("inactive");

   if (!productDetail.classList.contains("inactive")) {
      productDetail.classList.add("inactive");
   }
});

var toggleDetails = shoppingCart.addEventListener("click", () => {
   productDetail.classList.toggle("inactive");

   if (!email.classList.contains("inactive")) {
      desktopMenu.classList.add("inactive");
   }

   if (!mobileMenu.classList.contains("inactive")) {
      mobileMenu.classList.add("inactive");
   }
})


const cards_container = document.querySelector('.cards-container');

const productList = [];
productList.push({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "Bike",
   price: 120,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "HP Pavillion X360",
   price: 250,
   image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07008767.png",
});

function renderProducts(products) {
   productList.forEach(item => {
      const product_card = document.createElement('div');
      product_card.classList.add('product-card');

      const product_img = document.createElement('img');
      product_img.setAttribute('src', item.image);
      product_img.setAttribute('alt', 'Product img');

      const product_info = document.createElement('div');
      product_info.classList.add('product-info');

      const div = document.createElement('div');

      const p_price = document.createElement('p');
      p_price.innerHTML = `\$${item.price}`;

      const p_name = document.createElement('p');
      p_name.innerHTML = item.name;

      const figure = document.createElement('figure');
      const add_img = document.createElement('img');
      add_img.src = './icons/bt_add_to_cart.svg';
      add_img.alt = 'Add to cart';


      cards_container.appendChild(product_card);
      product_card.append(product_img, product_info);
      product_info.append(div);
      product_info.append(figure);
      div.append(p_price, p_name);
      figure.appendChild(add_img);

   });
}

renderProducts(productList);
