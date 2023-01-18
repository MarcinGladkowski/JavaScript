/**
 * for..in
 *
 * - Enumerating on keys
 * - We can access by key to value
 * - Enumerating only when property is 'enumerable' (descriptor)
 * - Enumerating also on prototype properties! (to prevent it use .hasOwnProperty()
 */

Object.prototype.test = 'testValue'

const person = {
    name: 'Marcin',
    job: 'developer'
}

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value', person[key])
    }
}

/**
 * Iterating on values
 * Iterating only on iterables values
 * Get iterator by SOMETHING[Symbol.iterator]
 * Not for objects (because they are not iterable by default) - needs custom implementation
 */

const positions = ['developer', 'manager']

console.log(positions[Symbol.iterator]) // function for Iterable, undefined when is not iterable

for (const value in positions) {
    console.log(value)
}