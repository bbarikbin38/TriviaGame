

//selector variable for the below array
var a = 0
var correctAnswerTally = 0;
var incorrectAnswerTally = 0;

//creating the questions and answers through objects
var Questions = [
    question1 = {
        Question: "Which Philadelphia sports team most recently won a championship?",
        Answers: ["Eagles", "Flyers", "Phillies", "Sixers",],
        WinningAnswer: "Eagles",
    },
    question2 = {
        Question: "Who is the current Eagles QB?",
        Answers: ["Donovan McNabb", "Carson Wentz", "Bryce Harper", "Jerry Jones"],
        WinningAnswer: "Carson Wentz"
    },
    question3 = {
        Question: "When did the Phillies last win the World Series?",
        Answers: ["2013", "2001", "1982", "2008"],
        WinningAnswer: "2008",
    },
    question4 = {
        Question: "Who is the Eagles current head coach?",
        Answers: ["Doug Pederson", "Andy Reid", "Tony Romo", "John Fox"],
        WinningAnswer: "Doug Pederson",
    },
    question5 = {
        Question: "Who is the Phillies key free agent signing of 2019?",
        Answers: ["Manny Machado", "Bryce Harper", "Jimmy Rollins", "Alex Rodriguez"],
        WinningAnswer: "Bryce Harper",
    },
    question6 = {
        Question: "What is the last name of the following Flyers Player: Claude ...?",
        Answers: ["Knight", "Giroux", "Simmons", "Embiid"],
        WinningAnswer: "Giroux",
    },

]

//need to create a function to shuffle an array
function shuffle(array) {

    var currentIndex = array.length, temp, randomIndex;
    console.log(currentIndex);
    // While there are elements to shuffle in the array
    while (0 !== currentIndex) {
        // setting a random index here
        randomIndex = Math.floor(Math.random() * currentIndex);
        //  subtracting from current index by 1
        currentIndex -= 1;
        // Swapping the last element with the current one.
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        console.log(currentIndex);
    
        //this is tracking in real time. i want it to show the scores after all of the questions have been asked
       if (currentIndex === 0) {
            $("#wins-tracker").html("Questions answered correct: " + correctAnswerTally);
          $("#loss-tracker").html("Quesions answered incorrectly: " + incorrectAnswerTally);
           }
    }
    // finally the array input is returned, however it is shuffled around now.
    return array;

    
}


//Need to create a function that will start game and display the question and answers 
function startGame() {
    $("#question").html(Questions[a].Question);
    $("#answer1").html(Questions[a].Answers[0]);
    $("#answer2").html(Questions[a].Answers[1]);
    $("#answer3").html(Questions[a].Answers[2]);
    $("#answer4").html(Questions[a].Answers[3]);
}

// this sets the time variable at 45 seconds.  can change it up to whatever you want the game logic to start at
var time = 30;
var interval;
// Creating a function to start counting down time by 45 seconds
function timer() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}
// The decrement functionis called to decrease time
function decrement() {
    // Decreasing the time by one second
    time--;
    // Display the timer
    $("#time-remaining").html("<h2>" + time + "</h2>");
    // When time = 0
    if (time === 0) {
        clearInterval(interval);
        alert("Time Up!");
        nextQuestion();
    }
}
shuffle(Questions);
// running timer Function. 
timer();
startGame();



$(document).on("click", ".click-me", function () {

    // If else for the answer checking (can't get this to work) **
    if ($(this).html() === Questions[a].WinningAnswer) {
        alert("You win!");
        correctAnswerTally++ ;
        nextQuestion();
        timer();
        console.log(correctAnswerTally);
    }
    //if you are wrong , you lose.
    else {
        alert("Incorrect")
        incorrectAnswerTally++ ;
        nextQuestion();
        timer();
        console.log(incorrectAnswerTally);
    }
}
)

// create a function that will load the next questions

function nextQuestion() {
    shuffle(Questions);
    time = 30;
    $("#time-remaining").html("<h2>" + time + "</h2>");
    $("#question").html(Questions[a].Question);
    $("#answer1").html(Questions[a].Answers[0]);
    $("#answer2").html(Questions[a].Answers[1]);
    $("#answer3").html(Questions[a].Answers[2]);
    $("#answer4").html(Questions[a].Answers[3]);
    console.log(Questions[a].WinningAnswer);
}

// this function will append the correct and incorrect answers to the wins and loss tracker. i can't 
// figure out how to incorporate this function into the code to execute once the array has been fully
// shuffled through.  The index is shuffling through and going from 6 to 1. See console log at line 47


// i am not using this function. i was attempting to figure out a way to display score after there are 
// no more questions to shuffle
function displayScore() {
   
    if (currentIndex === 0) {
        $("#wins-tracker").html("Questions answered correct: " + correctAnswerTally);
        $("#loss-tracker").html("Quesions answered incorrectly: " + incorrectAnswerTally);
        alert("Game over!");
        }

  }