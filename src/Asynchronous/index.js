// base from https://www.youtube.com/watch?v=5jcOJcY6MEE&ab_channel=eduweb.pl

// Higher order function
const modify = (x, action) => action(x)
modify(5, (x) => x * 2)

// currying 
const curr = (x) => (y) => x + y;
curr(5)(4)

// pure functions


// Event loop - 
// Sandbox with examples: http://latentflip.com/loupe/