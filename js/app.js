'use strict';

// Cart constructor.
// const Cart = function (items) {
// this.items is an array of CartItem instances.
//   this.items = items;
// };

// Cart.prototype.addItem = function (image,title,price) {
// TODO: Fill in this instance method to create a new CartItem and add it to this.items
//   let newItem  = new CartItem(image,title,price);
//   this.items.push(newItem);

// };

// Cart.prototype.saveToLocalStorage = function () {
// TODO: Fill in this instance method to save the contents of the cart to localStorage
//   localStorage.setItem('card',JSON.stringify(this.items));
// };

// Cart.prototype.removeItem = function (item) {
// TODO: Fill in this instance method to remove one item from the cart.
// Note: You will have to decide what kind of parameter to pass in here!
//   this.items.splice(item,1);
// };
// Constructor for CartItem;
// Image and title and price;
// const CartItem = function (image, title, price, quantity) {
//   this.image = image;
//   this.title = title;
//   this.price = price;



// };




function Product(image, title, price, description) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.description=description;
  Product.allProduct.push(this);
  console.log(this);
}
Product.allProduct = [];

// function generateProducts() {
new Product('img/hot1.jpg', 'Caffè Americano', 3.49);
new Product('img/hot2.jpg', 'Cappuccino', 3.99);
new Product('img/hot3.jpg', 'Espresso', 4.49);
new Product('img/cold1.jpg', 'Vanilla Sweet Cream Cold Brew', 4.99);
new Product('img/cold2.jpg', 'Iced Caramel Brulée Latte', 5.99);
new Product('img/cold3.jpg', 'Iced Pineapple Matcha Drink', 4.49);
new Product('img/snack0.jpg', 'Chicken & Beef Panini', 6.99);
new Product('img/snack1.jpg', 'Crispy Grilled Cheese Sandwich', 6.49);
new Product('img/snack2.jpg', 'Chickpea Bites & Avocado Protein Box', 7.99);
new Product('img/snack3.jpg', 'Eggs & Cheddar Protein Box', 14.99);
new Product('img/snack4.jpg', 'Chicken & Quinoa Protein Bowl with Black Beans and Greens', 14.99);
new Product('img/snack5.jpg', 'Banana', 3.99);
new Product('img/desserts1.jpg', 'Gluten-free chocolate cake', 15.99);
new Product('img/desserts2.jpg', 'Florentines', 9.99);
new Product('img/desserts3.jpg', 'Utterly nutterly caramel layer cake', 19.99);
new Product('img/desserts4.jpg', 'Caramel sauce', 10.99);
new Product('img/desserts5.jpg', 'Vegan custard', 12.99);
new Product('img/desserts6.jpg', 'Strawberry ice cream', 6.99);
// }
// // Calling the function
// generateProducts();

let added=[];
// render method
Product.prototype.render=function () {
  // write code to generate

  //   <div class="card">
  //   <img class="image" src="img/hot1.jpg" alt="Caffè Americano" style="width:100%">
  //   <h1  class="title">Caffè Americano</h1>
  //   <p class="price">$3.49</p>
  //   <p>Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully
  //       rich cup with depth and nuance. Pro Tip: For an additional boost, ask your barista to try this with
  //       an extra shot.</p>
  //     <button value="Add To Cart" /></p>
  // </div>

  // create a button
  // add event listener
  // let object=this
  // function
  // adds the item to the added array
  // added.push(object)
  // setting to locla storage


};

// setting to local storage function
