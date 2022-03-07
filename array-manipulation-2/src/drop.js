/* exported drop */
// deinfe a function named drop with 2 parameters of (array and count)
// define a new variable newArray and assign it a value of an empty array
// create a for loop that sets var i = to count and runs throught the array.length
// push the array[i] to the var newArray
// after the loop has completed return the variable of newArray

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// deinfe a function named drop with 2 parameters of (array and count)
// define a new variable newArray and assign it a value of an empty array
// create a for loop that sets var i = to count and runs throught the array.length
// push the array[i] to the var newArray
// after the loop has completed return the variable of newArray
