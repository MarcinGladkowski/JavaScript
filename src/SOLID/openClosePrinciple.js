/**
 * Principle violation
 */
class Animal {
    constructor(name) {}
    getAnimalName() {}
}

const animals = [
    new Animal('lion'),
    new Animal('duck')
]

function animalSound(animals) {
    animals.forEach(function(animal) {
        if (animal.getAnimalName() === 'lion') {
            console.log('roar')
        }
        if (animal.getAnimalName() === 'mouse') {
            console.log('squeak')
        }
    })
}

animalSound(animals)

/**
 * Proper solution
 */
class Lion extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {}
}

class Mouse extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {}
}

function betterAnimalSound(animals) {
    animals.forEach(function (animal) {
        animal.makeSound()
    })
}
betterAnimalSound(animals)