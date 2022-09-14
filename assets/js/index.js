(function () {
    window.addEventListener('load', router.hashChangeHandler);
    window.addEventListener('hashchange', router.hashChangeHandler);
    userController.getUsersData()
    location.hash = 'login'
    let searchField = document.getElementById('search-filter')
    searchField.addEventListener('input', function (e) {

        console.log(e.target.value);
        console.log(recepieManager.filterRecepies(e.target.value));
        menuContainer.innerHTML = '';
        painter.drawMenuScreen(menuContainer, recepieManager.filterRecepies(e.target.value));


    })
    let listOfCartItems = document.getElementById('cartItemsList')
    painter.drawCartList(listOfCartItems, shopingCart.shoplist)
    recepieManager.getAllRecepies(menu);
    let menuContainer = document.getElementsByClassName('menu-container')[0];
    painter.drawMenuScreen(menuContainer, recepieManager.allRecepies);
})()