/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function named compact with one parameter of array
// define a varaiable named newArray and assign it an empty array
// use a for loop to check each property in the parameter array
// in the loop push truthy values into the newArray
// when the loop is complete, return the newArray array
