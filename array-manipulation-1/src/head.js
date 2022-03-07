/* exported head */
// define a function named head with a single parameter of (array)
// define a variable named newArray and assign it a empty array
// use a for loop to check each property in the parameter array
// in the loop push the values of the 0 index into the newArray
// when the loop is complete return the newArray.

function head(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray[0];
}

// define a function named head with a single parameter of (array)
// define a variable named newArray and assign it a empty array
// use a for loop to check each property in the parameter array
// push the values of the index array into the newArray
// when the loop is complete return the newArray with the 0 index
