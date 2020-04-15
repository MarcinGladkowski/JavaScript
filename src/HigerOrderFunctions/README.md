## First class functions
* Treat functions like each other values - e.g set to variables 

```js
const square = num => num ** 2;
const secondPower = square;

secondPower(2);
```
* Pass functions as argument (composition) 
```js
const logResult = (cb) => {
    console.log(cb(10))
}

logResult(square);
```
