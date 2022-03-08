/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  var fullName = firstName + lastName;
  fullName = fullName.split(' ');
  var firstInitial = fullName.shift().charAt(0);
  return firstInitial;
}
