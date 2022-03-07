/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

// define a function getKeys with one parameter of (object)
// define a var keys and assign it an empty array
// create a for in loop that runs the var key in objects
// push the var key into the keys variable
// return the keys variable
