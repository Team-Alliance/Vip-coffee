'use strict';
// /*let addToCart= document.getElementsByClassName('cart-button');
// for (let i = 0; i < addToCart.length; i++) {
//   let button= addToCart[i];

//   button.addEventListener('click',addToCartClicked);


// }


// function addToCartClicked(event) {

//   let button= event.target;
//   let shopItem = button.parentElement;
//   let title = shopItem.getElementsByClassName('title')[0];
//   let price = shopItem.getElementsByClassName('price')[0];

//   let image = shopItem.getElementsByClassName('image')[0];

//   addItemCart(title,price,image);
//   console.log(addToCartClicked);
//   //   updateCartTotal();

// }

// function addItemCart(title,price,image) {
//     let cartRow=document.createElement('div');
//     cartRow.classList.add('cart-new');
//     let title = shopItem.getElementsByClassName('title')[0];
//     let price = shopItem.getElementsByClassName('price')[0];

//     let image = shopItem.getElementsByClassName('image')[0];

// }*/

// // Set up an empty cart for use on this page.
// const cart = new Cart([]);

// // On screen load, we call this method to put all of the busmall options
// // (the things in the Product.allProducts array) into the drop down list.
// /*function populateForm() {

//   //TODO: Add an <option> tag inside the form's select for each product
//   const selectElement = document.getElementById('items');
//   for (let i in Product.allProducts) {
//     let option=document.createElement('option');
//     selectElement.appendChild(option);
//     option.textContent=Product.allProducts[i].name;

//   }

// }*/

// // When someone submits the form, we need to add the selected item to the cart
// // object, save the whole thing back to local storage and update the screen
// // so that it shows the # of items in the cart and a quick preview of the cart itself.
// function handleSubmit(event) {

//   // TODO: Prevent the page from reloading
//   event.preventDefault();


//   // Do all the things ...
//   addSelectedItemToCart();
//   cart.saveToLocalStorage();
//   updateCounter();
//   // updateCartPreview();

// }

// // TODO: Add the selected item and quantity to the cart
// function addSelectedItemToCart() {


//   // TODO: suss out the item picked from the select list
//   //let item =document.getElementById('items').value;
//   // console.log(item);
//   // TODO: get the quantity
//   // let quantity =Number(document.getElementById('quantity').value);
//   let image=document.getElementsByClassName('image').src;
//   let title=document.getElementsByClassName('title').value;
//   let price=document.getElementsByClassName('price').value;
//   // TODO: using those, add one item to the Cart

//   // add just imege ,price,title and remove item, product
//   cart.addItem(image,title,price);
//   console.log(image,title,price);
// }

// // TODO: Update the cart count in the header nav with the number of items in the Cart
// let count=0;
// function updateCounter() {

//   let itemCount=document.getElementById('itemCount');

//   count=cart.items.length;
//   itemCount.textContent = `the number of cataloge is: ${count}`;

// }
// // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div



// //------copy to cart.js

// // function updateCartPreview() {

// //   // TODO: Get the item and quantity from the form

// //   let cartContents = document.getElementById('cartContents');
// //   console.log(cartContents);

// //   let ul = document.createElement('ul');
// //   cartContents.appendChild(ul);
// //   let li = document.createElement('li');
// //   ul.appendChild(li);


// //   // TODO: Add a new element to the cartContents div with that information

// //   let items=document.getElementById('items').value;

// //   let quantity = Number(document.getElementById('quantity').value);

// //   li.textContent= `${items} : ${quantity}`;


// // }




// // Set up the "submit" event listener on the form.
// // This is the trigger for the app. When a user "submits" the form, it will
// // Call that handleSubmit method above and kick off the whole process
// const card = document.getElementsByClassName('card')[0];
// card.addEventListener('submit', handleSubmit);

// // Before anything else of value can happen, we need to fill in the select
// // drop down list in the form.
// //populateForm();






