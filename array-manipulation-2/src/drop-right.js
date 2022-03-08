/* exported dropRight */
function dropRight(array, count) {
  if (count) {
    return array.slice(0, -count);
  } else {
    return array;
  }
}

// define a function dropRight and assign it two parameters of (array and count)
// create a if statement with a condition of count that returns a new array with one less value of count passed
// create a else statement that returns the array
