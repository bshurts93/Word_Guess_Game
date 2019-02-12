//-----------------// VARIABLES //-----------------//
var words = ["volkswagen", "bmw", "ford", "chevrolet", "bugatti", "ferrari", "lamborghini", "subaru", "hyundai", "honda"];
var wordBox = document.getElementById("word-box");
var guessedLettersBox = document.getElementById("guessed-letters");

var correctGuesses = [];
var incorrectGuesses = [];

var guessCount = 13;
var currentWord;

//-----------------// FUNCTIONS //-----------------//
var getRandomWord = function () {
    randNum = Math.floor(Math.random() * words.length);
    return words[randNum];
}

var makeGuess = function(l) {
    // Decrease guess count and display 
    guessCount--;
    document.getElementById("guesses").textContent = guessCount;

    if (currentWord.indexOf(l) === -1) { 
        // Letter is not in the current word, push it to wrong guesses array
        incorrectGuesses.push(l);
        guessedLettersBox.innerHTML = incorrectGuesses;
    } else {
        // Letter is correct, change underscore back to letter
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === l) {
                // Assign the correct letter to the corresponding spot in the array
                correctGuesses[i] = l;
            }
        }
        // Update to DOM
        wordBox.innerHTML = correctGuesses;
    }
}


//-----------------// PSUDO CODE //-----------------//

// Get word from array
currentWord = getRandomWord(words);

// Create array of underscores that match the length of the word
for (var i = 0; i < currentWord.length; i++) {
    correctGuesses.push("_");
}
// Join array and show underscores to DOM
wordBox.innerHTML = correctGuesses.join(" ");

// Set up onkeypress event listener

// On keypress, fire makeGuess function by passing the keypress as the argument

