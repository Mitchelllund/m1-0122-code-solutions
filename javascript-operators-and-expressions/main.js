var width = 4;
var height = 5;
var area = width * height;
console.log('area is: ', area);
console.log('typeof area is: ', typeof area);

var bill = 52.75;
var payment = 60;
var change = '$' + (payment - bill);
console.log('change is: ', change);
console.log('type of change: ', typeof area);

var quizzes = 83;
var midterm = 81;
var final = 92;
var grade = (quizzes + midterm + final) / 3;
console.log('grade is: ', grade);
console.log('typeof grade is: ', typeof grade);

var firstName = 'Mitchell';
var lastName = 'Lund';
var fullName = firstName + ' ' + lastName;
console.log('fullName is: ', fullName);
console.log('typeof fullName: ', typeof fullName);

var pH = 10;
var isAcidic = pH < 7;
console.log('value of isAcidic: ', isAcidic);
console.log('type of isAcidic: ', typeof isAcidic);

var headCount = 50;
var isSparta = headCount === 300;
console.log('value of isSparta: ', isSparta);
console.log('type of isSparta: ', typeof isSparta);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('value of motto: ', motto);
console.log('typeof motto: ', typeof motto);
