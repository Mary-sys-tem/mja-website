let currentQuestion = 0;
let score = 0;

const questions = [

    {
        question: "José Rizal was born on June 19, 1861, in Calamba, Laguna?",
        answer: "fact"
    },

    {
        question: "Rizal wrote Noli Me Tangere and El Filibusterismo?",
        answer: "fact"
    },

    {
        question: "Rizal was only a writer and did not have any other profession?",
        answer: "fiction"
    },

    {
        question: "Rizal spent his entire life in the Philippines and never traveled abroad?",
        answer: "fiction"
    },

    {
        question: "Rizal's writings helped promote awareness of social problems and Filipino nationalism?",
        answer: "fact"
    }

];


function loadQuestion() {

    document.getElementById("question").textContent =
        questions[currentQuestion].question;

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("result").textContent = "";

    document.getElementById("nextButton").style.display = "none";

    document.querySelectorAll(".answer-button").forEach(button => {

        button.disabled = false;
        button.style.opacity = "1";

    });
}


function checkAnswer(answer) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const result =
        document.getElementById("result");


    if (answer === correctAnswer) {

        score++;

        document.getElementById("score").textContent =
            score;

        result.textContent =
            "✓ Correct!";

        result.style.color =
            "#4CAF50";

    } else {

        result.textContent =
            "✗ Incorrect! The answer is " +
            correctAnswer.toUpperCase() + ".";

        result.style.color =
            "#ff5555";
    }


    document.querySelectorAll(".answer-button").forEach(button => {

        button.disabled = true;
        button.style.opacity = "0.5";

    });


    document.getElementById("nextButton").style.display =
        "block";
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showFinalScore();

    }
}


function showFinalScore() {

    document.querySelector(".question-box").innerHTML = `
        <p id="question">
            Game Complete!
            <br><br>
            You scored <strong>${score}</strong>
            out of ${questions.length}.
        </p>
    `;

    document.querySelector(".buttons").style.display =
        "none";

    document.querySelector(".question-number").style.display =
        "none";


    document.getElementById("result").textContent =
        getMessage();

    document.getElementById("result").style.color =
        "#d4af37";


    const nextButton =
        document.getElementById("nextButton");

    nextButton.textContent =
        "PLAY AGAIN";

    nextButton.style.display =
        "block";

    nextButton.onclick =
        restartGame;


    // SHOW HOME BUTTON ONLY AT FINAL SCORE
    document.querySelector(".home-button").style.display =
        "block";
}


function getMessage() {

    if (score === 5) {

        return "Excellent! You know your Rizal history!";

    } else if (score >= 4) {

        return "Great job! You know a lot about Jose Rizal!";

    } else if (score >= 3) {

        return "Good effort! Keep studying!";

    } else {

        return "Keep learning about Jose Rizal!";

    }
}


function restartGame() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("score").textContent =
        score;

    document.querySelector(".buttons").style.display =
        "flex";

    document.querySelector(".question-number").style.display =
        "block";


    // HIDE HOME BUTTON AGAIN
    document.querySelector(".home-button").style.display =
        "none";


    const nextButton =
        document.getElementById("nextButton");

    nextButton.textContent =
        "NEXT";

    nextButton.onclick =
        nextQuestion;


    // Restore question box
    document.querySelector(".question-box").innerHTML = `
        <p id="question"></p>
    `;

    loadQuestion();
}


loadQuestion();