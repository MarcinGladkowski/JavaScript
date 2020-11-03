'use strict' // show messages about overwrite properties

console.log('objects')

const user = { name: 'user' }

const newUser = user;

newUser.name = 'newUser';

console.log(user)

// Shallow freezing
// Object.freeze(user) <- not working on nested object

// copy <- only shallow copy
const anotherUser = { ...newUser }

// copy - another solution
const anotherUser2 = JSON.parse(JSON.stringify(newUser)) // removes methods