(function () {
    window.addEventListener('load', router.hashChangeHandler);
    window.addEventListener('hashchange', router.hashChangeHandler);
    let searchField = document.getElementById('search-filter')
    searchField.addEventListener('input', function (e) {

        console.log(e.target.value);
        console.log(recepieManager.filterRecepies(e.target.value));
        menuContainer.innerHTML = ''
        painter.drawScreen(menuContainer, recepieManager.filterRecepies(e.target.value))


    })
    recepieManager.getAllRecepies(menu);
    let menuContainer = document.getElementsByClassName('menu-container')[0]
    painter.drawScreen(menuContainer, recepieManager.allRecepies)
})()