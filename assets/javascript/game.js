
// array of words
var words = [
    "ranch",
    "ketchup",
    "buffalo",
    "barbeque",
    "marinara",
    "mayonnaise",
];

// randomize words in "words" array
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

// assign var to ids
var directionText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var loseText = document.getElementById("lose-text");
var currentWord = document.getElementById("current-text");
var remainingText = document.getElementById("remaining-text");
var lettersGuessed = document.getElementById("guessed-text");
var startGame = false;

// created wins, remaining, and guessedLetters
var wins = 0;
var loses = 0;
var remaining = 11;


var wordArray = [];
var guessedLetters = [];
var matchedLetters = [];

// created a function to catch user keys
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);

    for (i = 0; i < word.length; i++) {
        wordArray[i] = ("_");
        console.log(wordArray)
    };

    startGame = true;

    for (var i = 0; i < word.length; i++) {
        guessedLetters.push("_");
        guessedLetters.toString();
        currentWord.textContent = wordArray.join("");


    }
    
    if (word.indexOf(userGuess) === -1) {
        
        console.log("wrong");
        
        document.getElementById("guessed-text").innerHTML += userGuess + " ";
    
        // // subtract a remaining chance 
        remaining--;

    } else {

        matchedLetters.push(userGuess);
        console.log(matchedLetters);
        console.log(guessedLetters);
        
        for (var i = 0; i < word.length; i++) {

            if(wordArray[i] === userGuess){
                guessedLetters.push(userGuess);
            } else {
                guessedLetters.push("_");
            }

            
        }
        guessedLetters.toString();
        
        currentWord.textContent = wordArray.join("");

    }

    if (remaining <= 0) {
        startGame=false;
        loses++;
        currentWord.textContent = word;
        document.getElementById("images").src = "https://gph.is/2CJO9yA";
    }



    // making directions dissapear when game begins
    directionText.textContent = "";

    // displaying wins, blankspaces, chances, and guessed getters.
    winsText.textContent = "Wins: " + wins;
    loseText.textContent = "Losses: " + loses;
    remainingText.textContent = "Remaining Chances: " + remaining;


}