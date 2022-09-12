let shopingCart = (function () {
    class ShopingCart {
        constructor() {
            this.shoplist = []
            this.totalPrice = 0
        }
        addShopingItem(itemName, quantity, price) {
            let productInCart = this.shoplist.filter(item => item.name === itemName)[0]
            if (productInCart) {
                productInCart.pieces += Number(quantity)
                productInCart.totalSum = (productInCart.pieces * Number(price)).toFixed(2)
            } else {
                this.shoplist.push({
                    name: itemName,
                    pieces: Number(quantity),
                    totalSum: (Number(quantity) * Number(price)).toFixed(2)
                })
            }

        }
        removeShopingItem(itemName) {
            let productToRemove = this.shoplist.filter(item => item.name === itemName)[0]
            this.shoplist.splice(this.shoplist.indexOf(productToRemove))
        }
    }
    return new ShopingCart()
})()