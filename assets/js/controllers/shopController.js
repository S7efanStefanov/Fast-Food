(function(){
    let listOfCartItems = document.getElementById('cartItemsList')
    let cartShortCut = document.getElementById('cart-img')
    let orderButton = document.getElementById('order-button')
    cartShortCut.addEventListener('click', function(){
        listOfCartItems.innerHTML = ''
        painter.drawCartList(listOfCartItems, shopingCart.shoplist)
        shopingCart.sumTotal(shopingCart.shoplist)
    })
    orderButton.addEventListener('click', function(){
        location.hash = 'checkOut'
    })
})()