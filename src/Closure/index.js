console.log('Closure')

function outer() {
    name = 'test';

    function inner() {
        return name;
    }

    return inner;
}

console.log(outer()); // function

console.log(outer()()); // test