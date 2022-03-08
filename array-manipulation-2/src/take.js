/* exported take */

// define a function take with two parameters of array, count
// define a var newArray with a value of a empty array
// create a for loop that runs through the array targeting the fist element
// push the results of the loop into the new array
// return the newArray var

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
    if (count > 6) {
      return [];
    }
  }
  return newArray;
}

// define a function take with two parameters (array and count)
// define a var newArray and assign it an empty array
// create a for statement that takes the first element and loops it through the array
// push the result of the loop into the newArray var
// create an if statment that returns an empty bracket if count is greater then 6
// return the newArray var
