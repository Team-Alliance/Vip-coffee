
function Rating(name, rate, comment) {
  this.name = name;
  this.rate = Number(rate);
  this.starPath = `images/${rate}.png`;
  this.path = `images/${name}.jpg`;
  this.comment = comment;
  ratings.push(this);
  scores.push(rate);
  scoresCount[Number(rate) - 1] += 1;
}

let scoresCount = [0, 0, 0, 0, 0];
let ratings = [];
let scores = [];
new Rating('Khaled', 3, 'Easy to use, and definitely the best price in the market, and LOTS OF RESPECT!');
new Rating('Mohammed', 4, 'Such a great app, very reliable, nothing like other apps, a great way to meet new people and share daily rides with!');
new Rating('Omar', 5, 'I like this app, very easy in catching passenger locations, and I recommend everyone to use it, GOSHARE for life! :D');
new Rating('Ayat', 5, 'It is an awesome application, I had a hard time installing uber that wanted information about my facebook contacts, and it was so complicated. I really recommend using this app, you won\'t regret it!');
new Rating('Lana', 4, 'Easy to use, quick to see where there are available rides, great it shows the cost of the trip. Overall, I love using this app, and I recommend every single one to use it :) ');
let idCounter = 5;
let sectionEl = document.getElementById('ratings');
let existingLocalStorage = [];

function getFromLocalStorage() {
  existingLocalStorage = JSON.parse(localStorage.getItem('Rates')) || [];
  for (let i = 0; i < existingLocalStorage.length; i++) {
    let addedRating = new Rating(existingLocalStorage[i].name, existingLocalStorage[i].rate, existingLocalStorage[i].comment);
    for (let j = 0; j < ratings.length; j++) {
      if (ratings[j] === addedRating) {
        ratings[j].path = 'images/default.png';
      }
    }
  }
}


function saveToLocalStorage(rateStorage) {
  existingLocalStorage.push(rateStorage);
  localStorage.setItem('Rates', JSON.stringify(existingLocalStorage));
}

function render() {
  for (let i = 0; i < ratings.length; i++) {
    let tableEl = document.createElement('table');
    sectionEl.appendChild(tableEl);
    let legendEl = document.createElement('legend');
    tableEl.appendChild(legendEl);
    legendEl.textContent = ratings[i].name;
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    var imgEl = document.createElement('img');
    tdEl1.appendChild(imgEl);
    imgEl.src = ratings[i].path;
    imgEl.id = 'profileImg';
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    var imgEl2 = document.createElement('img');
    tdEl2.appendChild(imgEl2);
    imgEl2.src = ratings[i].starPath;
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.id = 'comment';
    tdEl3.textContent = ratings[i].comment;
  }
}
getFromLocalStorage();
render();

function getAvg(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + Number(scores[i]);
  }
  let avg = sum / scores.length;
  avg = (Math.round(avg * 100) / 100).toFixed(2);
  return avg;
}
var sectionEl2 = document.getElementById('formSection');
var formEl = document.createElement('form');
sectionEl2.appendChild(formEl);
function renderForm() {
  var labelEl = document.createElement('label');
  formEl.appendChild(labelEl);
  labelEl.textContent = 'Name';
  var inputEl = document.createElement('input');
  formEl.appendChild(inputEl);
  inputEl.type = 'text';
  inputEl.id = 'name';
  var labelEl2 = document.createElement('label');
  formEl.appendChild(labelEl2);
  labelEl2.textContent = 'Comment';
  labelEl2.id='commentLabel';
  labelEl2.for='commentText';
  let commentText = document.createElement('textarea');
  formEl.appendChild(commentText);
  commentText.id = 'commentText';
  commentText.name = 'commentText';
  commentText.rows = '3';
  commentText.cols = '50';
  var pEl = document.createElement('p');
  formEl.appendChild(pEl);
  pEl.id = 'stars';
  for (var i = 1; i < 6; i++) {
    var iEl = document.createElement('i');
    pEl.appendChild(iEl);
    iEl.id = idCounter;
    idCounter -= 1;
    iEl.className = 'star';
  }
}
renderForm();

let star1El = document.getElementById('1');
let star2El = document.getElementById('2');
let star3El = document.getElementById('3');
let star4El = document.getElementById('4');
let star5El = document.getElementById('5');

star1El.addEventListener('click', handleRating);
star2El.addEventListener('click', handleRating);
star3El.addEventListener('click', handleRating);
star4El.addEventListener('click', handleRating);
star5El.addEventListener('click', handleRating);

function handleRating(event) {
  event.preventDefault();
  let nameEl = document.getElementById('name');
  let name = nameEl.value;
  let commentEl = document.getElementById('commentText');
  let comment = commentEl.value;
  console.log(comment);
  let newRating = new Rating(name, Number(event.target.id), comment);
  let ratingIndex = ratings.indexOf(newRating);
  ratings.splice(ratingIndex, 1);
  newRating.path = 'img/default.png';
  ratings.push(newRating);
  saveToLocalStorage(newRating);
  sectionEl.innerHTML = '';
  render();
  let myCharEl = document.getElementById('myChart');
  myCharEl.innerHTML = '';
  let avgEl = document.getElementById('avg');
  avgEl.textContent = '';
  chart();
  showAvg();
  formEl.reset();
}
function chart() {
  var ctx = document.getElementById('myChart');

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
      datasets: [{
        label: '# of rates',
        data: scoresCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{

          ticks: {
            beginAtZero: true,
            fontSize: 30,
            fontColor: 'black',
            fontWeight: 'bold',
            defaultFontFamily: 'serif'
          }
        }],
        xAxes: [{

          ticks: {
            beginAtZero: true,
            fontSize: 30,
            fontColor: 'black',
            defaultFontFamily: 'serif'
          }
        }]
      }
    }
  });
}
function showAvg() {
  let sectionEl = document.getElementById('avg');
  sectionEl.textContent = getAvg(scores);
}

showAvg();
chart();



// function setDefaultImg(ratings) {
//   for (let i = 0; i < ratings.length; i++) {
//     ratings[i].path = '../img/default.png';
//   }
//   return (ratings);
// }
