console.log('Closure')

// Closure:
// - can using encapsulation in current js
// - module pattern

function outer() {
    name = 'test';

    function inner() {
        return name;
    }

    return inner;
}

console.log(outer()); // function

console.log(outer()()); // test


const init = () => {
    let counter = 0

    return {
        add() {
            return counter+=1
        },
        getCounter() {
            return counter
        }
    }
}

let counter = init()
counter.add()
counter.add()
counter.add()

console.log(counter.getCounter())

