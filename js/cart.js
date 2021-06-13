// this is for star javascript

//initial setup
document.addEventListener('DOMContentLoaded', function(){
  let stars = document.querySelectorAll('.star');
  stars.forEach(function(star){
    star.addEventListener('click', setRating);
  });

  let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
  let target = stars[rating - 1];
  target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev){
  let span = ev.currentTarget;
  let stars = document.querySelectorAll('.star');
  let match = false;
  let num = 0;
  stars.forEach(function(star, index){
    if(match){
      star.classList.remove('rated');
    }else{
      star.classList.add('rated');
    }
    //are we currently looking at the span that was clicked
    if(star === span){
      match = true;
      num = index + 1;
    }
  });
  document.querySelector('.stars').setAttribute('data-rating', num);
}


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








