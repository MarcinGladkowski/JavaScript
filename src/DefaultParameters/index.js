const welcome = (name = 'bro') => {
    return `Hi ${name}`
}


const register = (email = handleEmailError('email'), login) => {
    login = (login) ? login : email.split('@')[0]

    return {
        email,
        login
    }
}

const handleEmailError = (arg) => {
    throw new Error(`${arg} is required`)
}

console.log(register('test@test.pl', 'user1'))
console.log(register('test@test.pl'))
console.log(register())

/** 
 * use or (||)
 * Not work with 0 value
 */
const setVolume = (volume) => {
     return volume || 50
}

/**
 * nullish coalescing (compare with null and undefined)
 * @param {} volume 
 */
const setVolume2 = (volume) => {
    return volume ?? 50
}