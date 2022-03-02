/* exported filterOutStrings */
function filterOutStrings(values) {
  var filterOut = [];
  for (var i = 0; i < values.length; i++) {
    filterOut.push(values[i]);
    filterOut = filterOut.filter(item => typeof item !== 'string');
  }
  return filterOut;
}
