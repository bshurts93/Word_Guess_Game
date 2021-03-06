//-----------------// VARIABLES //-----------------//
var words = ["megaton", "overseer", "radiation", "mutant", "pipboy", "stimpack", "radaway", "mentats"];
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var wordBox = document.getElementById("word-box");
var guessedLettersBox = document.getElementById("guessed-letters");
var messageBox = document.getElementById("message");
var winBox = document.querySelector("#wins");

var wins = 0;

var correctGuesses = [];
var incorrectGuesses = [];

var guessCount = 10;
var currentWord;

//-----------------// FUNCTIONS //-----------------//
var getRandomWord = function () {
    randNum = Math.floor(Math.random() * words.length);
    return words[randNum];
}

function underscored () {
    for (var i = 0; i < currentWord.length; i++) {
        correctGuesses.push("*");
    }
}

function reset () {
    console.log('reset?')
    // Empty correctGuesses
    correctGuesses = [];
    // Empty incorrectGuesses
    incorrectGuesses = [];
    // Reset word box to empty
    wordBox.innerHTML = " ";
    // Set guesses to 11 so that when any key is pressed, it displays as 11
    guessCount = 11;
    // Generate new word
    currentWord = getRandomWord(words);
    // Display new underscores
    underscored();
}

var makeGuess = function (l) {

    if (incorrectGuesses.includes(l)) {
        // If the user has already guessed the selected letter, do nothing
        console.log("doing nothing!");

    } else {

        if (currentWord.indexOf(l) === -1) {
            // Decrease guess count and display 
            guessCount--;
            document.getElementById("guesses").textContent = guessCount;
    
            // Letter is not in the current word, push it to wrong guesses array
            incorrectGuesses.push(l);
            guessedLettersBox.innerHTML = incorrectGuesses.join(" ");
    
        } else {
            // Letter is correct, change underscore back to letter
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === l) {
                    // Assign the correct letter to the corresponding spot in the array
                    correctGuesses[i] = l.toUpperCase();;
                }
            }
    
            // Display new array to DOM
            wordBox.innerHTML = correctGuesses.join(" ");
        }

        if (wordBox.innerHTML.includes("*") === false) {
            // Display to DOM
            messageBox.innerHTML = "Winner!";
            wins++
            winBox.innerHTML = wins;
            reset();
        }
    
        // If user runs out of guesses, display game over
        if (guessCount === 0) {
            messageBox.innerHTML = "Loser!";
    
            reset();
    
        }


    }
    
    
}


//-----------------// PSUDO CODE //-----------------//

// SCORING //
// Get guess count from the declared variable and display to DOM
document.getElementById("guesses").innerHTML = guessCount;
// Get word from array
currentWord = getRandomWord(words);

// Create array of underscores that match the length of the word
underscored();
// Join array and show underscores to DOM
wordBox.innerHTML = correctGuesses.join(" ");

// Set up onkeypress event listener
document.onkeydown = function (e) {
    var keypress = e.key;

    // On keypress, fire makeGuess function by passing the keypress as the argument
    if (alphabet.includes(keypress)) {
        makeGuess(keypress);
    }
}