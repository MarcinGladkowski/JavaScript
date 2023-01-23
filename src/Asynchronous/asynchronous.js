/**
 * JS is synchronous language. JS is asynchronous in NodeJS or browser.
 */
console.log('testing')

/**
 * Executes after both console logs.
 * Function added by Browser engine (window) or in NodeJS (global) - V8 for both
 * Implemented to not blocking main loop of execution
 */
setTimeout(() => console.log('I am late!'), 500)

console.log('testing')
