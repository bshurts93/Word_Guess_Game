//-----------------// VARIABLES //-----------------//
var words = ["volkswagen", "bmw", "ford", "chevrolet", "bugatti", "ferrari", "lamborghini"];
var wordBox = document.getElementById("word-box");



//-----------------// FUNCTIONS //-----------------//
var randomWord = function(arr) {
    randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

var underscored = function(str) {
    var altStr = [];
    for (var i = 0; i < str.length; i++) {
        altStr.push("_ ");
    }
    return(altStr.join(" "));
}


//-----------------// PSUDO CODE //-----------------//

// Key is pressed to start the game
document.onkeydown = function() {
    console.log("Keydown");
};

// Word is selected from data storage
currentWord = randomWord(words);

// For each letter in the word, display that many underscores to DOM
wordBox.textContent = underscored(currentWord);
 
// If the user selects a correct letter, the letter in the word shows up + one guess is used 
document.onkeydown = function(e) {
    keypress = e.key;


    // Check to see if keypress is included in current word
    hasLetter = currentWord.includes(keypress);
    console.log("Keypress "+ keypress + " = " + hasLetter);
    // Take user input and compare to the current word
    if (currentWord.includes(keypress)) {
        // Find the index of the correct keypress within the current word
        correctIndex = currentWord.indexOf(keypress);
        console.log(correctIndex);
    }
};

// If the user clicks a wrong letter, it is added to the 'used letters' section + one guess is used



// 
