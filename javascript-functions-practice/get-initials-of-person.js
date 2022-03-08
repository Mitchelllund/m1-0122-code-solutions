/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  var fullName = firstName[0] + lastName[0];
  fullName = fullName.split('');
  var initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
}
