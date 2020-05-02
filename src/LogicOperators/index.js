/* 
*  JS falsy values: 
*  - 0
*  - false
*  - '' || ""
*  - undefined
*  - null
*
*  To rember! 
*  - empty array is true! []
*  - " " string value with space also!
*/

// Operators like || OR, && and return first values when break statement!
console.log(true || false);

console.log(0 || false);

console.log(false || 0); 

console.log(false || '');

console.log(false || true || '');

console.log(0 && false) // <- clearly see on this example!


