

// array of random words
var words = [
  "ranch",
  "ketchup",
  "buffalo",
  "barbeque",
  "marinara",
  "mayonnaise",
];
console.log(words);
// Randomize word chosen
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//display on page
var winsText = document.getElementById("wins-text");
var currentWord = document.getElementById("current-text");
var remainingText = document.getElementById("remaining-text");
var lettersGuessed = document.getElementById("guessed-text");

// variables
var wins = 0;
var remaining = 10;
var guessedLetters = "";
console.log(wins);
console.log(remaining);
console.log(guessedLetters)

document.onkeyup = function (event) {

  // Determines which key was pressed
  var userGuess = event.key;
  console.log(userGuess);


  var blankSpaces = "";
  console.log(blankSpaces);

  for (i = 0; i < word.length; i++) {
    blankSpaces[i] = "_";
    if (userGuess === word[i]){
      blankSpaces.push("_")
    }
  }
  
  remainingText.textContent = remaining;
};





