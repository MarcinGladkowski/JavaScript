/**
 * All properties have own descriptor - metadata about property
 */
const person = {
    name: 'Marcin'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'))
/**
 * {
 *   value: 'Marcin',
 *   writable: true,
 *   enumerable: true,
 *   configurable: true
 * }
 */

Object.defineProperty(person, 'job', { enumerable: false }) // job won't be enumerable!

for (const key in person) {
    console.log(key)
}