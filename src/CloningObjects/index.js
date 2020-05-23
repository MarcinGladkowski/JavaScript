const cloneDeep = require('lodash/cloneDeep');
// Primitive (copy) vs Objects (reference)

const John = {
    name: 'John',
    skill: { name: 'piano', level: 4}
}

// problem with reference of skill (object) - shallow copy

// Object assign
const Bob = Object.assign({}, John);

// spread operator
const Bob2 = {...John}

// deep copy
const Bob3 = JSON.parse(JSON.stringify(John)); // Json not get functions, date etc.

// 3-part libraries
//lodash clonedeep
const Bob4 = cloneDeep(John)
Bob4.skill.level = 2;

console.log([
    John, Bob4
])
