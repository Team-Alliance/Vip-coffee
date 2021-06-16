'use strict';

// sample of array of objects of selected items from  the proucts page
// image, title, price, description
//  new Product('img/hot1.jpg', 'Caffè Americano', 3.49);
//   new Product('img/hot2.jpg', 'Cappuccino', 3.99);
//   new Product('img/hot3.jpg', 'Espresso', 4.49);'
let totalValue=0;
let products=[];

// console.log(data);
// localStorage.setItem('products',JSON.stringify(item));func

function getData() {
  let data=localStorage.getItem('products');
  let dataObj=JSON.parse(data);
  // console.log(dataObj);
  if (dataObj!==null) {
    products=dataObj;
    console.log(products);

  }
  // if(localStorage.getItem('form')){
  //   let addstorage =JSON.parse(localStorage.getItem('form'));
  //   for(let e =0; e<addstorage.length; e++){
  //     let saveDivice = new Form( addstorage[e].firstName , addstorage[e].lastName , addstorage[e].location);
  //   }
  // }
}


function Product (image, title, price){
  this.image = image;
  this.title = title;
  //   console.log(this.title);
  this.price = price;
  Product.allproduct.push(this);
}
getData();
Product.allproduct = [];


function storageUpdate() {
  let arrString = JSON.stringify(Product.allproduct);

  localStorage.setItem('products', arrString);
}

// let cart;
// function loadCart() {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = new Product(cartItems);
// }

// Product.prototype.removeItem = function (item) {
//   products.splice(item,1);
// };

for (let i = 0; i < products.length; i++) {
//   console.log(new Product(products[i].image,products[i].title,products[i].price));
  new Product(products[i].image,products[i].title,products[i].price);
  console.log(Product.allproduct);
}
//console.log(Product.allproduct);

// render prototype method
// tr
// td
// td for quantity

// button
//let parent1 = document.getElementById('cart');

//parent1.addEventListener('click', removeItemFromCart);

let tbody = document.getElementById('tbody');
/*Product.prototype.render = function(){
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
  buttonRemove.setAttribute('id', 'btn');
  tdRemove.appendChild(buttonRemove);
  tr.appendChild(tdRemove);
  buttonRemove.textContent = 'Remove';
  buttonRemove.addEventListener('click', removeItemFromCart);
//   console.log(this.title);
};*/
/*function removeItemFromCart(event){
  tbody.textContent='';
  if(event.target.textContent === 'Remove'){
    products.splice(event.target.id,1);
  }
  // products.splice(event.target.class,1);
}*/



/*for (let i = 0; i < Product.allproduct.length; i++) {
  Product.allproduct[i].render();
}*/
// console.log(this.title);
console.log(Product.allproduct);
//function render(){
Product.prototype.render = function(){

  //for(let i=0; i<Product.allproduct.length;i++){
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  tr.setAttribute('class', 'tr');
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
  tdPrice.setAttribute('class','price');
  tdPrice.textContent =this.price;
  // document.getElementById("myDIV").classList.add("mystyle");
  let tdQuantity = document.createElement('td');
  let quantityInput = document.createElement('input');
  quantityInput.setAttribute('id',this.price);
  tdQuantity.setAttribute('class','quantity');
  quantityInput.addEventListener('change',quantityTotal);
  quantityInput.setAttribute('type', 'number');
  tdQuantity.appendChild(quantityInput);
  tr.appendChild(tdQuantity);

  let tdRemove = document.createElement('td');
  let buttonRemove = document.createElement('button');
  tdRemove.appendChild(buttonRemove);
  tr.appendChild(tdRemove);
  buttonRemove.textContent='Delete';



  buttonRemove.addEventListener('click',submitter);


  let object=this;

  function submitter(event) {
    event.preventDefault();

    tr.textContent='';
    console.log(object);
    // delete form array
    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
      if (products[i].title===object.title) {
        console.log('hello');
        products.splice(i,1); 
        // Product.allproduct.splice(products.indexOf(object),1);
      }

    }

    // localStorage.setItem(JSON.stringify('products',products));
    localStorage.setItem('products',JSON.stringify(products));


    console.log(products);
  }

};


