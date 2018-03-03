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

var gameImages =[

]

var questions = [
    {   question: "Name a bad job for someone who is accident prone",
            optionA: "police officer",
            optionB: "driver",
            optionC: "surgeon",
            optionD: "construction",
        answer: "a"
    },
    {    question: "Name a garment you'd probably find in the sressing room at a pro-wrestling event", 
            optionA: "mask",
            optionB: "tights",
            optionC: "cape",
            optionD: "leotard",
        answer: "b"
    },
    {   question: "Name a place you visit where you are not allowed to touch anything",
            optionA: "gentleman's club",
            optionB: "museum",
            optionC: "zoo",
            optionD: "china shop",
        answer: "b"
    },
    {   question: "Name something a witch may hit with her broom if she's not careful",
            optionA: "power line",
            optionB: "plane",
            optionC: "tree",
            optionD: "building",
        answer: "c"
    },
    {   question: "Name a piece of clothing you buy without trying on",
            optionA: "socks",
            optionB: "scarf",
            optionC: "shirt",
            optionD: "underwear",
        answer: "d"
    },
    {   question: "Name something you don't wash as often as you should",
            optionA: "hands",
            optionB: "sheets",
            optionC: "hair",
            optionD: "feet",
        answer: "b"
    },
    {   question: "Name a sport that is not played with a ball",
            optionA: "swimming",
            optionB: "gumnastics",
            optionC: "hockey",
            optionD: "boxing",
        answer: "c"
    },
    {   question: "Name a critter that can scare even the biggest of men",
            optionA: "bee",
            optionB: "cockroach",
            optionC: "spider",
            optionD: "mouse",
        answer: "c"
    },
    {   question: "Name what mom's really want for mother's day",
            optionA: "vacation",
            optionB: "flowers",
            optionC: "me-time",
            optionD: "love",
        answer: "d"
    },
    {   question: "Name something that some men wear and some men don't",
            optionA: "tie",
            optionB: "underwear",
            optionC: "hat",
            optionD: "toupee",
        answer: "b"
    },
    
    ]
var totalQuestions = questions.length;

//start quiz
function quizStarts(){
    
    //start timer


    
    document.getElementById("startGame").style.cssText= "display: none";
    //make the quiz
    function displayQuestion(questionsIndex){
        document.getElementById("quizContainer").style.cssText= "display: block";
      
        var q = questions[questionsIndex];
                //console.log (q);
        questionDis.textContent = "# " + (questionsIndex +1) + " " +q.question;
             //console.log (questionDis);
        optA.textContent = q.optionA;
            //console.log (optA.textContent);
        optB.textContent = q.optionB;
            //console.log(optB.textContent);
        optC.textContent = q.optionC;
        optD.textContent = q.optionD;

}

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


}

