/* exported getValues */

// define a function getValues with one parameter (object)
// define a var newArray and assign it an empty array
// create a for in statment that loops the var key through the object
// push the object into the newArray varaible
// return the newArray

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    var value = object[key];
    newArray.push(value);
  }
  return newArray;
}

// define a function getValues with one parameter (object)
// define a var newArray and assign it an empty array
// create a for in statment that loops the var key through the object
// define a var value and assign it the object key
// push the object into the newArray varaible
// once the loop has finished return the newArray variable
