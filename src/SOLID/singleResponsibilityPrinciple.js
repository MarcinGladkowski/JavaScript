/**
 * https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688
 *
 * Principle violation
 */
class Animal {
    constructor(name) {}
    getAnimalName() {}
    saveAnimal(animal) {}
}


/**
 * Proper solution
 */
class Animal {
    constructor() {}
    getAnimalName() {}
}

class AnimalRepository {
    getAnimal(a) {}
    saveAnimal(a) {}
}