let totalQua;
function quantityTotal(event) {
  console.log(event.target.value);
  console.log(event.target.id);
  totalQua=document.getElementById('totalQua');
  totalValue=totalValue+Number(event.target.value )* Number(event.target.id);
  let totalYn=Math.round(totalValue*100)/100;
  totalQua.textContent=` Total:$ ${totalYn} `;




}




// storageUpdate();

function tableFooter(){
  let tfoot = document.getElementById('tfoot');
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td);
  // let tbody = document.getElementById('tbody');
  // let productRow = tbody.getElementsByClassName('tr');
  // let total = 0;
  // for (let i = 0; i < Product.allproduct.length; i++) {

  //   let tr= productRow[i];
  //   let priceElement=tr.getElementsByClassName('price');
  //   let quantityElement=tr.getElementsByClassName('quantity');
  //   let price=priceElement.value;
  //   let quantity=quantityElement.value;
  //   total=total+(price*quantity);
  // }
  td.textContent = 'Total: $0';
  td.setAttribute('id','totalQua');

}
tableFooter();


//render();
for (let i = 0; i < Product.allproduct.length; i++) {

  storageUpdate();
  // let arrString = JSON.stringify(Product.allProducts);

  // localStorage.setItem('product', arrString);
  Product.allproduct[i].render();


}


// function buttonClick(){
//   for (let i = 0; i < Product.allproduct.length; i++) {

//     let buttonRemove=document.getElementById(`btn${i}`);
//     buttonRemove.onclick =function (){
//       Product.allproduct.splice(i,1);
//       tbody.textContent='';
//      // render();
//      Product.allproduct[i].render();
//       buttonClick();
//     };
//   }
// }buttonClick();

let num=0;
document.addEventListener('DOMContentLoaded', function(){
  let stars = document.querySelectorAll('.star');
  stars.forEach(function(star){
    star.addEventListener('click', setRating);
  });

  let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
  let target = stars[rating - 1];
  // target.dispatchEvent(new MouseEvent('click'));
});
function setRating(ev){
  let span = ev.currentTarget;
  let stars = document.querySelectorAll('.star');
  let match = false;
  // let num = 0;
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
  console.log(num);
}



// we gona take the num for the local storage


// function Form(name,location,star) {

//   this.name=name;
//   this.location=location;
//   this.star=star;
//   Form.allForm.push(this);
// }
// Form.allForm=[];

// function submiter(event) {
//   if (event.target.id) {

//     item.push(Product.allProduct[event.target.id]);
//     localStorage.setItem('products',JSON.stringify(item));
//   }
//   console.log(item);

// }

// we gona take the num for the local storage
function storingRating() {
  localStorage.setItem('rating',JSON.stringify(Form.allForm));
}

let forms=[];
function Form(firstName,lastName,location,rating) {
  this.firstName=firstName;
  this.lastName=lastName;
  this.location=location;
  this.rating=num;
  // this.numOfStar=numOfStar;
  Form.allForm.push(this);
  console.log(this);
}
Form.allForm=[];
let checkout=document.getElementById('form');
checkout.addEventListener('submit', handlerSubmitter);
// let form = document.getElementById('form');
function handlerSubmitter(event){
  event.preventDefault();
  // Removing all items from the cart page once the checkout is clicked;
  tbody.textContent = ' ';
  localStorage.removeItem('products');
  // alert('Thank You for your purchase, Your rating will be in the home page');
  Swal.fire('Thank You for your purchase, Your rating will be in the home page');
  // Saving data;
  let name=event.target.firstname.value;
  let lastName=event.target.lastname.value;
  let location= event.target.country.value;

  totalQua.textContent = ' Total $0';



  new Form(name,lastName,location);
  console.log(Form.allForm);
  storingRating();
  // We need to get an id for our data;
  // if(event.target.id){
  //   forms.push(Form.allForm[event.target.id]);
  //   for(let i =0; i<Form.allForm.length; i++){
  //     new Form( Form.allForm[i].firstName , Form.allForm[i].lastName , Form.allForm[i].location);
  //   }
  // }
  let stars = document.querySelectorAll('.star');
  stars.forEach(function(star, index){

    star.classList.remove('rated');
  });

}
// handlersubmit ,  you should take the data from the form and pass them to the constructor and creat new Form object
// send the Form.allForm array to the local storage
//new Form ()

