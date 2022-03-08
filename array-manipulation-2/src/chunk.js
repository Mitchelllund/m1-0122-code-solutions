/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (let i = 0; i < array.length; i += size) {
    var chunks = array.slice(i, i + size);
    newArray.push(chunks);
  }
  return newArray;
}

// Define a function chunk and assign it two parameters of (array and size)
// Define a var newArray and assign it a value of empty array
// Create a for loop that and runs through the array length and uses addition assingmnet on size paramenter
// Create a var chunks that is assigned the value the slice method of the array object set to var i and i + size
// push the value of chunks into the newArray
// return the newArray var
