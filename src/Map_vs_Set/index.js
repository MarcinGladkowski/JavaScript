// Set
setData = new Set()

/**
 * Some data are adding to our set. 
 */
developer1 = { id: 1, name: 'Marcin' }

setData.add(developer1)

console.log(setData.has(developer1))

/**
 * We received data for example from other data soruce
 * and want to check if it store in our Set!
 */
developer2 = { id: 1, name: 'Marcin' }

/** 
 * The object is the same, but it's not a reference to original object
 */
console.log(setData.has(developer2))

/**
 * But on reference works!
 */
console.log(setData.has(developer1))


console.log(developer1 == developer2)


// Map
mapData = new Map()


developer1 = { id: 1, name: 'Marcin' }

mapData.set(developer1.id , developer1)

console.log(mapData)

console.log(mapData.has(developer1.id))

// developer1.languages = ['JavaScript']

developer2 = { id: 1, name: 'Marcin' }

console.log(mapData.has(developer2.id))
