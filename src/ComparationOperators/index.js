// == // Koercja typu
console.log(true == 1);

/* 
* Koercja typow - wykonuje w zapetleniu az sprawdzi pasujace warunki, w innym przypadku krok 10 zwroci false
* 1. Sprawdzenie typow :1 == 1  => return 1 === 1
* 2. null == undefined => return true
* 3. undefined == null => return true
* 4. Czy liczba i string 1 == '1' (zmiana drugiego typu na number) => return 1 == Number('1')
* 5. '1' == 1 (analogicznie do poprzedniego)
* 6. true == (cokolwiek) => return Number(true) == ..
* 7. ... ==  true => return ... = Number(false)
* 8. '1' == [1, 2, 3] => return '1' == ToPrimitive(Object())
* 9. [1,2,4] == 1 => analogicznie
* 10. return false
*/

// w JS wszystko poza typem prymiywnynm jest obiektem

// ciekawostka 
console.log(typeof NaN); // 'number'
console.log([1 ,3].toString())
console.log('0,2' == [0,2]) // true

// === 
console.log(true === 1); // false
// because
console.log([
    typeof 1, // number
    typeof true // boolean
])