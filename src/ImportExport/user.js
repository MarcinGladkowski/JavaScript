// another scope, like IFFE, in app js cannot 'see' these variables
// export variables/objects/functions


export const user = {
    name: 'Marcin'
}

export const introduction = () => {
    console.log('Hello!')
}

const User = {
    name: 'Marcin'
}

// only one default export for file
export default User;
