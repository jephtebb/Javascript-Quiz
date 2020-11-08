var quizScore = 0;
var questionTracker = 0;
var listId = 0;
var counter = 0;
var countDown = 60;
var correctAnswers = ['Fritay', 'Jeff', 'Ayahna', 'January', '2015', 'Soccer'];
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
        choices: ['2016', '2015', '2018', '2017'],
    },
    {
        questions: 'What sport do I watch the most?',
        choices: ['Football', 'Basketball', 'Soccer', 'Baseball'],
    }
]
function scoreDetails(){
    var highScores = document.createElement("h3");
    var allScores = document.createElement("input");
    var goBack = document.createElement("button");
    goBack.textContent = "Retake";
    var clearHighScores = document.createElement("button");
    clearHighScores.textContent = "Clear High Scores";
    highScores.className = "highScores";
    highScores.textContent = "High Scores: ";
    var multipleChoice = document.querySelector("#multipleChoice");
    multipleChoice.appendChild(highScores);
    multipleChoice.appendChild(allScores);
    multipleChoice.appendChild(goBack);
    multipleChoice.appendChild(clearHighScores);
    goBack.addEventListener("click", nextQuestion);
}
function scoreReport() {
    var message = 'You got ' + quizScore;
    message += ' out of ' + questionsAnswers.length;
    message += ' questions correct.';
    var multipleChoice = document.querySelector("#multipleChoice");
    var headerSummary = document.createElement("h2");
    var report = document.createElement("div");
    report.className = "reportData";
    headerSummary.textContent = "All Done!";
    mesaj = document.createElement("p");
    mesaj.textContent = message;
    var input = document.createElement("input");
    input.placeholder = "Enter your initials..";
    var buttonSubmit = document.createElement("button");
    buttonSubmit.className = "submitScore";
    buttonSubmit.setAttribute("type", "submit");
    buttonSubmit.textContent = "Submit";
    multipleChoice.appendChild(headerSummary);
    multipleChoice.appendChild(mesaj);
    report.appendChild(input);
    report.appendChild(buttonSubmit);
    multipleChoice.appendChild(report);
    buttonSubmit.addEventListener("click", scoreDetails);
}
function preparedQuestion() {
    timerStart();
    nextQuestion();
}

var nextQuestion = function() {

    var choicesList = document.createElement("ol");
    choicesList.className = "orderedList";
    var questionsHeader = document.createElement("h1");
    var multipleChoice = document.querySelector("#multipleChoice");
    var quests = questionsAnswers[questionTracker].questions;
    questionsHeader.textContent = quests;
    multipleChoice.appendChild(questionsHeader);
    for (var i = 0; i < Object.keys(questionsAnswers[questionTracker].choices).length; i++) {
        var listItem = document.createElement("li");
        listItem.className = "value";
        listItem.textContent = questionsAnswers[questionTracker].choices[i];
        listItem.setAttribute("data-list-id", listItem.textContent);
        listItem.setAttribute("id", "value" + counter);
        listItem.style.border = "1px solid #0000FF";
        listItem.style.padding = "10px 30px 10px 30px";
        listItem.style.width = "120px";
        listItem.style.backgroundColor = "lightslategray";
        listItem.style.marginBottom = "5px";
        choicesList.appendChild(listItem);
        multipleChoice.appendChild(choicesList);
        var targetId = "value" + counter;
        counter++;
    }
    var choiceId = document.querySelectorAll(".value");
    for (var i = 0; i < choiceId.length; i++) {
        var storeClass = document.getElementById(choiceId[i].id)
        storeClass.addEventListener("click", function (event) {

            var uniqueId = event.target.attributes.getNamedItem("data-list-id").value;
            var checkingAnswer = correctAnswers.includes(uniqueId);
            var checkAns = document.createElement("h4");
            checkAns.className = "checking";
            multipleChoice.appendChild(checkAns);
            if (checkingAnswer) {
                checkAns.textContent = "Correct!";
                quizScore++;
            }
            else {
                checkAns.textContent = "Wrong!";
                countDown -= 10;
            }
            questionsHeader.remove();
            choicesList.remove();
            //setTimeout(function(){ ; }, 3000);
            checkAns.remove();

            questionTracker++;

            if (questionTracker < questionsAnswers.length) {
                nextQuestion();
            } else {
                scoreReport();
            }
        });
    }
}

var timerStart = function() {
    var timer = setInterval(function () {
 
        if (countDown >= 0) {
            document.getElementById('timer').innerHTML = "Time: " + countDown;
            
            countDown--;
        }
            else {
                clearInterval(timer);
                alert("Oops Sorry! Reach the time limit");
            }        
    }, 1000);
}
var askQuestion = document.querySelector("#start");
askQuestion.addEventListener("click", preparedQuestion);








