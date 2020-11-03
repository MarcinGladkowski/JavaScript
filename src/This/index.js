console.log('This');
'use strict'

// arrow function not create a context
function outsideTheClass(cb) {
    return cb;
}

class newClass {
    method() {
        return outsideTheClass(() => {
            return this;
        })
    }
}

const newObj = new newClass()
console.log(newObj.method());


class newSecondClass {
    method() {
        return outsideTheClass(function() {
            return this;
        })
    }
}

const newObj2 = new newSecondClass();
console.log(newObj2.method());

// bind
class newThirdClass {
    method() {
        return outsideTheClass((function() {
            return this;
        }).bind(this))
    }
}

const newObj3 = new newThirdClass();
console.log(newObj3.method());

// manually add context - bind, call, apply
function customThis() {
    return this;
}

const obj = { x: 1}

const bounded = customThis.bind(obj);

console.log(bounded()); // {x:1}
// .call & .apply


