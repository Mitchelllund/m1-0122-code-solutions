/* exported last */
// define a function named last with a single parameter of (array)
// define a variable named newArray and assign it a empty array
// use a for loop to check each property in the parameter array
// push the values of the index array into the newArray
// when the loop is complete return the newArray .length of newArray - 1

function last(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray[newArray.length - 1];
}

// define a function named last with a single parameter of (array)
// define a variable named newArray and assign it a empty array
// use a for loop to check each property in the parameter array
// push the values of the index array into the newArray
// when the loop is complete return the newArray with the length of newArray - 1
