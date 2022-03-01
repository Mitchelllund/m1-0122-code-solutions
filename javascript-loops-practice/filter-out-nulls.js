/* exported filterOutNulls */
function filterOutNulls(values) {
  var filterOut = [];
  for (var i = 0; i < values.length; i++) {
    filterOut.push(values[i]);
  }
  return filterOut.filter(Boolean);
}
