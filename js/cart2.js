'use strict';

// sample of array of objects of selected items from  the proucts page
// image, title, price, description
//  new Product('img/hot1.jpg', 'Caffè Americano', 3.49);
//   new Product('img/hot2.jpg', 'Cappuccino', 3.99);
//   new Product('img/hot3.jpg', 'Espresso', 4.49);
let products=[{image:'img/hot1.jpg', title:'Caffè Americano',price: 3.49,description:'some desc'},{image:'img/hot1.jpg', title:'Caffè Americano',price: 3.49,description:'some desc'},{image:'img/hot1.jpg', title:'Jamal',price: 3.49,description:'some desc'}];


function Product (image, title, price){
  this.image = image;
  this.title = title;
  //   console.log(this.title);
  this.price = price;
  Product.allproduct.push(this);
}

Product.allproduct = [];
// let cart;
// function loadCart() {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = new Product(cartItems);
// }


for (let i = 0; i < products.length; i++) {
//   console.log(new Product(products[i].image,products[i].title,products[i].price));
  new Product(products[i].image,products[i].title,products[i].price);
  console.log('hello');
}
console.log(Product.allproduct);

// render prototype method
// tr
// td
// td for quantity

// button
let parent1 = document.getElementById('cart');
parent1.addEventListener('click', removeItemFromCart);

let tbody = document.getElementById('tbody');
Product.prototype.render = function(){
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  console.log('Hello');

  let tdImg = document.createElement('td');
  let img=document.createElement('img');

  tr.appendChild(tdImg);
  tdImg.appendChild(img);
  img.src = this.image;

  let tdTitle = document.createElement('td');
  tr.appendChild(tdTitle);
  tdTitle.textContent = this.title;
  //   console.log(this.title);

  let tdPrice = document.createElement('td');
  tr.appendChild(tdPrice);
  tdPrice.textContent = this.price;

  let tdQuantity = document.createElement('td');
  let quantityInput = document.createElement('input');
  tdQuantity.appendChild(quantityInput);
  tr.appendChild(tdQuantity);

  let tdRemove = document.createElement('td');
  let buttonRemove = document.createElement('button');
  tdRemove.appendChild(buttonRemove);
  tr.appendChild(tdRemove);
  buttonRemove.textContent = 'Remove';
  buttonRemove.addEventListener('click', removeItemFromCart);
//   console.log(this.title);
};
function removeItemFromCart(event){
  products.removeItem(event.target);
}



for (let i = 0; i < Product.allproduct.length; i++) {
  Product.allproduct[i].render();
}
// console.log(this.title);

Product.prototype.removeItem = function (item) {
  products.splice(item,1);
};