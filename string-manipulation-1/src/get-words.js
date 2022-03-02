/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else {
    var newArray = [];
    newArray = string.split(' ');
  }
  return newArray;
}

// define a function getWords witha parameter of (string)
// create an if statement that evalueates if the parameter is an empty array and if true returns []
// create an else statement that uses the .split method to seperate the parameter with a , and pushes it into a new array
// return the newArray variable
