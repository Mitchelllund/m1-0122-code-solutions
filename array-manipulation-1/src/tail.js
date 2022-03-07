/* exported tail */
// define a function called tail with a parameter of (array)
// define a function called newArray with an empty array
// define a for loop to check each property of the array
// in the loop push the values of the array index into newArray
// return the newArray in order to log the array minus index 0

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function called tail with a parameter of (array)
// define a function called newArray with an empty array
// define a for loop to check each property of the array with i starting at 1 since we are ommiting the first index
// in the loop push the values of the array index into newArray
// return the newArray in order to log the array
