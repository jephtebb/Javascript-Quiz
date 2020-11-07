var quizScore = 0;
var questionTracker = 0;
var listId = 0;
var questionsAnswers = [
    {
        questions: 'What is my favorite food?',
        choices: ['Pizza', 'Rice', 'Pasta', 'Fritay'],
    },

    {
        questions: 'What is my nickname?',
        choices: ['Jeff', 'Alix', 'Jephte', 'Jean'],
    },
    {
        questions: 'What is my daughter name?',
        choices: ['Alise', 'Sophonie', 'Daphney', 'Ayahna'],
    },
    {
        questions: 'What month was my daughter born?',
        choices: ['January', 'March', 'August', 'July'],
    },
    {
        questions: 'What year did I gradute with my bachelor',
        choices: ['2016','2015','2018', '2017'],
    },
    {
        questions: 'What sport do I watch the most?',
        choices: ['Football', 'Basketball','Soccer', 'Baseball'],
    }
]
// var choicesList = document.createElement("ol");
//  var questionsHeader = document.createElement("h1");
// var multipleChoice = document.querySelector("#multipleChoice")
function preparedQuestion(){
    var choicesList = document.createElement("ol");
    var questionsHeader = document.createElement("h1");
    var multipleChoice = document.querySelector("#multipleChoice");
    var quests = questionsAnswers[questionTracker].questions;
    questionsHeader.textContent = quests;
    multipleChoice.appendChild(questionsHeader);
    for (var i =0; i<Object.keys(questionsAnswers[questionTracker].choices).length; i++){
        var listItem = document.createElement("li");
        choicesList.appendChild(listItem);
        listItem.textContent = questionsAnswers[questionTracker].choices[i];
        listItem.setAttribute("data-list-id", listId);
        listItem.style.border = "1px solid #0000FF";
        listItem.style.padding = "10px 30px 10px 30px";
        listItem.style.width = "120px";
        listItem.style.backgroundColor = "lightslategray";
        listItem.style.marginBottom = "5px";
        multipleChoice.appendChild(listItem);
        listId++;
   }
}
var askQuestion = document.querySelector("#start");
askQuestion.addEventListener("click", preparedQuestion);


var userChoice = document.querySelector("#multipleChoice");
userChoice.addEventListener("click", function(listId){
    var uniqueId = userChoice.getAttribute("data-list-id");
    if (uniqueId === listId){
        alert("Correct!");
        quizScore++;
    }
    else{
        alert("Wrong!");
    }
    questionTracker++;
   // userChoice.remove();
    preparedQuestion();
});

