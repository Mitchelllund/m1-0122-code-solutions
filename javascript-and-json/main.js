var library = [
  {
    isbn: '0-3412-9356-3',
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    isbn: '0-1005-1896-6',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson'
  },
  {
    isbn: '0-1365-3638-7',
    title: 'Life of Pi',
    author: 'Yann Martel'
  }
];
console.log('Library:', library);
console.log('Library typeof:', typeof library);
JSON.stringify(library);
console.log('JSON Stringify: ', JSON.stringify(library));
console.log('JSON Stringify typeof: ', typeof JSON.stringify(library));

var student = '{"name": "Billie", "id":42}';
console.log('Student:', student);
console.log('typeof:', typeof student);

var obj = JSON.parse(student);
console.log('obj: ', obj);
console.log('typeof: ', typeof obj);
