/**
 * Unary -> only one argument
 *
 * 2 + 5 -> it's not unary operator!
 *
 * Each type/object in JS has method .valueOf()
 *
 * Steps
 * - gets .valueOf()
 * - parsing to string .toString()
 */
console.log(
    typeof '50',
    typeof +'50'
)

console.log(
    !'hello',
    !!'hello' // checking if the value is falsy of truthy
)


