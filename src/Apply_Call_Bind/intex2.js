/**
 * call()
 * apply()
 * bind()
 */

const car = {
    color: 'black',
    display: function () {
        console.log(this.color)
    },
    produce: function (factoryName) {
        console.log(`car ${this.color} produced in ${factoryName}`)
    }
}

const carA = {
    color: 'red'
}

car.display()
car.display.call(carA) // use context from carA by function display (not needed duplication)

car.produce.apply(carA, ['factoryA']) // call with additional arguments
car.produce.apply(carA, ['factoryB'])

car.produce.bind(carA, 'factoryB')() // bind context, need to invoke