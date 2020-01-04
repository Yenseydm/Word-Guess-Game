
// array of words
var words = [
    "ranch",
    "ketchup",
    "buffalo",
    "barbeque",
    "marinara",
    "mayonnaise",
];

// variables
var guessedLetters = []; //userGuess 
var underscoredWord = []; // underscores "_"
var guessesRemaining = 11; //guesses remaining
var wins = 0; //wins
var loses = 0; //losses
var startGame = false; //false = game stopped 
var word; // word being played


function setup() {
    
    // randomize words in "words" array
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    
    //empty array for spaces and words
    underscoredWord = [];
    
    for (var i = 0; i < word.length; i++) {
        underscoredWord[i] = "_"
    }
    
    // for letters that were guessed by user
    guessedLetters = [];
    
    updateScreen();
};

// update what is shown
function updateScreen() {
    
    document.getElementById("wins-text").innerText = "Wins: " + wins;
    document.getElementById("remaining-text").innerText = "Chances: " + guessesRemaining;
    document.getElementById("lose-text").innerText = "Loses: " + loses;
    document.getElementById("current-text").innerText = underscoredWord.join("");
    document.getElementById("guessed-text").innerText = guessedLetters ;
    
};

function checkGuesses(letter) {

    // wrong choice
    if (guessedLetters.indexOf(letter) === -1) {
        
        guessedLetters.push(letter);
        
        if (word.indexOf(letter) === -1) {
            
            guessesRemaining--;
            
        } else { // correct choice
            for (var i = 0; i < word.length; i++) {
                if (letter === word[i]) {
                    underscoredWord[i] = letter;
                }
            }
        }
    }
};

// if word is correct you get ++ wins
function ifWinner() {
    if (underscoredWord.indexOf("_") === -1) {
        wins++;
        startGame = true;
    } 
};

// if remaining chance is less than 0 then lose
function ifLose() {
    if (guessesRemaining <= 0) {
        loses++;
        startGame = true
    }
};

document.onkeyup = function (event) {
    // game ends
        if (startGame) {
            setup();
            startGame = false;
        } else {
           // resets variables with new word
                checkGuesses(event.key.toLowerCase());
                updateScreen();
                ifWinner();
                ifLose();
            
            
        };

    };
    setup();
    updateScreen();
