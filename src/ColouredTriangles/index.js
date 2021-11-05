console.log('Coloured Triangles')

const exec = (input) => {
    let result = input;
    while(result.length > 1) {
        result = result.split('').reduce((acc, el, index, arr) => {
            const nextElement = arr[index+1]
            if (arr.length === 1) return acc += el;

            if (arr[arr.length-1] === index) return acc;
    
            if( (el === 'B' && nextElement === 'G') || (el === 'G' && nextElement === 'B') ) return acc += 'R'
                
            if ( (el === 'R' && nextElement === 'G') || (el === 'G' && nextElement === 'R' ) ) return acc += 'B'
            
            
            
            
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElePment === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            if ( (el === 'B' && nextElement === 'R') || (el === 'R' && nextElement === 'B') ) return acc += 'G'
            
            if (el === nextElement) return acc += el
            
            return acc;
        }, '');
    }
    return result;
}
console.log(exec('B'), exec('B') === 'B');
console.log(exec('GB'), exec('GB') === 'R');
console.log(exec('RRR'), exec('RRR') === 'R');
console.log(exec('RGBG'), exec('RGBG') === 'B');
console.log(exec('RBRGBRB'), exec('RBRGBRB') === 'G');
console.log(exec('RBRGBRBGGRRRBGBBBGG'), exec('RBRGBRBGGRRRBGBBBGG') === 'G');


// `
// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G

// RBRGBRBGGRRRBGBBBGG


// `

// `
// Test.assertEquals(triangle('GB'), 'R');
// Test.assertEquals(triangle('RRR'), 'R');
// Test.assertEquals(triangle('RGBG'), 'B');
// Test.assertEquals(triangle('RBRGBRB'), 'G');
// Test.assertEquals(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
// `