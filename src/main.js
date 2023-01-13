
const API_TRIVIA = "https://the-trivia-api.com/api/questions?categories=geography&limit=1&difficulty=easy";

const content = document.getElementById('content');
const questionTitle = document.getElementById('question-title');

const questionsContainer = document.querySelector('.questions-container');
const answer2Contaniner = document.getElementById('answerCont2');
const answer3Contaniner = document.getElementById('answerCont3');
const answer4Contaniner = document.getElementById('answerCont4');
const scoreApp = document.getElementById('score')

let currentQuestion = [];
let score = 0;

const fetchData = async () => {
    const res = await fetch(API_TRIVIA);
    const data = await res.json();
    return data;
}

const showQuestion = async () => {
    const quiz = await fetchData();
    const answers = quiz.map(element => [
        ...element.incorrectAnswers,
        element.correctAnswer
    ])
    .flat()
    .sort(() => Math.random()-0.5);
    const correctAnswer = quiz[0].correctAnswer;
    const indexCorrectAnswer = answers.indexOf(correctAnswer);
    questionTitle.innerText = quiz[0].question;

    for (let i = 0; i < answers.length; i++) {
        const container = document.createElement('div');
        container.classList.add('answer', 'font');
        container.id = 'answerCont-' + [i];
        const number = document.createElement('span');
        number.classList.add('number-' + [i]);
        number.innerText = [i+1];
        const answerText = document.createElement('span');
        answerText.id = 'answer-' + [i];
        answerText.innerText = answers[i];
        container.appendChild(number);
        container.appendChild(answerText);
        // container.onclick = checkAnswers();
        content.appendChild(container);
    }
    questionsContainer.addEventListener('click', function(event) {
        let texto = event.target.innerText;
        console.log(texto);
        const container = `answerCont-${indexCorrectAnswer}`;
        const containerCorrect = document.getElementById(container);
        const currentAnswer = document.getElementById(event.target.id)


        if (texto.includes(correctAnswer) || texto.includes(indexCorrectAnswer+1)) {
            containerCorrect.classList.add('correct');
            score ++;

            questionsContainer.style.height = '559px';
            const btn = document.createElement('button');
            btn.innerText = 'Next'
            btn.classList.add('nextButton', 'font');
            questionsContainer.insertAdjacentElement('beforeend', btn);
            const icon = document.createElement('span');
            icon.classList.add('correctLogo')
            // scoreApp.innerText = score;
            // btn.onclick = showQuestion();
        } else {
            currentAnswer.classList.add('incorrect')
            containerCorrect.classList.add('correct')
        }
    })
}



const checkAnswers = async (answer) => {
    const data = await fetchData();
    const correctAnswer = data[0].correctAnswer;
    questionsContainer.addEventListener('click', function(event) {
        console.log(event);
        if (event.target.innerText === correctAnswer ) {
            console.log(event.path[0].classList.add('correct'));
        }
    })
}




