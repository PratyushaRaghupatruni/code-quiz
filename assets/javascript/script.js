var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choiceA: 'strings',
        choiceB: 'booleans',
        choiceC: 'alerts',
        ChoiceD: 'numbers',
        correct: 'C'
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choiceA: 'quotes',
        choiceB: 'curly brackets',
        choiceC: 'parentheses',
        choiceD: 'square brackets',
        correct: 'C'
    },
    {
        title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choiceA: 'last( )',
        choiceB: 'put( )',
        choiceC: 'push( )',
        choiceD: 'pop( )',
        correct: 'C'
    },
    {
        title: " Which built-in method returns the characters in a string beginning at the specified location?",
        choiceA: 'substr( )',
        choiceB: 'getSubstring( )',
        choiceC: 'slice( )',
        choiceD: 'None',
        correct: 'A'
    },
    {
        title: "Which of the following function of an array object adds and/or removes elements from an array?",
        choiceA: 'toSource( )',
        choiceB: 'sort( )',
        choiceC: 'unshift( )',
        choiceD: 'splice( )',
        correct: 'D',
    },
];

//declaring all the ID's from the html page
var timeEl = document.getElementById("time");
var questionbodyEl = document.getElementById("questionsbody");
var submitpageEl = document.getElementById("submitpage");
var displayhighscoreEl = document.getElementById("displayhighscore");
var initialEl = document.getElementById("name");
var scoresEl = document.getElementById("scores");
var msgDiv = document.querySelector("#msg");
var lastInitialEl = document.querySelector("#lastInitial");
var lastHighscoreEl = document.querySelector("#lastHighscore");
var list = document.getElementById("list");
var questionsEl = document.getElementById("question");
var choiceAEl = document.getElementById("A");
var choiceBEl = document.getElementById("B");
var choiceCEl = document.getElementById("C");
var choiceDEl = document.getElementById("D");

//declaring the variables
var score = 0;
var timer;
var currentQuestion = -1;
var timeLeft = 75;

//function to start the quiz
function startQuiz() {

    //maximum timelimit for the quiz
    timeLeft = 75;
    document.getElementById("time").innerHTML = timeLeft;
    timer = setInterval(function () {
        timeLeft--;
        //to display the time on webpage
        timeEl.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            //function to clear the time interval
            clearInterval(timeLeft);
            timeEl.innerHTML = "expired!";
            //  goto endgame function if the time =0
            endGame();
        }
    }, 1000);
    //goto the question display function
    renderQuestion();
}


//function to enter the initials after the quiz is over

function endGame() {
    //clearing the time interval 
    clearInterval(timer);
    //to dispaly the submit page to enter the initials

    submitpageEl.setAttribute("style", "display:flex;justify-content:center;align-items:center;");
    questionbodyEl.style.display = 'none';
    displayhighscoreEl.style.display = 'none';
    start.style.display = 'none';
    //to display the scores onto the webpage
    scoresEl.innerHTML = score;

}
function dispalyMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

//function to store the values in local storage
function setscore() {
    console.log(initialEl.value);
    //assigning oblects to store the values in the localstorage
    var userData = {
        userInitials: initialEl.value,
        userScore: scoresEl.innerText,
    }
    if (initialEl.value !== "") {
        localStorage.setItem("user", JSON.stringify(userData));
        getscore();
        console.log(initialEl.value);
    }
    else if (initialEl.value === "") {
        dispalyMessage("error", "initials cannot be empty");
    }

}


function getscore() {
    submitpageEl.style.display = 'none';
    displayhighscoreEl.style.display = 'flex';
    displayhighscoreEl.setAttribute("style", "display:flex;justify-content:center;align-items:center;");
    start.style.display = 'none';
    questionbodyEl.style.display = 'none';
    msgDiv.textContent='';

    var lastUser = JSON.parse(localStorage.getItem("user"));

    //getting the user Initials and userscore on the page
    lastInitialEl.textContent = lastUser.userInitials;
    lastHighscoreEl.textContent = lastUser.userScore;
}

//function to reset the score
function clearScore() {
    //clearing the local storage
    localStorage.setItem("user", JSON.stringify(""));
    //goto startpage again
    tryagain();
}

//function to go to homepage again
function tryagain() {
    //clearing the time interval
    clearInterval(timer);
    score = 0;
    console.log(score);
    timeLeft = 75;
    currentQuestion = -1;
    timer = null;
    //displaying the timer on the page
    document.getElementById("time").innerHTML = timer;
    displayhighscoreEl.style.display = 'none';
    start.setAttribute("style", "display:flex;justify-content:center;align-items:center;");
    questionbodyEl.style.display = 'none';
    submitpageEl.style.display = 'none';
}

//function for generating questions
function renderQuestion() {
    start.style.display = 'none';
    questionbodyEl.setAttribute("style", "display:flex;justify-content:center;align-items:center;");
    displayhighscoreEl.style.display = 'none';
    submitpageEl.style.display = 'none';
    //if questions.length is morethan the question length goto endgame function
    currentQuestion++;
    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }
    //displaying questions
    if (currentQuestion < questions.length) {
        questionsEl.innerHTML = "<p>" + questions[currentQuestion].title + "</p>";
        choiceAEl.innerHTML = questions[currentQuestion].choiceA;
        choiceBEl.innerHTML = questions[currentQuestion].choiceB;
        choiceCEl.innerHTML = questions[currentQuestion].choiceC;
        choiceDEl.innerHTML = questions[currentQuestion].choiceD;
    }
}
//function to check the answer and add the score if it is correct and reduce the time if it is wrong
function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        score = score + 20;
    }
    else {
        timeLeft = timeLeft - 15;
    }
    //goto question function
    renderQuestion();
}