'use strict'


let quiz = document.getElementById('quiz');
let correct = 0;
quiz.addEventListener('submit', quizAnswers1);



function quizAnswers1(event) {
    
    event.preventDefault();
    
    for (let j = 0; j < 5; j++) {
        let questionNo= document.getElementsByName('answer' + ' ' + j);


        for (let i = 0; i < questionNo.length; i++) {
            let radio = questionNo[i];
            if (radio.value === 'right' && radio.checked) {
                correct++;
                console.log(correct);


            }

        }
       
    }
   
    promotions(correct);
}


function promotions(correct) {
    if (correct === 4) {

        alert("Congratulation, you have won 20% discount, your promo code is:  VIP20");

    }
    else if (correct === 3) {
        alert("Congratulation, you have won 15% discount, your promo code is:  VIP15 ");

    }
    else if (correct === 2) {
        alert("Congratulation, you have won 10% discount, your promo code is:  VIP10");

    }
    else if (correct === 1) {
        alert("Congratulation, you have won 5% discount, your promo code is:   VIP5");

    }
    else {
        alert("Unfortunately,try again later!");
    }


}      










// let correctAnswer1='';
// let correctAnswer2='';
// let correctAnswer3='';
// let correctAnswer4='';
// let question1=document.getElementById('question1');


// let question2=document.getElementById('question2');
// function quizAnswers2(event){
//     event.preventdefault();
//     let rightAnswer1='2021';
//     for(let i=0;i<radio.length;i++){
//     if(event.target.id===rightAnswer1){
//        correctAnswer2=rightAnswer1;

//     }
//     else{
//         correctAnswer2=`wrong answer`;

//     }
// }

// }

// let question3=document.getElementById('question3');
// function quizAnswers3(event){
//     event.preventdefault();
//     let rightAnswer1='25 years';


//     if(event.target.id===rightAnswer1){
//        correctAnswer3=rightAnswer1;

//     }
//     else{
//         correctAnswer3=`wrong answer`;

//     }


// }


// let question4=document.getElementById('question4');
// function quizAnswers4(event){
//     event.preventdefault();
//     let rightAnswer1='cups3';

//     if(event.target.id===rightAnswer1){
//        correctAnswer4=rightAnswer1;

//     }
//     else{
//         correctAnswer4=`wrong answer`;

//     }


// }

// let answers=document.getElementById('answers');





