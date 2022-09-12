(function(){
    let listOfCartItems = document.getElementById('cartItemsList')
    let cartShortCut = document.getElementById('cart-img')
    let totalOrderPrice = document.getElementById('price-for-oreder')
    cartShortCut.addEventListener('click', function(){
        
        painter.drawCartList(listOfCartItems, shopingCart.shoplist)
        sumTotal(shopingCart.shoplist)
    })
    function sumTotal(addedItems){
        sumedPrice = 0;
        shopingCart.shoplist.forEach(el => sumedPrice += Number(el.totalSum))
        totalOrderPrice.textContent = Number(totalOrderPrice.textContent) + sumedPrice;
    }


})()