/**
 * Principle violation
 */
class Animal {
    constructor(name) {}
}

class Lion extends Animal {
}

class Mouse extends Animal {

}

const animals = [
    new Lion('Timon'),
    new Mouse('Pumba')
]

function animalLegCounter(animals) {
    animals.forEach(function(animal) {
        if (typeof animal === Lion) {
            console.log(LionLegCount(animal))
        }
        if (typeof animal === Mouse) {
            console.log(MouseLegCount(animal))
        }
    })
}

/**
 * Proper solution
 */
class BetterAnimal {
    LegCount();
}

class BetterLion extends BetterAnimal {
    LegCount();
}


function betterAnimalLegCounter(animals) {
    animals.forEach(function(animal) {
        animal.LegCount()
    })
}
