/**
 * JS based on languages: Scheme, Java
 *
 * //  "type": "module" in package.json occur that console.log(this) returns undefined!
 *
 * The context of execution the function really matter!
 *
 * Object literal = {} not creating an context 'this' itself
 */

let someValue = 33

//module.exports.foo = someValue

/**
 * for node the 'this' is and module.exports default as empty object.
 */

console.log(this) // node: {} browser: window

const person = {
    name: 'Tom',
    showThis1: function () {
        console.log('showThis1', this)

        const showThis2 = () => {
            console.log('showThis2', this)
        }
        showThis2()

        const showThis3 = function () {
            console.log('showThis3', this)
        }
        showThis3()
    },
    showThis4: () => { console.log('showThis4', this) },
    showThis5() { console.log('showThis5', this) }
}
person.showThis1()
person.showThis4()
person.showThis5()

/**
 * function in object = this from object
 */
const user = {
    name: "Json",
    showName: function () {
        console.log(this) // -> user object (this a context of execution)
    },
    /**
     * this is a shortcut version from this above!
     *
     * showName: function() {} === showName() {}
     */
    showName2() {
        console.log(this) // -> user object (this a context of execution)
    }
}
user.showName()
user.showName2()

const worker = {
    name: "Dog Json",
    /**
     * Don't create context
     */
    showName() {

        let logName = () => {
            console.log('logName', this)
        }

        logName()

        console.log('showName', this) // -> undefined undefined
    },

    showNameArrow: () => {
      console.log('showNameArrow', this)
    }
}
worker.showName()
worker.showNameArrow() // empty object {}


const Cat = function () {
    this.name = 'Ksyksy'
}

Cat.prototype.sound = function () {
    console.log(this)
}

let cat = new Cat()
cat.sound()

