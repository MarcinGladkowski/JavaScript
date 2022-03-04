let customer = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@gmail.com' };
/**
 * ### Function.prototype.call() ###
 *
 *
 * this context get if from first argument (customer)
 * arguments passing separately with coma (text, text2)
 */
function greeting(text, text2) {
    console.log(`${text} ${text2} ${this.name}`)
}

greeting.call(customer, 'Hello', 'Hello2')
greeting.call(customer2, 'Hello', 'Hello2')


/**
 * ### Function.prototype.apply() ###
 *
 * Allow to passing arguments to function as array
 */
function greeting2(text, text2) {
    console.log(`${text} ${text2} ${this.name}`)
}

greeting2.apply(customer, ['Hello', 'Hello2'])
greeting2.apply(customer2, ['Hello', 'Hello2'])

/**
 * ### Function.prototype.bind() ###
 *
 * Allow to executed command later with passed context (this)
 * Useful for events
 */

function greeting3(text) {
    console.log(`${text} ${this.name}`)
}

let hello1 = greeting3.bind(customer)
let hello2 = greeting3.bind(customer2)

hello1('Hello')
hello2('Hello2')