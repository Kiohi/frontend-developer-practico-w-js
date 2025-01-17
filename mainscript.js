const email = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const shoppingCart = document.querySelector(".navbar-cart-item");



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
   price: 30,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "Bike",
   price: 30,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "Bike",
   price: 30,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
   name: "HP Pavillion X360",
   price: 250,
   image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07008767.png",
});

function renderProducts(products) {
   products.forEach(item => {
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
      add_img.classList.add('add-to-cart');
      add_img.style.cursor = 'pointer';

      add_img.addEventListener("click", () => {

         const cart_list = document.querySelector('.cart');
          
         // const order_content = document.querySelector('.my-order-content');
         const cart_item = document.createElement('div');
         cart_item.classList.add('cart-item');
         const figure = document.createElement('figure');

         const item_img = document.createElement('img');
         item_img.setAttribute('src', item.image);
         item_img.setAttribute('alt', item.name);
         figure.append(item_img);
         
         const item_name = document.createElement('p');
         item_name.innerHTML = item.name;
         
         const item_price = document.createElement('p');
         item_price.innerHTML = "$" + item.price;
         
         const close_img = document.createElement('img');
         close_img.setAttribute('src', './icons/icon_close.png');
         close_img.setAttribute('alt', 'close');
         
         cart_item.style =
         "display: grid; grid-template-columns: auto 1fr auto auto; gap:16px; margin-bottom: 24px; align-items: center";
         figure.style = "margin: 0;";
         item_img.style = "width: 70px; height: 70px; border-radius: 20px; object-fit: cover; border: 1px solid black;";
         item_name.style = 'color: #C7C7C7';
         item_price.style = 'font-weight: bold';
         // close_img.style = 'height: 14px; width: 14px';

         cart_item.append(figure);
         cart_item.append(item_name);
         cart_item.append(item_price);
         cart_item.append(close_img);
         cart_list.append(cart_item);

         const items_count = document.querySelector("#items-count");
         var count = parseInt(items_count.innerHTML);
         items_count.innerHTML = count + 1;
         


      });
      

      cards_container.appendChild(product_card);
      product_card.append(product_img, product_info);
      product_info.append(div);
      product_info.append(figure);
      div.append(p_price, p_name);
      figure.appendChild(add_img);

   });
}

renderProducts(productList);