import { addAgeToPerson } from './index'; 

test('check change of properties in person object', () => {
    
    const person = {
        name: 'TestMarcin'
    }
    
    const newPerson = addAgeToPerson(person, 31)
    
    expect(newPerson).toEqual({ name: "TestMarcin", age: 31 })
    expect(person).not.toEqual({ name: "TestMarcin", age: 31 })
})