import User, * as userModule from './user.js';
// * get all exported and add alias
// import User, { user as testUser, introduction } from './user.js';
// app.js:1 Uncaught SyntaxError: Cannot use import statement outside a module
// import/export - browser/node (another implementation)
// add type="module" to app.js
// as -> add allias
console.log('app.js');

console.log(userModule);
