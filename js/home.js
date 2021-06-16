



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
let result;
let parent=document.getElementById('show');
function getting() {
  let stringData=localStorage.getItem('rating');
  let data=JSON.parse(stringData);
  console.log(data);
  let name,lastName,location,rating;
  for (let i = 0; i < data.length; i++) {
    name=document.createElement('p');
    parent.appendChild(name);
    console.log(data[i]);
    name.textContent=data[i].firstName;

    // last
    lastName = document.createElement('p');
    parent.appendChild(lastName);
    lastName.textContent = data[i].lastName;
    // location
    location = document.createElement('p');
    parent.appendChild(location);
    location.textContent = data[i].location;
    // rating
    let div = document.createElement('div');
    parent.appendChild(div);

    for (let j = 1; j < 6; j++) {
      let star = document.createElement('i');
      if (j <= data[i].rating) {
        star.classList.add('fas');
      }
      else {
        star.classList.add('far');
      }
      star.classList.add('fa-star');
      star.style.color='orange';
      div.appendChild(star);

    }

    // for (let j = 0; j < data[i].rating; j++) {
    //   console.log(data[i].rating);
    //   // let div = document.createElement('span');
    //   // parent.appendChild(div);

    //   // let ratingEl;
    //   // ratingEl = document.createElement('p');
    //   // parent.appendChild(ratingEl);
    //   // ratingEl.textContent = data[i].rating;
    //   // // create the stars

    // }

    // if(data[i].rating === 1){
    //   let img=document.createElement('img');
    //   parent.appendChild(img);
    //   img.src = 'img/1.png';


    // }
    // else if(data[i].rating === 2){
    //   let img = document.createElement('img');
    //   parent.appendChild(img);
    //   img.src = 'img/2.png';


    // }
    // else if(data[i].rating === 3){
    //   let img = document.createElement('img');
    //   parent.appendChild(img);
    //   img.src = 'img/3.png';

    // }else if(data[i].rating === 4){
    //   let img = document.createElement('img');
    //   parent.appendChild(img);
    //   img.src = 'img/4.png';

    // }else{
    //   let img = document.createElement('img');
    //   parent.appendChild(img);
    //   img.src = 'img/5.png';

    // }
  }

}

getting();
