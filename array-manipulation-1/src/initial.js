/* exported initial */

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// define a function called initial with a parameter of (array)
// define a function called newArray with an empty array
// define a for loop to check each property of the array and subtracting the array.length by 1
// in the loop push the values of the array index into newArray
// return the newArray in order to log the array
