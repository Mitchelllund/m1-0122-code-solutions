/* exported countdown */
function countdown(number) {
  var numbers = [];
  var counter = number;
  while (counter >= 0) {
    numbers.push(counter);
    counter--;
  }
  return numbers;
}
