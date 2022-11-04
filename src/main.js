
const APIGeography = "https://the-trivia-api.com/api/questions?categories=geography&limit=1&difficulty=easy";
const content = document.getElementById('content');
const questionTitle = document.getElementById('question-title');
const answerA = document.getElementById('answer-A');
const answerB = document.getElementById('answer-B');
const answerC = document.getElementById('answer-C');
const answerD = document.getElementById('answer-D');

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const questions = await fetchData(APIGeography);
        // console.log(questions)
        const answers = questions.map(question => [
            ...question.incorrectAnswers,
            question.correctAnswer
        ])
        .flat();
        const randomAnswerShow = Math.floor(Math.random() * answers.length); 
        console.log(randomAnswerShow)
        questionTitle.innerText = questions[0].question;
        answerA.innerText = answers[randomAnswerShow];
        // content.innerHTML = questions;
    } catch {

    }
})()
