/**
 * Promise can be in statuses: pending fulfilled (success - resolved), rejected (error)
 * Code is cleaner
 * Waiting for resolving async function synchronously can slower application
 * We have to add try {} catch {} finally block to get errors
 * To improve more than one invoke async function we can use Promise.all([]) function
 */

async function sayHello(name) {
    return `Hello world ${name}`
}

// await must be invoked in another function
async function waitOnHello() {
    const result = await sayHello('Marcin')
    console.log(result)
}

waitOnHello()



