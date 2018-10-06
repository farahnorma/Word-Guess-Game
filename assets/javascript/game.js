//shorten the code
let $ = function (id) {
    return document.getElementById(id)
}

//global variable
const words = ["candy", "ghost", "mummy", "pumpkin", "spider", "skeleton", "web", "zombie"];
let word;
let answerArray = [];
let userGuess;
let rightGuess = false;
let userRightGuess = 0;
let left = 9;
let wins = 0;
let losses = 0;

// let remainingLetters = word.length;


//random word
function randomWord() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random]
}

//show blank start
function showBlank() {
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    $("guess").innerHTML = answerArray.join(" ")
}

//guesses left
function guessesLeft() {
    $("left").innerHTML = left
}

//wins
function winsScore() {
    $("wins").innerHTML = wins
}

//losses
function lossesScore() {
    $("losses").innerHTML = losses
}

//show wrong guess
function wrongGuess(char) {
    $("wrong").innerHTML += char + ", "
}

// resent function
function initialGame() {
    left = 9;
    answerArray = [];
    $("wrong").innerHTML = "";
    rightGuess = false;
    guessesLeft()
    randomWord()
    showBlank()
}

// call initial function
randomWord()
initialGame()
winsScore()
lossesScore()

//check letter
function showLetter(char, str) {
    for (let j = 0; j < str.length; j++) {
        if (char === str[j]) {
            rightGuess = true
            answerArray.splice(j,1,char)
            userRightGuess++
        }
    }
    $("guess").innerHTML = answerArray.join(" ")
}

//check length
let matchLength = function() {
    if (word.length === userRightGuess) return true
    else return false
}

//user guess
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();

    showLetter(userGuess, word)
    
    if (rightGuess) {
        rightGuess = false
        if (matchLength()) {
            wins++
            winsScore()
            initialGame()
        }
    } else {
        left--
        if (left < 1) {
            initialGame()
            losses++
            lossesScore()
        } else {
            wrongGuess(userGuess)
            guessesLeft()
        }

    }
}
