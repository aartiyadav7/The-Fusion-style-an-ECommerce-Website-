// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10.00 },
  { id: 2, name: "Product 2", price: 20.00 },
  { id: 3, name: "Product 3", price: 15.00 },
];

const cart = [];
let cartTotal = 0;

// Function to display products
function displayProducts() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
      cart.push(product);
      cartTotal += product.price;
      updateCart();
  }
}

// Function to update the cart
function updateCart() {
  const cartItems = document.querySelector("#cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(cartItem);
  });

  const cartTotalElement = document.querySelector("#cart-total");
  cartTotalElement.textContent = cartTotal.toFixed(2);
}

//JavaScript functionality for the Buy Now Button
const buyButtons = document.querySelectorAll('button');

buyButtons.forEach(button => {
  button.addEventListener('click', function() {
      alert('Thank you for your purchase!');
  });
});



const menProducts = [
  // Men's product data
];

const womenDresses = [
  { id: 4, name: "Women's Dress 1", price: 30.00 },
  { id: 5, name: "Women's Dress 2", price: 25.00 },
  { id: 6, name: "Women's Dress 3", price: 35.00 },
];

// You can add JavaScript functionality here if needed for the clothing section

// For example, you can add functionality for a clothing item click event
const clothingItems = document.querySelectorAll('.clothing-item');

clothingItems.forEach(item => {
    item.addEventListener('click', function() {
        const itemName = item.querySelector('h4').innerText;
        const itemPrice = item.querySelector('p').innerText;
        alert(`You have selected ${itemName} which costs ${itemPrice}`);
    });
});





// Function to display products
function displayProducts() {
  const menProductList = document.querySelector(".men-products");
  menProductList.innerHTML = "";
  menProducts.forEach((product) => {
      // Display men's products
  });

  const womenDressList = document.querySelector(".women-dresses");
  womenDressList.innerHTML = "";
  womenDresses.forEach((product) => {
      const dressDiv = document.createElement("div");
      dressDiv.classList.add("product");
      dressDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      womenDressList.appendChild(dressDiv);
  });
}


// Display products on page load
displayProducts();

// For Contact Us Form:
document.getElementById('ContactForm').addEventListener('submit', function(event){
event.preventDefault(); //Prevent form from submitting normally

//validate form inputs
var name = document.getElementById('name').value;
var email= document.getElementById('email').value;
var message = document.getElementById('message').value;

if(name === '' || email === '' || message === '') {
          alert('Please fill out all the fields.');
  } else {
          // If form inputs are valid, process form data
          alert('Thank you for contacting us! We will get back to you soon.');
    }
  });



