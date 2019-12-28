

// array of random words
var words = [
    "ranch",
    "ketchup",
    "buffalo",
    "barbeque",
    "marinara",
    "mayonnaise",
];

// wins start at 0
var wins = 0;
console.log(wins);

// amount of guesses starting at 10
var remaining = 10;
console.log(remaining);

// Randomize word chosen
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//show underscore
var randomWord = [];
    for (var i = 0; i < word.length; i++) {
              randomWord.push("__");
              randomWord.toString()
              document.getElementById("#current").innerHTML = randomWord.join(" ");
            }
console.log(randomWord);
//letters guessed

function updateScore() {
    document.getElementById("#wins").innerHTML = "Wins: " + score;
  }
