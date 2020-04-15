const songs = [
    { name: "Carry on Wayward Son", duration: 322, released: 1976},
    { name: "Back in Black", duration: 231, released: 1980},
    { name: "Cold as Ice", duration: 201, released: 1977},
    { name: "Eye of the tiger", duration: 246, released: 1982}
];

// example 1 - find song with longest name
function getLongest(songs) {
    let result = songs[0];
    for (let i = 1, { length } = songs; i < length; i++) {
        if (result.duration < songs[i].duration) result = songs[i]
    }
    return result;
}

const longestSong = getLongest(songs)
console.log(longestSong)
// example 2 - find song with shortest name
function getShortest(songs) {
    let result = songs[0];
    for (let i = 1, { length } = songs; i < length; i++) {
        if (result.duration > songs[i].duration) result = songs[i]
    }
    return result;
}

const shortestSong = getShortest(songs)
console.log(shortestSong)
// what else ?

// imperative way of coding - step by step
const reduce = (reducer, initial, arr) => {
    let result = initial;
    for (let i = 0, { length } = arr; i < length; i++) {
        result = reducer(result, arr[i]) ? result : arr[i]
    }
    return result;
}

const filter = (reducer, arr) => reduce(reducer, [], arr);
// pass only function (statement) and array!
const shortest = filter((prev, next) => prev.duration < next.duration, songs);
console.log(shortest)
// easy add new statement!
const longest = filter((prev, next) => prev.duration < next.duration, songs);
console.log(longest)

// use Functional programming, use reduce implementation in JS
// declarative programing - focus only on that what you do
const functionalShortestReducer = (prev, next) => prev.duration < next.duration ? prev : next
const functionalShortest = songs.reduce(functionalShortestReducer, songs)
console.log(functionalShortest)
