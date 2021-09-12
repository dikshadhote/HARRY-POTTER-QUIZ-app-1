//read input feom user
var readlineSync=require('readline-sync');
console.log("--------------------------------");
console.log("Let's play quiz on HARRY POTTER");
console.log("---------------------------------");

var userName=readlineSync.question("\nWhat is your name ? ");
console.log("\nWelcome "+userName+" \nLets see..You can be POTTERHEAD or not? ")
//count score 
var countScore=0 

//check if user answer is valid or not
function checkAnswer(question,optionA,optionB,optionC,answer)
{
  console.log("\nselect ONE OPTION from A,B,C ");
  console.log(question+"\nA: "+optionA+"\nB: "+optionB+"\nC: "+optionC);
  
  
  var userAnswer=readlineSync.question("Your answer: ");
  if(userAnswer.toUpperCase()==answer.toUpperCase()) 
  {
    console.log("\nKudos to you!! ");
    countScore++;
    console.log("Current score: "+countScore);
  }
  else
    console.log("\nBetter luck next time..");

console.log("---------------------");

}


//store question and answer in array
var questionList=[
  {
    question : "\nWhat is real name of Harry Potter? ",
    optionA :"Peter Parker",
    optionB:"Daniel Radcliffe",
    optionC:"Rupert Grint",
    answer:"B"
  },
  {
    question : "\nWhat platform do you stand on to catch the train to Hogwarts? ",
    optionA :"platform 9",
    optionB:"platform 10",
    optionC:"platform 9 3/4",
    answer:"C"
  },
  {
    question : "\nWhat is name of Dumbledore's bird?  ",
    optionA:"Fawkes",
    optionB:"Phoenix",
    optionC:"Scabbers",
    answer:"A"
    },
    {
    question : "\nWhich type of insect is Ronald Weasley most afraid of?  ",
    optionA:"Beetles",
    optionB:"Spiders",
    optionC:"Ants",
    answer:"B"
    },
    {
    question : "\nWhich house is Harry Potter in at Hogwarts? ",
    optionA:"Gryffindor",
    optionB:"Slytherin",
    optionC:"Ravenclaw",
    answer:"A"
    }
   
]
//track of high score
var highScore=[{
  Name:"Diksha",
  score:5
},{
  Name:"Aniket",
  score:3
}]

//call function using each object of array
for(var i=0;i<questionList.length;i++)
{
  checkAnswer(questionList[i].question,questionList[i].optionA,questionList[i].optionB,questionList[i].optionC,questionList[i].answer);
}

//total score

console.log("\nHey..You SCORED  "+countScore);
console.log("---------------------");
//Name of high scorers
console.log("\nName of High scorer:\n ")
for(var i=0;i<highScore.length;i++)
{
  console.log("Name: "+highScore[i].Name+"\nscore: "+highScore[i].score);
}
console.log("---------------------");
console.log("Remember to send me screenshot if you beat the score..\n I will update your name in high scorer list...")