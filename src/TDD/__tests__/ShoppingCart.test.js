const ShoppingCart = require('../src/ShoppingCart')
const assert = require("assert");

let shoppingCart;

beforeEach(() => {
    shoppingCart = new ShoppingCart()
})

test('Shopping cart has to return total price as 0', () => {
    expect(shoppingCart.getTotalPrice()).toBe(0)
})

test('Shopping cart should return 10 for one item', () => {
    shoppingCart.addItem({  price: 10 })

    expect(shoppingCart.getTotalPrice()).toBe(10)
})

test('Shopping cart should return 15 for two items', () => {
    shoppingCart.addItem({  price: 10 })
    shoppingCart.addItem({  price: 5 })

    expect(shoppingCart.getTotalPrice()).toBe(15)
})