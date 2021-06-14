let addToCart= document.getElementsByClassName('cart-button');
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
  
}