(async () => {
    try{
        showQuestion();
            const checkAnswer1 = () => {
                questionsContainer.style.height = '559px';
                const btn = document.createElement('button');
                btn.innerText = 'Next'
                btn.classList.add('nextButton', 'font');
                questionsContainer.insertAdjacentElement('beforeend', btn);
                const icon = document.createElement('span');
            
                if(correctAnswer == answerShuffled[0]) {
                    answer1Contaniner.classList.toggle('correct');
                    answer1Contaniner.classList.remove('answer');
                    answer1Contaniner.classList.add('answerNoHover');
                    icon.classList.add('correctLogo');
                    answer1Contaniner.insertAdjacentElement('beforeend', icon);
                    score++;
                } else {       
                    answer1Contaniner.classList.toggle('incorrect');
                    answer1Contaniner.insertAdjacentElement('beforeend', icon);
                    icon.classList.add('incorrectLogo');
            
                    if (correctAnswer == answerShuffled[1]) {
                        answer2Contaniner.classList.toggle('correct');
                        answer2Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                        score++;
                    } else if (correctAnswer == answerShuffled[2]) {
                        answer3Contaniner.classList.toggle('correct');
                        answer3Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                        score++;
                    } else if (correctAnswer == answerShuffled[3]) {
                        answer4Contaniner.classList.toggle('correct');
                        answer4Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                        score++;
                    }
                }
                answer1Contaniner.classList.remove('answer');
                answer1Contaniner.classList.add('answerNoHover');
                answer2Contaniner.classList.remove('answer');
                answer2Contaniner.classList.add('answerNoHover');
                answer3Contaniner.classList.remove('answer');
                answer3Contaniner.classList.add('answerNoHover');
                answer4Contaniner.classList.remove('answer');
                answer4Contaniner.classList.add('answerNoHover');
            }
            
            const checkAnswer2 = () => {
                questionsContainer.style.height = '559px';
                const btn = document.createElement('button');
                btn.innerText = 'Next'
                btn.classList.add('nextButton', 'font');
                questionsContainer.insertAdjacentElement('beforeend', btn);
                const icon = document.createElement('span');
            
                if(correctAnswer == answerShuffled[1]) {
                    answer2Contaniner.classList.toggle('correct');
                    icon.classList.add('correctLogo');
                    answer2Contaniner.insertAdjacentElement('beforeend', icon);
                } else {           
                    answer2Contaniner.classList.toggle('incorrect');
                    answer2Contaniner.insertAdjacentElement('beforeend', icon);
                    icon.classList.add('incorrectLogo');
            
                    if (correctAnswer == answerShuffled[0]) {
                        answer1Contaniner.classList.toggle('correct');
                        answer1Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    } else if (correctAnswer == answerShuffled[2]) {
                        answer3Contaniner.classList.toggle('correct');
                        answer3Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    } else if (correctAnswer == answerShuffled[3]) {
                        answer4Contaniner.classList.toggle('correct');
                        answer4Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    }
                }
                answer1Contaniner.classList.remove('answer');
                answer1Contaniner.classList.add('answerNoHover');
                answer2Contaniner.classList.remove('answer');
                answer2Contaniner.classList.add('answerNoHover');
                answer3Contaniner.classList.remove('answer');
                answer3Contaniner.classList.add('answerNoHover');
                answer4Contaniner.classList.remove('answer');
                answer4Contaniner.classList.add('answerNoHover');
            }
            
            const checkAnswer3 = () => {
                questionsContainer.style.height = '559px';
                const btn = document.createElement('button');
                btn.innerText = 'Next'
                btn.classList.add('nextButton', 'font');
                questionsContainer.insertAdjacentElement('beforeend', btn);
                const icon = document.createElement('span');
            
                if(correctAnswer == answerShuffled[2]) {
                    answer3Contaniner.classList.toggle('correct');
                    icon.classList.add('correctLogo');
                    answer3Contaniner.insertAdjacentElement('beforeend', icon);
                } else {
                    answer3Contaniner.classList.toggle('incorrect');
                    answer3Contaniner.insertAdjacentElement('beforeend', icon);
                    icon.classList.add('incorrectLogo');
            
                    if (correctAnswer == answerShuffled[1]) {
                        answer2Contaniner.classList.toggle('correct');
                        answer2Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    } else if (correctAnswer == answerShuffled[0]) {
                        answer1Contaniner.classList.toggle('correct');
                        answer1Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    } else if (correctAnswer == answerShuffled[3]) {
                        answer4Contaniner.classList.toggle('correct');
                        answer4Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    }
                }
                answer1Contaniner.classList.remove('answer');
                answer1Contaniner.classList.add('answerNoHover');
                answer2Contaniner.classList.remove('answer');
                answer2Contaniner.classList.add('answerNoHover');
                answer3Contaniner.classList.remove('answer');
                answer3Contaniner.classList.add('answerNoHover');
                answer4Contaniner.classList.remove('answer');
                answer4Contaniner.classList.add('answerNoHover');
            }
            
            const checkAnswer4 = () => {
                questionsContainer.style.height = '559px';
                const btn = document.createElement('button');
                btn.innerText = 'Next'
                btn.classList.add('nextButton', 'font');
                questionsContainer.insertAdjacentElement('beforeend', btn);
                const icon = document.createElement('span');
            
                if(correctAnswer == answerShuffled[3]) {
                    answer4Contaniner.classList.toggle('correct');
                    icon.classList.add('correctLogo');
                    answer4Contaniner.insertAdjacentElement('beforeend', icon);
                } else {
                    answer4Contaniner.classList.toggle('incorrect');
                    answer4Contaniner.insertAdjacentElement('beforeend', icon);
                    icon.classList.add('incorrectLogo');
            
                    if (correctAnswer == answerShuffled[1]) {
                        answer2Contaniner.classList.toggle('correct');
                        answer2Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    } else if (correctAnswer == answerShuffled[0]) {
                        answer1Contaniner.classList.toggle('correct');
                        answer1Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    } else if (correctAnswer == answerShuffled[2]) {
                        answer3Contaniner.classList.toggle('correct');
                        answer3Contaniner.insertAdjacentElement('beforeend', icon);
                        icon.classList.add('correctLogo');
                    }
                }
                answer1Contaniner.classList.remove('answer');
                answer1Contaniner.classList.add('answerNoHover');
                answer2Contaniner.classList.remove('answer');
                answer2Contaniner.classList.add('answerNoHover');
                answer3Contaniner.classList.remove('answer');
                answer3Contaniner.classList.add('answerNoHover');
                answer4Contaniner.classList.remove('answer');
                answer4Contaniner.classList.add('answerNoHover');
            }
            // questionsContainer.addEventListener('click', (event) => {
            //     if(event.target.id === 'answerCont1') checkAnswer1()
            //     if(event.target.id === 'answerCont2') checkAnswer2()
            //     if(event.target.id === 'answerCont3') checkAnswer3()
            //     if(event.target.id === 'answerCont4') checkAnswer4()
            // })

        
    } catch (error) {
        new Error(error)
    } 

}
)();

