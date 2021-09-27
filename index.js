var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question("What's your name ? ");
console.log("Welcome " + userName + " to STEVE JOBS QUIZ") 
var score = 0;
console.log("------------------------");
var highrScore = [{
name : "vishal",
score: 10
},
{
name : "abhishek",
score: 7
}
]

//play function 
function play(question,answer){
  var usernaswer = readlineSync.question(chalk.yellow(question + '\n'));
  if(usernaswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("right"));
    score = score +1;
  }
  else{
    console.log(chalk.red("wrong"));
  }
  console.log(chalk.blue("current score: " + score));
  console.log("------------------------");
}


var questions = [
  {
    question: "When was Steve Jobs born?\n1) April 30, 1939\n2) Oct 5, 1952\n3) Feb. 24, 1955",
    answer: "3"
  },
  {
    question: "How long did Jobs attend Reed College?\n1 two weeks\n2) one semester\n3) one year" ,
    answer: "2"
  },
  {
    question: "For which video-game manufacturer did Jobs start working soon after he left college?\n1) Nintendo\n2) Atari\n3) Activision" ,
    answer: "2"
  },
  {
    question: "What game did he work on?\n1) Breakout\n2) Pong\n3) Donkey Kong" ,
    answer: "1"
  },
  {
    question: "Who was Jobs' partner in founding Apple?\n1) John Sculley\n2) Bill Gates\n3) Steve Wozniak" ,
    answer: "3"
  },
  {
    question: "When did Jobs unveil the first Macintosh?\n1) Jan. 24, 1984\n2) April 10, 1985\n3) July 15, 1986" ,
    answer: "1"
  },
  {
    question: "What company did Jobs found after he left Apple?\n1) IBM\n2) NeXT\n3) Microsoft" ,
    answer: "2"
  },
  {
    question: "When did Jobs return to Apple?\n1) 1987\n2) 1991\n3) 1996" ,
    answer: "3"
  },
  {
    question: "Of which animation studio was Jobs CEO until 2006?\n1) Pixar\n2) DreamWorks\n3) Disney" ,
    answer: "1"
  },
  {
    question: "What was Job's signature outfit?\n1) white T-shirt, khakis and loafers\n2) black suit with a bowtie\n3) black turtleneck, jeans and sneakers" ,
    answer: "3"
  },
]


for(var i = 0 ; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.red("Yay!! you scored: " + score));
console.log("------------------------");
console.log("If you beat highest score send me screenshot");
console.log("------------------------");
console.log("check out the highest score: ")
console.log("--------------");
for(var i = 0; i<highrScore.length; i++){
  console.log(highrScore[i].name + ": " + highrScore[i].score);
}

