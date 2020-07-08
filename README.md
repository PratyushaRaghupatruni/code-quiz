# code-quiz# quiz-js

Description
This application was built using Javascript, HTML5, CSS3, Bootstrap 4. A timer-based quiz application that stores high scores client-side.

Installation
Please visit the deployed project at: https://pratyusharaghupatruni.github.io/code-quiz/

Usage
Use this quiz to test your basic code knowledge. See the requirements below.

![alt text](https://github.com/PratyushaRaghupatruni/code-quiz/blob/master/assets/images/Screen%20Shot%202020-07-07%20at%2011.49.04%20PM.png)

Instructions
Play proceeds as follows:

The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (10 seconds are subtracted from time remaining).

When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.