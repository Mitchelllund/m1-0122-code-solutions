/* exported reverseWord */
function reverseWord(word) {
  var i = word.length;
  var reverse = '';
  while (i > 0) {
    reverse += word.substring(i - 1, i);
    i--;
  }
  return reverse;
}

// define a function reverseWord with a parameter (word)
// define a variable i that is assigned a value of the parameter length
// define another variable reverse that is assigned an empty string
// create a while statement that reverses the direction of the parameter string and assigns it to var reverse
