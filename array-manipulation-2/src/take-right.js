/* exported takeRight */
function takeRight(array, count) {
  var result = [];
  var j = 0;
  for (var i = array.length - count; i < array.length; i++) {
    result[j] = array[i];
    j++;
    if (count >= 7) {
      return [];
    } else if (count > array.length) {
      return array;
    }
  }
  return result;
}

// define a function takeRight with two parameters of (array and count)
// define a var result and assign it an empty array
// define a var j and assing it an value of 0
// create a for statement that loops through the array length - count and assigns the result to the reuslt[j] var
// create a if statement that checks if the count paramenter is >= 7 and if so returns a empty bracket
// create a else if statement that returns the array if count is > array.length
// return the result
