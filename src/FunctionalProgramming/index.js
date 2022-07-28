/**
 * Examples from:
 * - https://thecodest.co/blog/power-of-functional-programming-in-javascript-part-1-introduction
 * - https://thecodest.co/blog/power-of-functional-programming-in-javascript-part-2-combinators
 *
 * Imperative programming example
 */
const numbers = [1, 2, 3, 4 , 5]
const result  = []
/**
 * second power and get only not event numbers
 */
for(let i = 0; i < numbers.length; i++) {
    let poweredNumber = Math.pow(numbers[i], 2);
    if (poweredNumber & 1) { // bitwise operators are faster than % (modulo)
        result.push(poweredNumber);
    }
}

console.log(result)


/**
 * Declarative programming example
 */
const powerNumber = (number) => Math.pow(number, 2)
const isOdd = (number) => number & 1;

const declarativeResult = numbers.map(powerNumber).filter(isOdd)

console.log(declarativeResult)

/**
 * Pure functions
 * - do not use globals
 * - not have side effects
 * - for some parameters returns the same result
 */
const multiply = (a, b) => a * b;


/**
 * Combinators
 */

/** Tap */
const tap = (fn) => (value) =>  {
    fn(value)
    return fn;
}
const display = (el) => { console.log(el)}
tap(display)(10);

/**
 * Curring
 * It's splits the arguments of a function and makes it possible to call them sequentially
 * */
const curry = (fn) => {
    const curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        }
        return fn(...args);
    }
    return curried
}

const sum = (a, b, c) => a + b + c
const currySum = curry(sum)

console.log(currySum(1)(2)(3))
console.log(currySum(1)(2,3))
console.log(currySum(1,2),3)
console.log(currySum(1,2,3))

/**
 * Pipe/Compose
 */
const pipe = (...fns) => (value, ...args) =>
    fns.reduce((v, f, i) => {
        return i === 0 ? f(v, ...args) : f(v)
    }, value)

const compose = (...fns) => (value, ...args) =>
    fns.reduceRight((v, f, i) => {
        return i === 0 ? f(v, ...args) : f(v)
    }, value)

/** Imperative example */
const sine = (val) => Math.sin(val * Math.PI / 180)
console.log('sine', sine(90))

const multiplyBy = curry((a, b) => a * b)
const divideBy = curry((a, b) => b / a)

const divideByTwo = divideBy(2)
console.log(divideByTwo(10))

/** Declarative example */
const sinePipe = pipe(multiplyBy(Math.PI), divideBy(180), Math.sin)
console.log('sinePipe', sinePipe(90));

const sineCompose = compose(
    Math.sin,
    divideBy(180),
    multiplyBy(Math.PI)
)
console.log('sineCompose', sineCompose(90));


/** Fork
 * - process value in two ways and combine the result
 */

const fork = (join, fn1, fn2) => (value) => join(fn1(value), fn2(value))

const length = (array) => array.length
const sumTwo = (array) => array.reduce((a, b) => a + b, 0)
const divide = (a, b) => a / b

const arithmeticAverage = fork(divide, sumTwo, length)

console.log(arithmeticAverage([5, 3, 2 , 8, 4, 2]))

/** Alternation
 *
 */
const alt = (fn, orFn) => (value) => fn(value) || orFn(value)

// helper
const uuid = () => 111111;

const users = [{
    uuid: 123456,
    name: "William"
}]

const findUser = ({ uuid: searchUuid }) => users.find(({ uuid }) => uuid === searchUuid);
const newUser = data => ({ ...data, uuid: uuid() })

const findOrCreate = alt(findUser, newUser);

console.log(findOrCreate({ uuid: 123456 })) // found
console.log(findOrCreate({ name: 'John' })) // create

/** Sequence
 *
 */

const seq = (...fns) => (val) => fns.forEach(fn => fn(val))

const appendUser = (id) => ({ name }) => {
    console.log(name) // or some action on ex. document
}

const printUserContact = pipe(
    findOrCreate,
    seq(
        console.log,
        console.info
    )
)

printUserContact(users)

/**
 * Functor
 */
const Functor = value => ({
    map: fn => Functor(fn(value)),
    chain: fn => fn(value),
    of: () => value
})

const decrease = value => value - 1
const increase = value => value + 1

/** Imperative example */
const randomInt = (max) => Math.floor(Math.random() * (max + 1))
const randomNumber = randomInt(200)
console.log(decrease(randomNumber))

/** Declarative example */
const randomIntWrapper = (max) =>
    Functor(max)
        .map(increase)
        .map(multiplyBy(Math.random()))
        .map(Math.floor)


const randomNumberFromWrapper = randomIntWrapper(200)
console.log(randomNumberFromWrapper) // container -> Functor
console.log(randomNumberFromWrapper.of())
console.log(randomNumberFromWrapper.chain(decrease))

/** Monad Maybe */

const Just = value => ({
    map: fn => Maybe(fn(value)),
    chain: fn => fn(value),
    of: () => value,
    getOr: () => value,
    filter: fn => fn(value) ? Just(value) : Nothing(),
    type: 'just'
})

const Nothing = () => ({
    map: fn => Nothing(),
    chain: fn => fn(),
    of: () => Nothing(),
    getOr: substitute => substitute,
    filter: () => Nothing(),
    type: 'nothing'
})

const Maybe = value =>
    value === null || value === undefined || value.type === 'nothing'
        ? Nothing()
        : Just(value)


/** Imperative example */
const randomIntForMonadExample = (max) => {
    if (max > 0) {
        return Math.floor(Math.random() * (max + 1))
    } else {
        return 0;
    }
}
const bookMiddlePage = 200;

console.log(randomIntForMonadExample(10) || bookMiddlePage)
console.log(randomIntForMonadExample(-1) || bookMiddlePage)

/** Declarative example (using Monad Maybe) */
const randomIntMonadWrapper = (max) =>
    Maybe(max)
        .filter(max => max > 0)
        .map(increase)
        .map(multiplyBy(Math.random()))
        .map(Math.floor)

console.log(randomIntMonadWrapper(10).getOr(bookMiddlePage))
console.log(randomIntMonadWrapper(-1).getOr(bookMiddlePage))
