$("#start-game").click(function () {
    console.log("Start game");
    start();
})

$("#finish-game").click(function () {
    console.log("Finish game");
    finish();
    $("#quiz").hide(); 
    checkAnswers();
})

window.onload = function () {
    finish();
    $("#quiz").hide();
}

var correctAnswers = ["red", "ear-lobes", "cockfighting", "seven", "eight-k"];
let correct = 0;
let wrong = 0;
var time = 60;
var intervalID = setInterval(countdown, 1000);


function checkAnswers() {
    var userGuesses = [$("input[name=question1]:checked").val(), $("input[name=question2]:checked").val(), $("input[name=question3]:checked").val(), $("input[name=question4]:checked").val(), $("input[name=question5]:checked").val()];
    for (let i = 0; i < userGuesses.length; i++) {
        if (userGuesses[i] === correctAnswers[i]) {
            correct++;
        } else {
            wrong++;
        }
    }
    if (correct >= 3) {
        console.log("Egg-cellent job!");
    } else {
        console.log("Not so egg-cellent...");
    }
    console.log("You got " + correct + " right and " + wrong + " wrong.");
}

// function results() {

// }

function start() {
    $("#quiz").show();
    intervalID = setInterval(countdown, 1000);
    //clearInterval(intervalID);
}

function countdown() {
    time--;
    $("#timer").html("00:" + time);
    if (time === 0) {
        finish();
        alert("Time's up!");
    }
}

function finish() {
    clearInterval(intervalID);
}



// timer still runs after finish button is clicked
// display results when finish is clicked
// pretty up css

