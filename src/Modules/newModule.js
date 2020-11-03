const name = 'test_module'

function sayHello() {
    return name;
}


export default sayHello;
// named export
const data = {
    message: 'Default'
}

export { data }
// export { data as anotherTest }