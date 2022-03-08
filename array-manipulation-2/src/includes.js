/* exported includes */

// define a function includes with two parameters of (array and value)
// create a for statement that loops through array and if the array[i] is = the value returns true
// create an else if statemtent that returns false if array[i] !== value
// create an if statement that checks if value > array.length and returns false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

// define a function includes with two paramenters of (array and length)
// create a for statement that loops through array and if the array[i] is = the value returns true
// return false if the if statemtent doesn't return true
