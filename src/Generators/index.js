/**
 * Generators
 *
 * Are great for memory performance
 *
 * It's not replacement for Promise/async-await
 *
 * In a lot of await functions we don't have a real order of execution
 * but in generators we have full control on executing next steps.
 *
 */

function* foo() {
    yield 'foo';
    yield 'bar'
}

const iteratorObject = foo(); // Iterator object

console.log(typeof iteratorObject)

console.log(iteratorObject.next()) // { value: 'foo', done: false }
console.log(iteratorObject.next()) // { value: 'bar', done: false }


function* bar() {
    yield 1;
    yield 'Marcin';
    yield () => {}
}

/**
 * Use generator to resolve fibonacci
 */
function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;

    while (true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        let reset = yield current;

        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}


