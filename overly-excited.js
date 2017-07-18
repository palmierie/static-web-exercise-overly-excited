console.log('WORKS');

// Create an array that contains the words in the sentence
var sentence = ["The ", "walrus ", "danced ", "through ", "the ", "trees ", "in ", "the ", "light ", "of ", "the ", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    // Write a `for` loop that iterates over the array argument and outputs the words
  var newSentence = [];

  for (var i = 0; i < theWordArray.length; i++) {
    newSentence += theWordArray[i];
     // console.log(newSentence);

  /* Add an ! after every third word */
    var n = i + 1
    if(n % 3 === 0){
    newSentence += "!";  
    } 
      console.log(newSentence);
  }
}

// Invoke the function and pass in the array
addExcitement(sentence)