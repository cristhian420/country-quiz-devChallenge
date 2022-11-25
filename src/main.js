
const APIGeography = "https://the-trivia-api.com/api/questions?categories=geography&limit=1&difficulty=easy";
const content = document.getElementById('content');
const questionTitle = document.getElementById('question-title');
const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');
const answer1Contaniner = document.getElementById('a1');
const questionsContainer = document.querySelector('.questions-container');



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
            questionsContainer.insertAdjacentElement('beforeend', btn);
            btn.classList.add('nextButton');
            const icon = document.createElement('span');
            answer1Contaniner.insertAdjacentElement('beforeend', icon);


            if(correctAnswer == answerShuffled[0]) {
                answer1Contaniner.classList.add('correct');
                icon.classList.add('correctLogo');
            } else {
                answer1Contaniner.classList.add('incorrect');
                icon.classList.add('incorrectLogo');
                answerShuffled.forEach(element => {
                    if(correctAnswer == element){
                        element.classList.add('correct');
                    }
                });
                console.log(indx);
            }

        })

      


    } catch (error) {
        throw new Error(error)
    }
}


)();

