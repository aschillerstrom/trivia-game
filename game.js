var currentQuestion = 0;
var score = 0;


var container = document.getElementById('quizContainer');
var questionDis = document.getElementById('question');
var resultsContainer = document.getElementById('results');

var optA = document.getElementById("opta");
var optB = document.getElementById("optb");
var optC = document.getElementById("optc");
var optD = document.getElementById("optd");
var nextButton = document.getElementById('nextButton');



var questions = [
    {   question:  "what is my name?",
            optionA: "amy",
            optionB: "mary",
            optionC: "sam",
            optionD: "marcus",
        answer: "a"
    },
    {   question:  "what is your name?",    
            optionA: "amy",
            optionB: "mary",
            optionC: "sam",
            optionD: "marcus",
        answer: "b"
    }
    
    ]
var totalQuestions = questions.length;

//make the quiz
function displayQuestion(questionsIndex){
    var q = questions[questionsIndex];
    console.log (q);
    questionDis.textContent = (questionsIndex +1) + ") " + q.question;
    console.log (questionDis);
    optA.textContent = q.optionA;
    //console.log (optA.textContent);
    optB.textContent = q.optionB;
    //console.log(optB.textContent);
    optC.textContent = q.optionC;
    optD.textContent = q.optionD;

};

function displayNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent= "finish"; 
    }
    if(currentQuestion == totalQuestions){
        container.style.display = "none";
        resultsContainer.style.display = "";
        resultsContainer.textContent = "Score: " + score + "%";
        console.log("score: "+score);
        return;
    }
displayQuestion(currentQuestion);
}
displayQuestion(currentQuestion);
//display results to user




