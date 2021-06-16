const readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("Hey, What's your name? ");
console.log(chalk.bgBlue("Welcome "+ userName +" to do you know MEHTO"));

var score = 0;

var highScore = 5;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Yeah, It's right. "));
    score++;
  }
  else {
    console.log(chalk.red("No, It's wrong. "));
    score--;
  }

  console.log(chalk.bgCyan("Your current score: "+ score));
  console.log("-----------------------------")
}

var questions =[{
  question: "Where do I live? ",
  answer: "delhi"
},
{
  question: "From where did I complete my schooling? ",
  answer: "lawrence public school"
},
{
  question: "From where did I complete my graduation? ",
  answer: "delhi university"
},
{
  question: "which is my favourite sports? ",
  answer: "chess"
},
{
  question: "which is my favourite super hero? ",
  answer: "shaktiman"
}
];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("YAY! you scored "+ score);

if(score === highScore){
  console.log("Oh Yeah, you beat the high score congratulations.");
  console.log("You know me very well :)");
}
else {
  console.log("Isshhh, you didn't know me well.");
  console.log("But still we will be freinds :)");
}