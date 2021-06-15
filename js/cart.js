// this is for star javascript

//initial setup
// document.addEventListener('DOMContentLoaded', function(){
//   let stars = document.querySelectorAll('.star');
//   stars.forEach(function(star){
//     star.addEventListener('click', setRating);
//   });

//   let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
//   let target = stars[rating - 1];
//   target.dispatchEvent(new MouseEvent('click'));
// });

// function setRating(ev){
//   let span = ev.currentTarget;
//   let stars = document.querySelectorAll('.star');
//   let match = false;
//   let num = 0;
//   stars.forEach(function(star, index){
//     if(match){
//       star.classList.remove('rated');
//     }else{
//       star.classList.add('rated');
//     }
//     //are we currently looking at the span that was clicked
//     if(star === span){
//       match = true;
//       num = index + 1;
//     }
//   });
//   document.querySelector('.stars').setAttribute('data-rating', num);
// }


// this is for remove button-----------------------------
// var removeCartItemButtons = document.getElementsByClassName('btn-danger')
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i]
//     button.addEventListener('click', removeCartItem)
// }




// this is for quntityInputs ----------------------------

// var quantityInputs = document.getElementsByClassName('cart-quantity-input')
// for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i]
//     input.addEventListener('change', quantityChanged)

// }


// line 26 it will be here (the checkout click)

// document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


// function purchaseClicked() {
//     alert('Thank you for your purchase')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     updateCartTotal()
// }


// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.


const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('card')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  updateCartPreview();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  let tbody=document.getElementById('tbody');

  // let tbody=document.getElementsByTagName('tbody');
  // tbody[0].textContent=''

  tbody.textContent='';

  // tbody.textContent='';





}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart



function showCart() {

  // TODO: Find the table body
  let tbody=document.getElementById('tbody');


  // TODO: Iterate over the items in the cart
  // TODO: Create a TR

  for (let i = 0; i < cart.items.length; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);


    let deleteTd=document.createElement('td');
    deleteTd.textContent= 'Remove';
    tr.appendChild(deleteTd);

    let quantityTd=document.createElement('td');
    quantityTd.textContent=cart.items[i].quantity;
    tr.appendChild(quantityTd);

    let priceTd=document.createElement('td');
    priceTd.textContent=cart.items[i].price;
    tr.appendChild(priceTd);

    let titleTd=document.createElement('td');
    titleTd.textContent=cart.items[i].title;
    tr.appendChild(titleTd);

    let imageTd=document.createElement('td');
    imageTd.textContent=cart.items[i].image;
    tr.appendChild(imageTd);



    
  }
  // TODO: Create a TD for the delete link, quantity,  and the item
  //   let tr = document.createElement('tr');
  //   let deleteTd=document.createElement('td');
  // deleteTd.textContent= 'X';
  // tr.appendChild(deleteTd);

  // let quantityTd=document.createElement('td');
  // quantityTd.textContent=cart.items.quantity;
  // tr.appendChild(quantityTd);

  // let productTd=document.createElement('td');
  // productTd.textContent=cart.items.product;
  // tr.appendChild(productTd);

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
function updateCartPreview() {

  // TODO: Get the item and quantity from the form

  let cartContainer = document.getElementById('cart-container');
  console.log(cartContainer);

  let ul = document.createElement('ul');
  cartContainer.appendChild(ul);
  let li = document.createElement('li');
  ul.appendChild(li);


  // TODO: Add a new element to the cartContents div with that information

  let items=document.getElementById('cart').value;

  let quantity = Number(document.getElementById('quantity').value);

  li.textContent= `${items} : ${quantity}`;


}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  if (event.target.textContent === 'Remove') {

    cart.removeItem(event.target.id);
    console.log(event.target.textContent);

  }

  // TODO: Save the cart back to local storage

  localStorage.setItem('cart',JSON.stringify(cart.items));

  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();







