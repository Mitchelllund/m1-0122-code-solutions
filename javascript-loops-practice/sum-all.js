/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + Number(numbers[i]);
  }
  return sum;
}
