/* exported findIndex */
function findIndex(array, value) {
  var v = value;
  for (var i = 0; i < array.length; i++) {
    if (v === array[i]) {
      return i;
    }
  }
  return -1;
}
