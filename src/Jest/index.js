const person = {
    name: "Marcin"
}

export const addAgeToPerson = (person, age) => ({
    ...person,
    age
}) 