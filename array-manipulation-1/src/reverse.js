/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function named reverse that has one parameter (array)
// define a variable named newArray and assign it an empty array
// use a for loop to check each property of the parameter reversed
// in the loop push the new values into the newArray
// when the loop is finished return the newArray
