import fetch from 'node-fetch'

`
* array.includes() -> we cannot use callback, useful to primitive values, not for objects (works on reference)
* array.some() -> if some elemens compare
* array.find() -> element or undefined, returns only one element
* array.filter() -> returns new array
* array.findIndex() -> get callback
* array.indexOf()
* array.reduce()
`

async function getRickandMortyCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3');
    const characters = await response.json();

    console.log(characters.findIndex(el => el.name === 'Morty Smith'))

    return characters
}

getRickandMortyCharacters()