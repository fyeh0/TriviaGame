$("#start-game").click(function () {
    console.log("Start game");
    start();
})

$("#finish-game").click(function () {
    console.log("Finish game");
    finish();
    checkAnswers();
})

window.onload = function () {
    $("#quiz").hide();
}

var correctAnswers = ["red", "ear-lobes", "cockfighting", "seven", "eight-k"];
var userGuesses = [$("input[name=question1]:checked").val(), $("input[name=question2]:checked").val(), $("input[name=question3]:checked").val(), $("input[name=question4]:checked").val(), $("input[name=question5]:checked").val(), $("input[name=question6]:checked").val()];
let correct = 0;
let wrong = 0;
var time = 90;
var intervalID;
//console.log($("input[name=question1]:checked"));


function checkAnswers() {
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
    console.log("You got " + correct, "-", wrong);
}

function results() {

}

function start() {
    // var intervalId = setInterval(count, 1000);
    $("#quiz").show();
    clearInterval(intervalID);
    intervalID = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    $("#timer").html(time);
    if (time === 0) {
        finish();
        alert("Time's up!");
    }
}

function finish() {
    clearInterval(intervalID);
}





