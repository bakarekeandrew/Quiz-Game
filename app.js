const quizData =[
    {
        question: "How many planets in the Universe?🤷‍♂️",
        first: "There are 9",
        second: "There are 5",
        third: "There are 2",
        fourth: "There are 8",
        correct: "first"
    },
    {
        question: "Which programming language run on web browser?🤷‍♂️",
        first: "Python",
        second: "Java",
        third: "Javascript",
        fourth: "C",
        correct: "third"
    },
    {
        question: "Which programming language used for styling?🤷‍♂️",
        first: "HTML",
        second: "FIGMA",
        third: "UML",
        fourth: "CSS",
        correct: "fourth"
    },
    {
        question: "In which year javascript was invented?🤷‍♂️",
        first: "1995",
        second: "2000",
        third: "1970",
        fourth: "1954",
        correct: "first"   
    }
]

let currentQuestion = 0;
let score = 0;


const form = document.querySelector('form');
// const quizGame = document.querySelector('.quiz-game');
const inputAnswer = document.querySelectorAll('input');
const questionEl = document.querySelector('h3'); 
const submitBtn = document.querySelector('.submit-button');
const firstAnswer = document.querySelector('#first');
const secondAnswer = document.querySelector('#second');
const thirdAnswer = document.querySelector('#third');
const fourthAnswer = document.querySelector('#fourth');


document.addEventListener('DOMContentLoaded', function() {
    getQuestion();
});


const getQuestion = () => {

    

    const currentQuizQuesion = quizData[currentQuestion];
    questionEl.innerText = currentQuizQuesion.question;
    firstAnswer.innerText = currentQuizQuesion.first;
    secondAnswer.innerText = currentQuizQuesion.second;
    thirdAnswer.innerText = currentQuizQuesion.third;
    fourthAnswer.innerText = currentQuizQuesion.fourth;

}


const checkAnswer = () => {
    let answer;
    inputAnswer.forEach(answerSelected =>{
        if(answerSelected.checked === true){
            answer = answerSelected.value;
        }
    });
    return answer;
};

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    const answer= checkAnswer();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if (currentQuestion >= quizData.length) {
            inputAnswer.forEach(answerElement => {
                answerElement.style.display = 'none';
            });
            document.querySelectorAll('label').forEach(labelElement => {
                labelElement.style.display = 'none';
            });
            submitBtn.style.display = 'none';
        }
        
        if(currentQuestion >= 1){
           document.querySelector('.quiz-game').style.display = 'none';
            
        }
        
        if(currentQuestion < quizData.length){
           getQuestion();  
        }else{
            questionEl.innerHTML = `
              <h2>Your score is ${score}/${quizData.length}</h2>

              <button onClick="location.reload()">Reload</button>
            `
        }
    }
});
