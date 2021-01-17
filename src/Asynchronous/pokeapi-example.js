const request = require('request');
const fetch = require('node-fetch');

const name = 'ditto'

request(`https://pokeapi.co/api/v2/pokemon/${name}`, (err, res, body) => {
    if (err) console.log(err)
    const pokemonData = JSON.parse(body)
    // call other request
    const pokemonTypeUrl = pokemonData.types[0].type.url
    // other request body functions .... -> callback hell
})



// Use promises
const promise = new Promise((resolve, reject) => {
    resolve('ok')
    reject(error)
})


promise.then()
promise.catch()
promise.finally()

const getPokemon = (name) => {
    return new Promise((resolve, reject) => {
        request(`https://pokeapi.co/api/v2/pokemon/${name}`, (err, res, body) => {
            if (err) {
                reject(error)
            }
            resolve(JSON.parse(body))
        })
    })
}

const getPokemonType = (type) => {
    return new Promise((resolve, reject) => {
        request(type, (err, res, body) => {
            if (err) {
                reject(error)
            }
            resolve(JSON.parse(body))
        })
    })
}

getPokemon(name).then((res) => {
    getPokemonType(res.types[0].type.url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}).catch((err) => console.log(err))


Promise.all([getPokemon('ditto'), getPokemon('pikatchu')])


// Async await
const asyncPokemonFunction = async () => {


    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemon = await data.json();
        console.log(pokemon)
        console.log('Pokemon data from async')
    } catch(err) {
        console.log(err.message)
    }

}

//asyncPokemonFunction()

// how to handle all errors ?
// Async await
const asyncPokemonFunctionWithErrorHandling = async () => {

    const handleAllErrors = fn => (...params) => fn(...params).catch(err => {
        console.log(err.message)
    }) 

    const getPokemon = handleAllErrors(async (name) => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return await data.json();
    })

    const pokemon =  await getPokemon(name)
    console.log(pokemon)
}

console.log(asyncPokemonFunctionWithErrorHandling())
console.log('form async with handling')