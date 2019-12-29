
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
    var guessedLetters = [];
    console.log(wins);
    console.log(remaining);
    console.log(guessedLetters)

    // created a function to catch user keys
    document.onkeyup = function (event) {
        var userGuess = event.key;
        console.log(userGuess);

        var blankSpaces = [];

        for (i = 0; i < word.length; i++) {
            blankSpaces[i] = "_ ";
        };

        

            // making directions dissapear when game begins
            directionText.textContent = "";

            // displaying wins, blankspaces, chances, and guessed getters.
            winsText.textContent = "Wins: " + wins;
            currentWord.textContent = blankSpaces;
            remainingText.textContent = "Remaining Chances: " + remaining;
            lettersGuessed.textContent = userGuess;
        }

  