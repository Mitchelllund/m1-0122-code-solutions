var student = {
  firstName: 'Mitchell',
  lastName: 'Lund',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Sales manager for Nestle';
console.log('Value of livesInIrvine: ', student.livesInIrvine);
console.log('Value of previousOccupation: ', student.previousOccupation);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Ford',
  model: 'Mustang Boss 429',
  year: 1969
};

vehicle['color'] = 'Black';
vehicle['isConvertable'] = false;

console.log('Value of vehicle["color"]: ', vehicle['color']);
console.log('Value of vehicle["isConvertable"]:', vehicle['isConvertable']);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Jasper',
  type: 'Bunny'
};

delete pet.name;
delete pet.type;

console.log('Value of pet: ', pet);
