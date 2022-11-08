/** Operators && and || */

/**
 * [Falsy] All values are truthy besides falsy values like
 * - null
 * - undefined
 * - 0
 * - '' / "" without whitespaces!
 * - NaN
 * - false
 */


/**
 * Operators AND && and OR || not coercing types! They're using types above! and return last using PARAMETER
 */
console.log(true && []) // []

console.log(true && true && true && 0 && true) // 0

/**
 * Comparison operator == using coercion
 */
if ([] == true) console.log('[] is OK -> coercion to string and then to boolean value')
if ([] && true) console.log('[] is OK -> no coercion!')


/**
 * Usage.
 */
const user = {};
user.name = 'John'
const name = user && user.name || 'default name'
console.log(name)

/**
 * Shorter implementation
 *
 * if (something()) {
 *     doOther()
 * }
 *
 * something() && doOther()
 */
const userMoney = 100
const money = userMoney || 20 // but in case on 0 -> not returns fallback value (20) - Edge case
