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
            let listOfCartItems = document.getElementById('cartItemsList')
            let productToRemove = this.shoplist.filter(item => item.name === itemName)[0]
            let piecesInCart = document.getElementById('itemsInCart')
            this.shoplist.splice(this.shoplist.indexOf(productToRemove), 1)
            painter.drawCartList(listOfCartItems, this.shoplist)
            this.getItemsInCart()
            this.sumTotal()
        }
        getItemsInCart(){
            let piecesInCart = document.getElementById('itemsInCart')
            let totalItems = 0
            this.shoplist.forEach(item => totalItems += Number(item.pieces))
            piecesInCart.innerText = totalItems
        }
        sumTotal(){
            let totalOrderPrice = document.getElementById('price-for-oreder')
            let sumedPrice = 0;
            this.shoplist.forEach(el => sumedPrice += Number(el.totalSum))
            totalOrderPrice.textContent = sumedPrice.toFixed(2);
        }
    }
    return new ShopingCart()
})()