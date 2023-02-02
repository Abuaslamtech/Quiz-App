var questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "London", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest ocean in the world?",
    choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
    correctAnswer: 1,
  },
  {
    question: "What is the father of computer?",
    choices: ["Charles Babbage", "Pascal", "Newton", "Charles Gabbage"],
    correctAnswer: 1,
  },
];

var currentQuestion = 0;
var score = 0;

// Display the current question
function displayQuestion() {
  var question = questions[currentQuestion];
  document.getElementById("question").textContent = question.question;
  var choices = document.getElementById("choices");
  choices.innerHTML = "";
  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "question" + currentQuestion;
    radio.value = i;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(choice));
    choices.appendChild(label);
  }
}

// Check the user's answer for the current question
function checkAnswer() {
  var radios = document.getElementsByName("question" + currentQuestion);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      if (radios[i].value == questions[currentQuestion].correctAnswer) {
        score++;
      }
      break;
    }
  }
}

// Show the final result
function showResult() {
  const res = document.getElementById("result");
  res.style.display = "flex";
  res.textContent = "You scored " + score + " out of " + questions.length;
}

// Next question
function nextQuestion() {
  checkAnswer();
  currentQuestion++;
  if (currentQuestion == questions.length) {
    showResult();
  } else {
    displayQuestion();
  }
}

// Event listener for submit button
document.getElementById("submit").addEventListener("click", nextQuestion);

// Show the first question
displayQuestion();
