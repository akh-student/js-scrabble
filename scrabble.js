var Scrabble = function() {};

Scrabble.score = function(word) {
  // set score keeping variable
  var wordScore = 0;

  // normalize input
  word = word.toLowerCase();

  // iterate through the letters of the word
  for (var i = 0; i < word.length; i++) {
    // increment score total by value of letter
    switch (word[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "l":
      case "n":
      case "r":
      case "s":
      case "t":
        wordScore += 1;
        break;
      case "d":
      case "g":
        wordScore += 2;
        break;
      case "b":
      case "c":
      case "m":
      case "p":
        wordScore += 3;
        break;
      case "f":
      case "h":
      case "v":
      case "w":
      case "y":
        wordScore += 4;
        break;
      case "k":
        wordScore += 5;
        break;
      case "j":
      case "x":
        wordScore += 8;
        break;
      case "q":
      case "z":
        wordScore += 10;
        break;
    }
  }

  return wordScore; // the total score value for a given word
};

console.log(Scrabble.score("Bee")); // 5
console.log(Scrabble.score("Snake")); // 9
console.log(Scrabble.score("Iauanj")); // 13
console.log(Scrabble.score("Hillary")); //13
console.log(Scrabble.score("Aaaaaaa")); // 7
console.log("******** End of word score tests ********"); // 7


Scrabble.highestScoreFrom = function(arrayOfWords) {

  // hold the first word and the first word score as starting point
  var highestWord = arrayOfWords[0];
  var highestScore = Scrabble.score(highestWord);

  // iterate throught the array of words starting with the second word.
  for (var i = 1; i < arrayOfWords.length; i++) {

    var thisWord = arrayOfWords[i];
    var thisScore = Scrabble.score(thisWord);

    // show in console for testing
    // console.log("NNNNNNNNNN");
    // console.log(i);
    // console.log("Word: " + thisWord);
    // console.log("Score: " + thisScore);
    // console.log("**********");

    // if word score is greater than highestScore, save the word and the score
    if (thisScore > highestScore || (thisScore == highestScore && (thisScore.length == 7 || thisScore.length < highestScore.length))) {
      highestScore = thisScore;
      highestWord = thisWord;
    }
  }
  return highestWord; // word in the array with the highest score
};

console.log(Scrabble.highestScoreFrom(["Snake", "Bee", "Hillary", "Yo", "What"])); // Hillary
console.log(Scrabble.highestScoreFrom(["Bee", "Snake", "Iguana"])); // Snake
console.log(Scrabble.highestScoreFrom(["Aaaaaaa", "Iguana"])); // Aaaaaaa
console.log("******* End of highestScoreFrom *******")


Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};




module.exports = Scrabble;
