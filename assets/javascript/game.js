//shorten the code
let $ = function (id) {
    return document.getElementById(id)
}

//global variable
const words = ["afraid", "bat", "black", "autumn", "costume", "cowboy", "cowgirl", "cemetry", "candy", "cape", "carve", "clown", "cobweb", "cat", "dead", "death", "fear", "fall", "ghost", "gory", "grave", "halloween", "hat", "magic", "moonlight", "mummy", "monster", "mask", "night", "orange", "owl", "october", "party", "pumpkin", "pirate", "robot", "scare", "spider", "skeleton", "trick", "treats", "witch", "wizard", "web", "wand", "zombie"];
let word;
let userInput = [];
let userIndex = 0;
let answerArray = [];
let remainingLetters = word.length;







//random word
function randomWord() {
    let random = Math.floor(Math.random() * words.length);
    word = words[random]
}

//show blank start
function showBlank() {
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_"
        $("guess").innerHTML += answerArray[i] 
    }
}
