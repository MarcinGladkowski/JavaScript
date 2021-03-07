`
 . - dot sign means any character
`
console.log(/marcin@test.xyz/.test('marcin@test2xyz')) // true

console.log(/.../gi.exec('marcingladkowski')) // mar -> spaces also!


/** 
 * ^ - beginning of the line
 * $ - end of the line
 */
console.log(/^abc$/.test('marcinabctest')) // false 
console.log(/^abc$/.test('abc')) //true

/**
 * \w - any word, letter
 */
console.log('marcin training regex expressions'.match(/\w/g)) // all letters as found regex
console.log(/\w/g.exec('marcin training regex expressions')) // only m


/**
* \W - everything what isn't word/letter
*/

/**
* \t - tabulator sing
* \n - new line
*/


/**
* phone regex
* 
* \d\d\d-\d\d\d\-\d\d\d (basic - bad) 999-999-999
* 
* \d{3}-\d{3}-\d{3} 999-999-900
* 
* \d{3}(-| )\d{3}(-| )\d{3} 999 999 999 -> using pipe - or whitespace
* 
* (\d{3}(-| ){2}\d{3} -> using groups ()
* 
*/


/**
* email regex - my first solution
* Bad solutions - \w get whitespace also
*/
emailRegex = new RegExp("\w+[@]\w+\.\w+", "g")

console.log('bmoyes@utexas.edu'.match(/\w+[@]\w+\.\w+/))
console.log(/\w+[@]\w+\.\w+/.test('bmoyes@utexas.edu'))

/**
 * 
 * training regexp
 * http://emailregex.com/ -> how to build extra email regex
 * 
 */


/**
 * Why exec() works in different way to comparison with match()
 */


/**
 * Regex flags
 * 
 * 
 * g - global, for all not for the first match
 * m - multiline
 * 
 */