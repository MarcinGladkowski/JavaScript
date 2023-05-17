/**
 * @see https://www.youtube.com/watch?v=SBv7T5X8azs
 *
 * https://regex101.com
 * https://regexr.com
 * https://regextester.com
 *
 * abc
 * [abc] -> only one character!
 * [abc]{5}
 * [a-z]
 * (first|second)
 *
 *
 * modifiers: /g /i /m
 */


const exp = /stop?/

const exp2 = new RegExp(/stop?/)

exp.test('Jan Kowalski') // Boolean

'Jan Kowalski'.match(exp)

'Jan kowalski'.replace(exp, 'test')

// exercise
const reg = new RegExp(/^[a-z].*[0-9]$/)

console.log(
    reg.test('a#9'),
    reg.test('a9'),
    reg.test('a###9'),
)

// named groups
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups
const coordsGroup = new RegExp(/(?<xcoord>X:\d{2});(?<ycoord>Y:\d{2})/);

const coords = 'X:20;Y:45';

const matchResults = coords.match(coordsGroup)

console.log(
    matchResults.groups.xcoord,
    matchResults.groups.ycoord
)





