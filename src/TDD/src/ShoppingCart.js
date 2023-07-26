class ShoppingCart {


    constructor() {
        this.items = []
    }

    getTotalPrice() {
        return this
            .items
            .reduce((agg, item) => agg += item.price, 0)
    }

    addItem(item) {
        this.items.push(item)
    }
}

module.exports = ShoppingCart