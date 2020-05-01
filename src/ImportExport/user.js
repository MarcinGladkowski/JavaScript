// another scope, like IFFE, in app js cannot 'see' these variables
// export variables/objects/functions


const user = {
    name: 'Marcin'
}

const introduction = () => {
    console.log('Hello!')
}

const User = {
    name: 'Marcin'
}

// // only one default export for file
export default User;

// choose what you want export
export default {
    user: user2,
    introduction // the same name
}

// browser as node
// import Vue from 'vue' & const vue = require('vue');
// import/export -> browsers (node from 13)
// require -> node 

