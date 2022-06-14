/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A' ||
      char === 'e' || char === 'E' ||
      char === 'i' || char === 'I' ||
      char === 'o' || char === 'O' ||
      char === 'u' || char === 'U') {
    return true;
  } else return false;
}

// define a function isVowel witha parameter (char)
// create an if statement that evaluates if vowels (a,e,i,o,u) are truthy or falsy in parameter
// create an else statement that returns false if the truthy conditions aren't met
