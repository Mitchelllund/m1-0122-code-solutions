/* exported toObject */
function toObject(keyValuePair) {
  var value = keyValuePair.pop();
  var key = keyValuePair.pop();
  var obj = {};
  obj[key] = value;
  return obj;
}

// define a function toObject with one parameter of keyValuePair
// define a variable value and assign it a value of the keyValuePair with the pop method applied
// define a variable key and assign it a value of the keyValuePair with the pop method applied
// define a var obj and assign it a value of an empty array
// set the key method of the obj to a value of value
// return the obj var
