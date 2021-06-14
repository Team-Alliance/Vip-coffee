'use strict';
// let quiz = document.getElementById('quiz');
// let correct = 0;
// quiz.addEventListener('submit', quizAnswers1);

// function quizAnswers1(event) {
//   event.preventDefault();

//   for (let j = 0; j < 5; j++) {
//     let questionNo = document.getElementsByName('answer' + ' ' + j);

//     for (let i = 0; i < questionNo.length; i++) {
//       let radio = questionNo[i];
//       if (radio.value === 'right' && radio.checked) {
//         correct++;
//         console.log(correct);
//       }
//     }
//   }

//   promotions(correct);
// }
// function promotions(correct) {
//   if (correct === 4) {
//     alert('Congratulation, you have won 20% discount, your promo code is:  VIP20');
//   }
//   else if (correct === 3) {
//     alert('Congratulation, you have won 15% discount, your promo code is:  VIP15 ');
//   }
//   else if (correct === 2) {
//     alert('Congratulation, you have won 10% discount, your promo code is:  VIP10');
//   }
//   else if (correct === 1) {
//     alert('Congratulation, you have won 5% discount, your promo code is:   VIP5');
//   }
//   else {
//     alert('Unfortunately,try again later!');
//   }
// }
// quiz.addEventListener('click', Render);

// function Render(event) {

//   for (let i = 0; i < 5; i++) {
//     document.getElementById('question' + i).style.display = 'none';
//   }

// }


let questions = [{
  question: 'where do we make our coffee beans ?',
  choices: ['Jordan', 'Brazil', 'USA', 'Italy'],
  correctAnswer: 1
}, {
  question: 'when did we open our first location ?',
  choices: [2002, 1992, 1997, 2021],
  correctAnswer: 3
}, {
  question: 'How long will a coffee plant typically produce coffee if it is well cared for ?',
  choices: ['More than 25 years', 'More than 10 years', 'More than 15 years', 'More than 17 years'],
  correctAnswer: 0
}, {
  question: 'How many cups of coffee are consumed each year in the world ?',
  choices: ['900 million', '2 billion', ' 400 billion', ' 112.5 billion'],
  correctAnswer: 2
},];

let questionCounter = 0; //Tracks question number
let selections = []; //Array containing user choices
let quiz = document.getElementById('quiz'); //Quiz div object

// Display initial question
displayNext();

// Click handler for the 'next' button
let next = document.getElementById('next');
next.addEventListener('click', function (e) {
  e.preventDefault();

  // Suspend click listener during fade animation
  if (quiz.is(':animated')) {
    return false;
  }
  choose();

  // If no user selection, progress is stopped
  if (isNaN(selections[questionCounter])) {
    alert('Please make a selection!');
  } else {
    questionCounter++;
    displayNext();
  }
});

// Click handler for the 'prev' button
let prev = document.getElementById('prev');
prev.addEventListener('click', function (e) {
  e.preventDefault();

  if (quiz.is(':animated')) {
    return false;
  }
  choose();
  questionCounter--;
  displayNext();
});

// Click handler for the 'Start Over' button

let start = document.getElementById('start');
start.addEventListener('click', function (e) {
  e.preventDefault();

  if (quiz.is(':animated')) {
    return false;
  }
  questionCounter = 0;
  selections = [];
  displayNext();
  start.style.display = 'none';
  // $('#start').hide();
});


// Animates buttons on hover
let button = document.getElementsByClassName('button');
button[0].addEventListener('mouseenter', function () {
  button[0].classList.add('class', 'active');
});

button[0].addEventListener('mouseleave', function () {
  button[0].classList.remove('active');
});

// Creates and returns the div that contains the questions and
// the answer selections
function createQuestionElement(index) {

  let qElement = document.createElement('div');
  qElement.setAttribute('id', 'question');

  let header = document.createElement('h2');
  header.textContent = `Question  ${index + 1}  :`;

  qElement.appendChild(header);

  let pTag = document.createElement('p');

  pTag.textContent = questions[index].question;

  qElement.appendChild(pTag);

  let radioButtons = createRadios(index);
  qElement.append(radioButtons);

  return qElement;
}

// Creates a list of the answer choices as radio inputs
function createRadios(index) {
  // let radioList = $('<ul>');
  let radioList = document.createElement('ul');
  let item;
  let input = '';
  for (let i = 0; i < questions[index].choices.length; i++) {
    // item = $('<li>');
    item = document.createElement('li');
    input = '<input type="radio" name="answer" value=' + i + ' />';
    input += questions[index].choices[i];
    item.appendChild(input);
    radioList.appendChild(item);
  }
  return radioList;
}

// Reads the user selection and pushes the value to an array
function choose() {
  let radio = document.getElementsByName('answer');
  if (radio.checked) {
    selections[questionCounter] = +radio.value;
  }
  // selections[questionCounter] = +$('input[na\me="answer"]:checked').val();
}


// Displays next requested element
function displayNext() {
  //TODO instead of quiz.fadeOut =>>>>  quiz.style.display='none';

  //   quiz.fadeOut(function() { });
  quiz.style.display = 'none';

  //TODO get elementById then remove element
  document.getElementById('question').remove();
  //let input = document.getElementsByName('answer');
  if (questionCounter < questions.length) {
    let nextQuestion = createQuestionElement(questionCounter);
    //TODO fadeIn =>>>> style.display='block'
    quiz.appendChild(nextQuestion).style.display = 'block';

    if (!(isNaN(selections[questionCounter]))) {
      // TODO get input and make the input checked
        $('input[value='+selections[questionCounter]+']').prop('checked', true);


    }

    // Controls display of 'prev' button
    if (questionCounter === 1) {
      // TODO get prev and disp;ay block
      document.getElementById('prev').style.display = 'block';
    } else if (questionCounter === 0) {
      // TODO get next and prev and display none and block
      // $('#prev').hide();
      document.getElementById('prev').style.display = 'none';
      // $('#next').show();
      document.getElementById('next').style.display = 'block';
    }
  } else {
    let scoreElem = displayScore();
    quiz.appendChild(scoreElem);
    // TODO get next and prev and start and display none and block

    //   $('#next').hide();
    document.getElementById('next').style.display = 'none';
    //   $('#prev').hide();
    document.getElementById('prev').style.display = 'none';
    //   $('#start').show();
    document.getElementById('next').style.display = 'block';
  }

}

// Computes score and returns a paragraph element to be displayed
function displayScore() {
  // let score = $('<p>',{id: 'question'});

  let score = document.createElement('p');
  score.setAttribute('id', 'question');

  let numCorrect = 0;
  for (let i = 0; i < selections.length; i++) {
    if (selections[i] === questions[i].correctAnswer) {
      numCorrect++;
    }
  }

  score.textContent = 'You got ' + numCorrect + ' questions out of ' +
        questions.length + ' right!!!';

  return score;
}

