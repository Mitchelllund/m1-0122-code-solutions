var firstNumber = 5;
var secondNumber = 20;
var thirdNumber = 50;

var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);

console.log('maximumValue: ', maximumValue);

var heroes = ['Batman', 'Green Lantern', 'Spider-man', 'Wolverine'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [{
  title: 'The Fellowship of the Ring',
  author: 'J.R.R. Tolkien'
},
{
  title: 'A Game of Thrones',
  author: 'George R.R. Martin'
},
{
  title: 'The Way of Kings',
  author: 'Brandon Sanderson'
}
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Mitchell Lund';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
