//shorten the code
let $ = function (id) {
    return document.getElementById(id)
}

//global variable
const words = ["candy", "ghost", "grave", "halloween", "mummy", "pumpkin", "spider", "skeleton", "web", "zombie"];
let word;
let userInput = [];
let userIndex = 0;
let answerArray = [];
let remainingLetters = word.length;
let userGuess;
let rightGuess = true
let rightGuessIndex = []







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

//

//check letter
function checkLetter(char, str) {
    for (let j = 0; j < str.length; j++) {
        if (char === str) {
            rightGuessIndex.push(j)
        }
    }
    rightGuess = false
}