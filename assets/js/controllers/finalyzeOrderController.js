(function () {
    let deliveryForm = document.getElementById('delivery-details')
    let totalOrderPrice = document.getElementById('price-for-oreder')

    deliveryForm.addEventListener('submit', function(event){
        event.preventDefault()
        const {name: {value: name},  number: {value: phoneNumber}, address: {value: userAdress}} = this.elements;

        userController.activeUser.history.push({
            date:(new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()),
            address: userAdress,
            products: shopingCart.shoplist.map(item => item.name),
            totalPrice: totalOrderPrice.innerText
        })
        window.localStorage.clear()
        window.localStorage.setItem('users', JSON.stringify(userController.users))
        let listOfCartItems = document.getElementById('cartItemsList')
        let historytable = document.getElementById('history-table')
        let lastItemIndex = userController.activeUser.history.length

        
        shopingCart.shoplist.splice(0);
        painter.drawCartList(listOfCartItems, shopingCart.shoplist)
        painter.drawHistoryTable(historytable, userController.activeUser.history[lastItemIndex-1])
        window.location.hash = 'cart';
        this.reset()

    })
})()