// function Product(image, title, price) {
//   this.image = image;
//   this.title = title;
//   this.price = price;
//   Product.allProduct.push(this);
//   console.log(this);
// }
// Product.allProduct = [];
// function generateProducts() {
//   new Product('img/hot1.jpg', 'Caffè Americano', 3.49);
//   new Product('img/hot2.jpg', 'Cappuccino', 3.99);
//   new Product('img/hot3.jpg', 'Espresso', 4.49);
//   new Product('img/cold1.jpg', 'Vanilla Sweet Cream Cold Brew', 4.99);
//   new Product('img/cold2.jpg', 'Iced Caramel Brulée Latte', 5.99);
//   new Product('img/cold3.jpg', 'Iced Pineapple Matcha Drink', 4.49);
//   new Product('img/snack0.jpg', 'Chicken & Beef Panini', 6.99);
//   new Product('img/snack1.jpg', 'Crispy Grilled Cheese Sandwich', 6.49);
//   new Product('img/snack2.jpg', 'Chickpea Bites & Avocado Protein Box', 7.99);
//   new Product('img/snack3.jpg', 'Eggs & Cheddar Protein Box', 14.99);
//   new Product('img/snack4.jpg', 'Chicken & Quinoa Protein Bowl with Black Beans and Greens', 14.99);
//   new Product('img/snack5.jpg', 'Banana', 3.99);
//   new Product('img/desserts1.jpg', 'Gluten-free chocolate cake', 15.99);
//   new Product('img/desserts2.jpg', 'Florentines', 9.99);
//   new Product('img/desserts3.jpg', 'Utterly nutterly caramel layer cake', 19.99);
//   new Product('img/desserts4.jpg', 'Caramel sauce', 10.99);
//   new Product('img/desserts5.jpg', 'Vegan custard', 12.99);
//   new Product('img/desserts6.jpg', 'Strawberry ice cream', 6.99);
// }

// generateProducts();


function Product(image, title, price, description, catagory) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.description = description;
  this.catagory = catagory;
  Product.allProduct.push(this);
  // console.log(this);
}
Product.allProduct = [];
new Product('img/hot1.jpg', 'Caffè Americano', 3.49, 'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance Pro', 'beverage');

