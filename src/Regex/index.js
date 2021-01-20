// @see https://bulldogjob.pl/news/1470-wyrazenia-regularne-w-javascript

// Two ways to create:
const pattern = /Medi[a-zA-Z]*/
const pattern2 = new RegExp("/Medi[a-zA-Z]*/")

console.log('\n')
/**
 * Regex main key words:
 * i = case insensitive
 */
console.log(/Medi[a-zA-Z]*/.test('Medical'))
console.log(/Medi[a-zA-Z]*/.test('MediCAL'))
console.log(/Medi[a-zA-Z]*/i.test('mediCAL')) // works because of /i

console.log('\ng: \n')
/** g = all found patterns, without this works only first one */
console.log(/is/.exec("Is this all there is?"))
console.log(/is/g.exec("Is this all there is?"))


console.log('\nm: \n')
/** m = (multiline) each line separately */
console.log(/^is/m.exec("\nIs th\nis it?"))

/** y = (sticky matching) */


/** u = allows unicode \u.. */


console.log('\nalternatives: \n')
/** alternatives */
console.log(/buil(t|d)/.test('build'))
console.log(/buil(t|d)/.test('built'))

console.log('\nstart of string: \n')
/** start of string */
console.log(/^build/.test('build'))
console.log(/[A-Z]uild/.test('Zuild'))


console.log('\nSet\n')
/** Set */
console.log(/[abc]test/g.exec('atest'))
console.log(/[^abc]test/g.exec('ztest')) // start with ^

/**
 * [a-z] is the same as [abcdefghijklmnopqrstuvwxyz]
 * [A-Z] -> like above
 */

console.log('\nAlternation\n')
 /**
  * Alternation |
  */
 console.log(/(a|b)/.exec('a'))

console.log('\n')
 /**
  * The sing is * zero or unlimited times
  */
 console.log(/Medi[a-zA-Z]*/.exec('Mediuuuum')) // without * catch only Mediu

 console.log('\n')
 /**
  * ^ and $
  */
 console.log(/Medi[a-zA-Z]*/.exec('zdMedium')) // match as Medium but starts with 'zd'
 console.log(/^Medi[a-zA-Z]*/.exec('zdMedium')) // don't match