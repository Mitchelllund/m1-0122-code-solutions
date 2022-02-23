/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  let result;
  if (number < 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isEven(number) {
  let result;
  if (number % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function startsWithJ(string) {
  let result;
  if (string.startsWith('J')) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrink(person) {
  var age = person.age;
  let result;
  if (age > 21) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrive(person) {
  var age = person.age;
  let result;
  if (age > 16) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrinkAndDrive(person) {
  var age = person.age;
  let result;
  if (age > 16) {
    result = false;
  } else {
    result = false;
  }
  return result;
}

function categorizeAcidity(pH) {
  let result;
  if (pH === 7) {
    result = 'neutral';
  } else if (pH >= 0 && pH <= 6.99) {
    result = 'acid';
  } else if (pH >= 7.01 && pH <= 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  let result;
  if (name === 'yakko' || name === 'wakko') {
    result = 'We\'re the warner bros';
  } else if (name === 'dot') {
    result = 'I\'m cute';
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
