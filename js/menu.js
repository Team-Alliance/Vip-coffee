'use strict';
/*let addToCart= document.getElementsByClassName('cart-button');
for (let i = 0; i < addToCart.length; i++) {
  let button= addToCart[i];

  button.addEventListener('click',addToCartClicked);


}


function addToCartClicked(event) {

  let button= event.target;
  let shopItem = button.parentElement;
  let title = shopItem.getElementsByClassName('title')[0];
  let price = shopItem.getElementsByClassName('price')[0];

  let image = shopItem.getElementsByClassName('image')[0];

  addItemCart(title,price,image);
  console.log(addToCartClicked);
  //   updateCartTotal();

}

function addItemCart(title,price,image) {
    let cartRow=document.createElement('div');
    cartRow.classList.add('cart-new');
    let title = shopItem.getElementsByClassName('title')[0];
    let price = shopItem.getElementsByClassName('price')[0];

    let image = shopItem.getElementsByClassName('image')[0];

}*/

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
/*function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option=document.createElement('option');
    selectElement.appendChild(option);
    option.textContent=Product.allProducts[i].name;

  }

}*/

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();


  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  // updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {


  // TODO: suss out the item picked from the select list
  //let item =document.getElementById('items').value;
  // console.log(item);
  // TODO: get the quantity
  // let quantity =Number(document.getElementById('quantity').value);
  let image=document.getElementsByClassName('image').src;
  let title=document.getElementsByClassName('title').value;
  let price=document.getElementsByClassName('price').value;
  // TODO: using those, add one item to the Cart

  // add just imege ,price,title and remove item, product
  cart.addItem(image,title,price);
  console.log(image,title,price);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let count=0;
function updateCounter() {

  let itemCount=document.getElementById('itemCount');

  count=cart.items.length;
  itemCount.textContent = `the number of cataloge is: ${count}`;

}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div



//------copy to cart.js

// function updateCartPreview() {

//   // TODO: Get the item and quantity from the form

//   let cartContents = document.getElementById('cartContents');
//   console.log(cartContents);

//   let ul = document.createElement('ul');
//   cartContents.appendChild(ul);
//   let li = document.createElement('li');
//   ul.appendChild(li);


//   // TODO: Add a new element to the cartContents div with that information

//   let items=document.getElementById('items').value;

//   let quantity = Number(document.getElementById('quantity').value);

//   li.textContent= `${items} : ${quantity}`;


// }




// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const card = document.getElementsByClassName('card')[0];
card.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
//populateForm();
