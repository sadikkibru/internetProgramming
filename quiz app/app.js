// Define quiz questions
var quizQuestions = [
 {
  question: "What is the capital of France?",
  choices: ["Paris", "Marseille", "Lyon", "Toulouse"],
  answer: 0
 },
 {
  question: "What is the largest planet in our solar system?",
  choices: ["Earth", "Mars", "Jupiter", "Venus"],
  answer: 2
 },
 {
  question: "What is the smallest country in the world?",
  choices: ["Italy", "Spain", "Vatican City", "Monaco"],
  answer: 2
 },
 {
  question: "Which is the longest river in the world?",
  choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
  answer: 0
 },
 {
    question: " What are the types of unordered or bulleted list in HTML?",
    choices: ["disc, square, triangle", "polygon, triangle, circle", "disc, circle, square", "disc, circle, squareus"],
    answer: 2
   },
 {
    question: "Which of the following element is responsible for making the text italic in HTML?",
    choices: ["<i>", "<italic>", "<it>", "<pre>"],
    answer: 0
   },
 {
  question: "What is the only continent on earth where giraffes can't be found in the wild?",
  choices: ["Africa", "Asia", "Europe", "Australia"],
  answer: 2
 }
];

// Define variables
var currentQuestion = 0;
var score = 0;
var totalQuestions = quizQuestions.length;
var time = 30;
var timer;
var correctAnswers = [];

// Start quiz function
function startQuiz() {
 document.getElementById("welcome").style.display = "none";
 document.getElementById("quiz").style.display = "block";
 showQuestion();
 startTimer();
}

// Show question function
function showQuestion(){
    var question = quizQuestions[currentQuestion];
 document.getElementById("question").innerHTML = question.question;
 document.getElementById("choice0").innerHTML = question.choices[0];
 document.getElementById("choice1").innerHTML = question.choices[1];
 document.getElementById("choice2").innerHTML = question.choices[2];
 document.getElementById("choice3").innerHTML = question.choices[3];
 document.getElementById("current-question").innerHTML = currentQuestion + 1;
 document.getElementById("total-questions").innerHTML = totalQuestions;
}
// Check answer function
function checkAnswer(choice) {
    var question = quizQuestions[currentQuestion];
    if (choice == question.answer) {
     score++;
     correctAnswers.push(true);
    } else {
     correctAnswers.push(false);
    }
    currentQuestion++;
    if (currentQuestion >= totalQuestions) {
     clearInterval(timer);
     showResults();
    } else {
     showQuestion();
    }
   }
   
   // Start timer function
   function startTimer() {
    timer = setInterval(function() {
     time--;
     document.getElementById("time").innerHTML = time;
     if (time <= 0) {
      clearInterval(timer);
      showResults();
     }
    }, 1000);
   }
// Show results function
function showResults() {
    var numCorrect = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
     if (correctAnswers[i]) {
      numCorrect++;
     }
    }
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("total-correct").innerHTML = numCorrect;
    document.getElementById("num-questions").innerHTML = totalQuestions;
   }
   
   // Restart quiz function
   function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    time = 15;
    correctAnswers = [];
    document.getElementById("results").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
    startTimer();
   
}
    
