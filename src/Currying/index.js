const R = require('ramda');

// Currying - connect functions with one argument

// simple resolve
function multiply(multiplier, value) {
    return multiplier * value
}

const numbers = [44, 3, 22, 12]

numbers.map((number) => multiply(number, 2));

// resolve

// Partial Application
const double = multiply.bind(null, 2);
console.log(double(2));

const usedDouble = numbers.map(double);
console.log(usedDouble);

// Currying - special partial application
const unary = (x) => console.log(x)
const binary = (x ,y) => x + y;

// chaining unary functions (have only one argument)
const unaryCarrying = (x) => (y) => x + y;
// unaryCarrying(3) // return function
// unaryCarrying(3)(2)

/*
*const unaryCarrying = function(x) {
*    return function(y) {
*        return x + y;
*    }
*}
*/

// Ramda library
// install ramda - https://www.npmjs.com/package/ramda in this directory

// Currying (strict/loose)
const curriedMultiply = R.curry(multiply); 
let curryingResult = numbers.map(curriedMultiply(2));

console.log(curryingResult);

const bookshelf = [
    { title: 'Total Recall', pages: 656, genre: 'biography'},
    { title: 'Sapiens', pages: 498, genre: 'business'},
]


const hasProperty = R.curry((property, value, obj) => obj[property] === value);
const getProperty = R.curry((property, obj) => obj[property]);

const getBusiness = (list) => list.filter(hasProperty('genre', 'business'));
const getPages = (list) => list.map(getProperty('pages'));
const countPages = (book) => book.reduce((acc, pages) => acc + pages);


const pipeResult = R.pipe(getBusiness, getPages, countPages)(bookshelf);
console.log(pipeResult);