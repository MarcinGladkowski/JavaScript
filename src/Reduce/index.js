const orders = [31.54, 19.99, 4.55];

const sum = orders.reduce((total, amount) => total + amount);
console.log(sum);

// avg
const avg = orders.reduce((total, amount, index, array) => {
    total += amount;

    if (index === array.length -1) return total / array.length;

    return total;
});

console.log(avg);

// find uniques values using reduce
const elements = [1, 2, 3, 3, 4, 5]
const uniques = elements.reduce((total, member) => {
    if (total.indexOf(member) === -1) total.push(member)
    return total;
}, []);
console.log(uniques);

// easiest way using Set object
console.log(new Set(elements))

// nested arrays
const data = [[1, 2, 3] , [4, 5, 6]];
data.reduce((total, arr) => total.concat(arr))
const flatted = data.flat(Infinity);
console.log(flatted);

// tree flat
const tree = {
    id: 1,
    children: [
        { id: 2 },
        { id: 3, 
          children: [ { id: 4} , {id: 5}]
        }
    ]
}

const flat = (obj) => {
    const arr = Array.isArray(obj) ? obj : [obj];
    return arr.reduce((result, value) => {
        result.push(value);
        if (value.children) {
            result = result.concat(flat(value.children));
            delete value.children;
        }
        return result
    }, []);
}

console.log(flat(tree));


// modify array
const formData = {
    name: 'Adam',
    'billing_address_city': 'Warsaw',
    'billing_address_street': 'ul. Pomorska',
    'shipping_address_city': 'Krakow',
    'shipping_address_street': 'ul. Karmelicka'
}

// own implementation
const mergeAddress = (data, keyParam) => {
    regex = new RegExp(keyParam)
    const filtered = Object.keys(data).filter((name) => regex.test(name));
    result = {};
    filtered.forEach(key => {
        resultKey = key.replace(regex, '').substring(1, key.length);
        result[resultKey] = data[key];
        delete data[key];
    });

    data[keyParam] = result;

    return data;
};

console.log(mergeAddress(formData, 'billing_address'));
console.log(mergeAddress(formData, 'shipping_address'));
