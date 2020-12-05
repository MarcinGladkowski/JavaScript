`
Usage of SET:
- elements are indexed by specific key, not like in array as numeric key
- elements must be unique

Props of using SET ?
- is faster!
- O(1) for SET, O(N) for array! -> for SET is always the same!

`

// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Methods

// Simple tests!

let arr = [], set = new Set(), n = 1000000;

for (i = 0; i < n; i++) {
    arr.push(i)
    set.add(i)
}

let result;
console.time('Array')
result = arr.indexOf(123123) !== -1
console.timeEnd('Array') // 0.263ms
console.time('Set')
result = set.has(123123)
console.timeEnd('Set') // 0.01ms

// useful things
// remove duplicates
const duplicateCollection = ['A', 'A', 'B', 'B', 'C']
let uniqueCollection = new Set(duplicateCollection);
console.log(uniqueCollection)
// still keep in array
let uniqueCollectionArray = [...new Set(duplicateCollection)]
console.log(uniqueCollectionArray);

// example exercise
let numbers = [3, 5, 1, 4]
let sum = 9;
// return True when 4 + 5 = 9 (some 2 elements compare to 

let multiplications = new Set();
numbers.forEach((number, index, array) => {
   array.map((element) => {
    if (number != element) {
        multiplications.add(element + number)
    }
   })
})

console.log(multiplications.has(sum))


// shorter version 
const findSum = (arr, sum) => arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));
console.log(findSum(numbers, sum))