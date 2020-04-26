// Main operations on functions e.g.

// Mapping 
const sum = (a, b) => a + b;

// Procedure
const update = (data) => {
    const user = usersDB.findById(user.id)
    user = { ...user, ...data}
    return userDB.save(user);
};

// I/O
const showMessage = (message) => {
    document.getElementById // ... show on UI
}

// pass values to functions
// pass by VALUE: Primitive Types (strings, Numbers, ...)
// pass by REFERENCE: Arrays & Objects

const totalPlayed = 100;

// Pure function (Idempotentna)
// - return always the same value/result by passing the same arguments
// - easy to testing
// - not modify variables outside function
// - referential transparency
const totalPlayingTime = (totalTime, sessionTime) => (totalTime += sessionTime);
totalPlayingTime(totalPlayed, 200);
console.log(totalPlayed);

// update using
let played = 100;
played = totalPlayingTime(played, 100);
played = totalPlayingTime(played, 100);
console.log(played);