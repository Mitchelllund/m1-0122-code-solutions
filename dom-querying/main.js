console.log('hello, world');
var element = document.querySelector('h1');
console.log(element);
console.dir(element);

var secondElement = document.querySelector('#explanation');
console.log(secondElement);
console.dir(secondElement);

var thirdElement = document.querySelector('.hint');
console.log(thirdElement);
console.dir(thirdElement);

var fourthElement = document.querySelectorAll('p');
console.log(fourthElement);

var fifthElement = document.querySelectorAll('.example-link');
console.log(fifthElement);
