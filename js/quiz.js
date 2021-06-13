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


quiz.addEventListener('click',Render)

function Render(event){
    
for(let i=0;i<5;i++){
    document.getElementById('question'+i).style.display = "none";
}
   
}

