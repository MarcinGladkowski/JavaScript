const { TestScheduler } = require('jest')
import {sum } from './sum'; 

test('add 2 and 4', () => {
    expect(sum(2, 4)).toBe(6)
})