sayHello()

/**
 * Function declaration
 * - can be used everywhere (working with hoisting)
 * - creating context
 */
function sayHello() {
    console.log('hello')
}

sayHello()

/**
 * Cannot be executed/use above declaration (hoisting)
 */
const sayHello2 = function () {
    console.log('hello2')
}

sayHello2()


/**
 * Cannot be executed/use above declaration (hoisting)
 * Not creating execution context
 */
const sayHello3 = () => {
    console.log('hello3')
}

sayHello3()


const car = {
    name: 'Ferrari',
    // the same meaning as display: function display() <- but this syntax doesn't have sense
    // Arrow function cannot be use -> we need to create context to display name property
    display: function () {
        console.log(this.name)
    }
}

car.display()


