// Callbacks

const sum = (x, y) => x + y
const divide = (x , y) => x - y;

const calc = (x, y, callback) => callback(x, y)

console.log(calc(3, 5, sum))
console.log(calc(3, 5, divide))


// native function SetInterval
setInterval(() => {
    console.log('test')
}, 1000)
// or
const show = () => console.log('show')

setInterval(show, 1000);

// addEventListener

