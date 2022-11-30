
const APIGeography = "https://the-trivia-api.com/api/questions?categories=geography&limit=1&difficulty=easy";
const content = document.getElementById('content');
const questionTitle = document.getElementById('question-title');
const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');
const questionsContainer = document.querySelector('.questions-container');
const answer1Contaniner = document.getElementById('answerCont1');
const answer2Contaniner = document.getElementById('answerCont2');
const answer3Contaniner = document.getElementById('answerCont3');
const answer4Contaniner = document.getElementById('answerCont4');

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const questions = await fetchData(APIGeography);
        const answers = questions.map(question => [
            ...question.incorrectAnswers,
            question.correctAnswer
        ])
        .flat();
        const correctAnswer = questions.map(question => question.correctAnswer);
        let answerShuffled = answers.sort(() => Math.random()-0.5)

        questionTitle.innerText = questions[0].question;
        answer1.innerText = answerShuffled[0];
        answer2.innerText = answerShuffled[1];
        answer3.innerText = answerShuffled[2];
        answer4.innerText = answerShuffled[3];

        console.log(correctAnswer);

        answer1Contaniner.addEventListener('mousedown', function isCorrect(){
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
            } else {       
                answer1Contaniner.classList.toggle('incorrect');
                answer1Contaniner.insertAdjacentElement('beforeend', icon);
                icon.classList.add('incorrectLogo');

                if (correctAnswer == answerShuffled[1]) {
                    answer2Contaniner.classList.toggle('correct');
                    answer2Contaniner.insertAdjacentElement('beforeend', icon);
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
        })

        answer2Contaniner.addEventListener('mousedown', function isCorrect(){
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
        })

        answer3Contaniner.addEventListener('mousedown', function isCorrect(){
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
        })

        answer4Contaniner.addEventListener('mousedown', function isCorrect(){
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
        })

    } catch (error) {
        throw new Error(error)
    }
}
)();

