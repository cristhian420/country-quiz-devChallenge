
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
        const correctAnswer = questions.map(question => question.correctAnswer);
        console.log(answers)
        let answerShuffled = answers
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        console.log(answerShuffled)
        // const randomAnswerShow = Math.floor(Math.random() * answers.length); 
        // console.log(randomAnswerShow);
        questionTitle.innerText = questions[0].question;
        content.innerHTML = `
        <div class="answer font"><span class="letter-A">A</span><span id="answer-A" class="answer-A">${answerShuffled[0]}</span></div>
        <div class="answer font"><span class="letter-B">B</span><span id="answer-B" class="answer-B">${answerShuffled[1]}</span></div>
        <div class="answer font"><span class="letter-C">C</span><span id="answer-C" class="answer-C">${answerShuffled[2]}</span></div>
        <div class="answer font"><span class="letter-D">D</span><span id="answer-D" class="answer-D">${answerShuffled[3]}</span></div>
        `;
        console.log(correctAnswer)

    } catch {

    }
})();

answerA.addEventListener('click', comprobar)

function comprobar(){
    if(true){
        console.log('hola')
    }
}