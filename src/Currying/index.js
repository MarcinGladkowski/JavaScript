// simple resolve
function multiply(value, multiplier) {
    return value * multiplier
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