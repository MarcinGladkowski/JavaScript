const person = {}


// previous syntax

let street;
if (person.address) {
    street = person.address.street
}

// optional chaining syntax
const secondStreet = person.address?.street


// works also with arrays
const someArrValues = [
    { name: 'Marcin'}
]

someArrValues[0] && someArrValues[0].name // traditional

const test = someArrValues[0]?.name

// and with functions
const container = {
    somefunction: () => {

    }
}

conainer && container.somefunction() // traditional

container.somefunction?.()


// returns always 'undefined'!
// Using chaining operator prevent to fail code!