new Product('img/hot2.jpg', 'Cappuccino', 3.99, 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft', 'beverage');

new Product('img/hot3.jpg', 'Espresso', 4.49, 'Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.', 'beverage');

new Product('img/cold1.jpg', 'Vanilla Sweet Cream Cold Brew', 4.99, 'Our slow-steeped custom blend of Starbucks® Cold Brew coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup. Its over-the-top and super-smooth.', 'beverage');

new Product('img/cold2.jpg', 'Iced Caramel Brulée Latte', 5.99, 'Our signature espresso, milk, ice and rich caramel brulée sauce finished with whipped cream and a supreme topping of even more caramel brulée.', 'beverage');

new Product('img/cold3.jpg', 'Iced Pineapple Matcha Drink', 4.49, 'Our premium matcha green tea shaken with flavors of pineapple and ginger along with coconutmilk and ice for a delicious beverage to uplift your day.', 'beverage');

new Product('img/snack0.jpg', 'Chicken & Beef Panini', 6.99, 'Herbed chicken is slow-cooked and piled high on toasted apple brioche, topped with our double-smoked bacon and maple mustard.', 'snacks');

new Product('img/snack1.jpg', 'Crispy Grilled Cheese Sandwich', 6.49, 'A delicious blend of white Cheddar and mozzarella cheeses on sourdough bread, topped with a Parmesan butter spread.', 'snacks');

new Product('img/snack2.jpg', 'Chickpea Bites & Avocado Protein Box', 7.99, 'Herbed chicken is slow-cooked and piled high on toasted apple brioche, topped with our double-smoked bacon and maple mustard.', 'snacks');

new Product('img/snack3.jpg', 'Eggs & Cheddar Protein Box', 14.99, 'Two cage-free hardboiled eggs, sliced tart apples, grapes and white Cheddar cheese come together with multigrain muesli bread and honey peanut butter in this protein-packed lovers dream.', 'snacks');

new Product('img/snack4.jpg', 'Chicken & Quinoa Protein Bowl with Black Beans and Greens', 14.99, 'Grilled chicken tossed with a medium-spiced chile vinaigrette for a lively but not over-the-top kick and mixed with fresh greens, tomatoes, roasted corn, black beans, jicama, paprika and cotija..', 'snacks');

new Product('img/snack5.jpg', 'Banana', 3.99, 'Sweet, ripe bananas are like letting a ray of sunshine into your day—a wonderfully sweet, creamy, golden, favorite fruit for all ages.', 'snacks');

new Product('img/desserts1.jpg', 'Gluten-free chocolate cake', 15.99, 'Make a dense, rich chocolate cake for a special occasion or anytime treat. While suitable for those following a gluten-free diet, it will prove a hit with everyone.', 'desserts');

new Product('img/desserts2.jpg', 'Florentines', 9.99, 'Enjoy these classic florentines at Christmas time. Jewelled with cherries and pistachios and coated in chocolate, these biscuits are the perfect festive gift.', 'desserts');

new Product('img/desserts3.jpg', 'Utterly nutterly caramel layer cake', 19.99, 'The toffee nut topping gives this sponge the edge- we used Brazil nuts, hazelnut, pecans and almonds.', 'desserts');

new Product('img/desserts4.jpg', 'Caramel sauce', 10.99, 'This classic sauce uses only three ingredients. Drizzle around chocolate puddings or over your favourite ice cream.', 'desserts');

new Product('img/desserts5.jpg', 'Vegan custard', 12.99, 'Make our vegan coconut custard to pour over your favourite desserts. Made with coconut milk, it pairs beautifully with our carrot, coconut & date pudding.', 'desserts');

new Product('img/desserts6.jpg', 'Strawberry ice cream', 6.99, 'Use sweet strawberries whilst they’re in season to make this fabulous homemade strawberry ice cream. It’s perfect on its own or as an accompaniment summer desserts.', 'desserts');
// console.log(this.title);
let item = [];
// console.log(items);
// render method


let parents = document.getElementById('menu');
// let hElementBev =document.createElement('h1');
// let hElementSnack=document.createElement('h1');
// let buttonCart;
// write code to generate
// parent.appendChild(article);
// let div = document.getElementsByClassName('card')[0];



function render() {
  
  
  for (let i = 0; i < Product.allProduct.length; i++) {
    
    // parent.appendChild(div);
    // let image=document.createElement('img');
    // div.appendChild(image);
    // image.src = this.image;
    
    // let headerTitle=document.createElement('h1');
    // div.appendChild(headerTitle);
    // headerTitle.textContent=this.title;
    
    // let priceItem=document.createElement('p');
    // priceItem.textContent=this.price;
    // div.appendChild(priceItem);
    
    
    if (Product.allProduct[i].catagory === 'beverage') {
      
      let article = document.getElementById('beverage');
      parents.appendChild(article);
      
      // hElementBev.textContent='Baverage';
      let hElement=document.getElementById('hElement');
      article.appendChild(hElement);
      // let article=getElementById

      // hElement.textContent='Bevarage';
      let div=document.createElement('div');

      hElement.appendChild(div);


      let image = document.createElement('img');
      div.appendChild(image);
      // image.src = this.imagoducte;
      image.src = Product.allProduct[i].image;

      let headerTitle = document.createElement('h1');
      div.appendChild(headerTitle);
      // headerTitle.textContent=this.title;
      headerTitle.textContent = Product.allProduct[i].title;
      let priceItem = document.createElement('p');
      // priceItem.textContent=this.price;
      priceItem.textContent = Product.allProduct[i].price;
      div.appendChild(priceItem);



      let discriptionItem = document.createElement('p');
      // discriptionItem.textContent=this.description;
      discriptionItem.textContent = Product.allProduct[i].description;

      div.appendChild(discriptionItem);


      // let discriptionItem=document.createElement('p');
      // discriptionItem.textContent=this.description;
      // div.appendChild(discriptionItem);


      // let buttonCart=document.createElement('button');
      // buttonCart.textContent='Add To Cart';
      // div.appendChild(buttonCart);

      let buttonCart = document.createElement('button');
      buttonCart.textContent = 'Add To Cart';
      buttonCart.id = i;
      div.appendChild(buttonCart);

      buttonCart.addEventListener('click', submiter);

     





    } else if (Product.allProduct[i].catagory === 'snacks') {
      let article = document.getElementById('snacks');
      parents.appendChild(article);
      let hSnack=document.getElementById('hSnack');
      article.appendChild(hSnack);
      // let article=getElementById

      // hElement.textContent='Bevarage';
      let div=document.createElement('div');

      hSnack.appendChild(div);
      // articleBev=document.getElementById('beverage');
      // parent.appendChild(articleBev);

      // hElement=document.createElement('h1');
      // hElement.textContent='Beverage';

      // articleBev.appendChild(div);
      // articleBev.appendChild(hElement);
      let image = document.createElement('img');
      div.appendChild(image);
      // image.src = this.imagoducte;
      image.src = Product.allProduct[i].image;

      let headerTitle = document.createElement('h1');
      div.appendChild(headerTitle);
      // headerTitle.textContent=this.title;
      headerTitle.textContent = Product.allProduct[i].title;


      let priceItem = document.createElement('p');
      // priceItem.textContent=this.price;
      priceItem.textContent = Product.allProduct[i].price;
      div.appendChild(priceItem);



      let discriptionItem = document.createElement('p');
      // discriptionItem.textContent=this.description;
      discriptionItem.textContent = Product.allProduct[i].description;

      div.appendChild(discriptionItem);


      let buttonCart = document.createElement('button');
      buttonCart.textContent = 'Add To Cart';
      buttonCart.id = i;
      div.appendChild(buttonCart);

      buttonCart.addEventListener('click', submiter);




    }





    else if (Product.allProduct[i].catagory === 'desserts') {
      let article = document.getElementById('desserts');
      parents.appendChild(article);
      let hBverage=document.getElementById('hDess');
      article.appendChild(hBverage);
      // let article=getElementById

      // hElement.textContent='Bevarage';
      let div=document.createElement('div');

      hBverage.appendChild(div);
      // articleBev=document.getElementById('beverage');
      // parent.appendChild(articleBev);

      // hElement=document.createElement('h1');
      // hElement.textContent='Beverage';

      // articleBev.appendChild(div);
      // articleBev.appendChild(hElement);
      let image = document.createElement('img');
      div.appendChild(image);
      // image.src = this.imagoducte;
      image.src = Product.allProduct[i].image;

      let headerTitle = document.createElement('h1');
      div.appendChild(headerTitle);
      // headerTitle.textContent=this.title;
      headerTitle.textContent = Product.allProduct[i].title;

        let priceItem = document.createElement('p');
      // priceItem.textContent=this.price;
      priceItem.textContent = Product.allProduct[i].price;
      div.appendChild(priceItem);


      let discriptionItem = document.createElement('p');
      // discriptionItem.textContent=this.description;
      discriptionItem.textContent = Product.allProduct[i].description;

      div.appendChild(discriptionItem);


      let buttonCart = document.createElement('button');
      buttonCart.textContent = 'Add To Cart';
      buttonCart.id = i;
      div.appendChild(buttonCart);

      buttonCart.addEventListener('click', submiter);



    }


  }


}










function submiter(event) {
  if (event.target.id) {

    item.push(Product.allProduct[event.target.id]);
    localStorage.setItem('products',JSON.stringify(item));
  }
  console.log(item);

}

render();
