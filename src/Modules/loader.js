const customModule = require('./commonModule');
import sayHello, { data } from './newModule';

console.log(customModule.sayHello());
console.log(sayHello())
