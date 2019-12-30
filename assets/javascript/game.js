
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
    var currentWord = document.getElementById("current-text");
    var remainingText = document.getElementById("remaining-text");
    var lettersGuessed = document.getElementById("guessed-text");

    // created wins, remaining, and guessedLetters
    var wins = 0;
    var remaining = 10;
   
    console.log(wins);
    console.log(remaining);
    

    // created a function to catch user keys
    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);

        var blankSpaces = [];
        var guessedLetters = [];
        var correctLetters = [];

        for (i = 0; i < word.length; i++) {
            blankSpaces[i] = "_"
        };

        for (var i =0; i < word.length; i++){
            guessedLetters.push("_");
            guessedLetters.toString()
            document.getElementById("current-text").innerHTML = blankSpaces.join(" ");
        }
        for (var i =0; i < word.length; i++){
            correctLetters.push(word.charAt(i));
            correctLetters.toString(i);
        }

        if (userGuess === word[0] || userGuess === word[1] || userGuess === word[2] || userGuess === word[3] || userGuess === word[4] ||
            userGuess === word[5] ||userGuess === word[6] || userGuess === word[7] || userGuess === word[8] || userGuess === word[9]){

            document.getElementById("current-text").innerHTML = correctLetters.join(" ");
          
        } else {

            document.getElementById("guessed-text").innerHTML += userGuess + " ";

            // subtract a remaining chance 
            remainingText--;
            document.getElementById("remaining-text").innerHTML = remaining;
          }
        
        
            // making directions dissapear when game begins
            directionText.textContent = "";

            // displaying wins, blankspaces, chances, and guessed getters.
            winsText.textContent = "Wins: " + wins;
            remainingText.textContent = "Remaining Chances: " + remaining;
            lettersGuessed.textContent = userGuess;
       
}
  