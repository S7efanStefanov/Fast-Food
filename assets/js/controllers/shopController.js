(function(){
    let listOfCartItems = document.getElementById('cartItemsList')
    let cartShortCut = document.getElementById('cart-img')
    cartShortCut.addEventListener('click', function(){
        listOfCartItems.innerHTML = ''
        painter.drawCartList(listOfCartItems, shopingCart.shoplist)
        shopingCart.sumTotal(shopingCart.shoplist)
    })



})()