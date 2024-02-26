const quizData = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Chennai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Punjab", correct: false },
            { text: "Rajasthan", correct: false }
        ]
    },
    {
        question: " Which is the largest coffee-producing state of India?",
        answers: [
            { text: "Kerala", correct: false },
            { text: "Tamil Nadu", correct: false},
            { text: "Karnataka", correct: true },
            { text: "Arunachal Pradesh", correct: false }
        ]
    },
    {
        question: " Which state has the largest population?",
        answers: [
            { text: "Uttar Pradesh", correct: true },
            { text: "Mahrashtra", correct: false},
            { text: "Bihar", correct: false },
            { text: "Andhra Pradesh", correct: false }
        ]
    },

    {
        question: " What is the staple drink of Goa?",
        answers: [
            { text: "Toddy", correct: false},
            { text: "Feni", correct: true},
            { text: "Thandai", correct: false },
            { text: "Sattu Sharbat", correct: false }
        ]
    },

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    resultElement.innerText = '';
}

function checkAnswer(correct) {
    if (correct) {
        setStatusClass(document.body, 'correct');
        resultElement.innerText = "Correct!";
        score++;
    } else {
        setStatusClass(document.body, 'wrong');
        resultElement.innerText = "Wrong!";
    }
}

function setStatusClass(element, status) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
    element.classList.add(status);
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    resultElement.innerText = `Your Score: ${score}/${quizData.length}`;
}

startQuiz();
