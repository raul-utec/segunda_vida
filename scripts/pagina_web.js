/*
import {formatCurrency} from '../money.js';
import {cart, addToCart} from '../data/cart.js'
import {products} from '../data/products.js'; 

function renderProducts(filteredProducts) {//

let productsHTML = '';

filteredProducts.forEach((product) => {
//  if ( product.keywords.includes("toaster","kitchen"))
  productsHTML += `

<div class="book"> 
        <img src="${product.image}">
 
        <div class="book-info">
            <h3>${products.name}</h3>
            <p>${product.autor}</p>
            <p>${product.anno}</p>
            <p>Edición: ${product.edicion}</p>
            <p>Condición: ${product.condicion}</p>
        </div>      
        <div class="button-container">
            <button onclick="mostrarPrecio()">S/.${(product.priceCents / 100).toFixed(2)}</button>
            <button onclick="meGusta()">&#10084;</button>
            <button onclick="verReseña()">${product.rating.stars}&#9733;</button>
            <button onclick="" class="add-to-cart-button button-primary js-add-to-cart " data-product-id="${product.id}">Comprar</button>
        </div> 
 </div>  
    `;

});
document.querySelector('.js-products-grid').innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
    
      });
    });
  }
    function filterBooks(category) {
      const filteredProducts = products.filter(product => product.keywords.includes(category));
      renderProducts(filteredProducts);
    }
    
  
  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    console.log(cart);  
  }

// Inicializa la cantidad del carrito al cargar la página
updateCartQuantity();

renderProducts(products);

    document.querySelectorAll('.colores').forEach(function(button) {

      button.addEventListener('click', function() {
          this.classList.toggle('opaco');
          const category = this.textContent;
          filterBooks(category);
        });
      });
*/

import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';

let selectedCategories = new Set();

function renderProducts(filteredProducts) {
  let productsHTML = '';

  filteredProducts.forEach((product) => {
    productsHTML += `
      <div class="book"> 
        <img src="${product.image}" alt="${product.name}">
        <div class="book-info">
          <h3>${product.name}</h3>
          <p>${product.autor}</p>
          <p>${product.anno}</p>
          <p>Edición: ${product.edicion}</p>
          <p>Condición: ${product.condicion}</p>
        </div>      
        <div class="button-container">
          <button onclick="mostrarPrecio()">S/.${(product.priceCents / 100).toFixed(2)}</button>
          <button onclick="meGusta()">&#10084;</button>
          <button onclick="verReseña()">${product.rating.stars}&#9733;</button>
          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">Comprar</button>
        </div> 
      </div>`;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    });
  });
}

function filterBooks() {
  if (selectedCategories.size === 0) {
    renderProducts(products);
  } else {
    const filteredProducts = products.filter(product =>
      [...selectedCategories].some(category => product.keywords.includes(category))
    );
    renderProducts(filteredProducts);
  }
}

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

// Inicializa la cantidad del carrito al cargar la página
updateCartQuantity();

// Renderiza todos los productos inicialmente
renderProducts(products);

document.querySelectorAll('.colores').forEach(function (button) {
  button.addEventListener('click', function () {
    this.classList.toggle('opaco');
    const category = this.textContent;
    if (selectedCategories.has(category)) {
      selectedCategories.delete(category);
    } else {
      selectedCategories.add(category);
    }
    filterBooks();
  });
});

