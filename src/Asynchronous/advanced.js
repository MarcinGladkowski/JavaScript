// Callbacks
const multiply = (x, y) => x * y;

multiply(5,4)

const ref = multiply

ref(2, 4)

const double = (x, callback) => callback(x, 2) // Higher order function

// What we get ? We can execute callback function in specific time!

// Callback #1 
double(5, multiply)

// Callback #2
[1, 2, 3].filter((i) => i % 2) // declarative programming

// Callback #3
const btn = document.querySelector('btn')
btn.addEventListener('click', () => {
 // logic    
})


// Currying
const add = function(a, b) {
    return a + b
}

add(2, 4)

const currying = function(a) {
    return function(b) {
        return a + b
    }
}

const part1 = currying(2)
const part2 = part1(4)

// or currying(2)(4)