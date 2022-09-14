let painter = (function () {
    class Render {
        drawMenuScreen(container, menuArray) {
            menuArray.forEach(recObj => {
                let piecesInCart = document.getElementById('itemsInCart')

                let card = document.createElement('div');
                card.classList.add('productCard')

                let productImg = document.createElement('img');
                productImg.classList.add('menu-item-img')
                productImg.alt = 'recepieImage'
                productImg.src = recObj.imgURL
                let productName = document.createElement('span')
                productName.innerText = recObj.name
                let productWeight = document.createElement('span')
                productWeight.innerText = recObj.weight
                let productCategory = document.createElement('span')
                productCategory.innerText = recObj.category
                let productPrice = document.createElement('span')
                productPrice.innerText = recObj.price

                let orderDetails = document.createElement('div');
                let quantityInput = document.createElement('input');
                let addBtn = document.createElement('button');
                addBtn.innerText = 'Добави в количка';
                addBtn.addEventListener('click', function(){
                    piecesInCart.parentNode.style.visibility = 'visible'
                    shopingCart.addShopingItem(productName.textContent, quantityInput.value, productPrice.textContent)
                    shopingCart.getItemsInCart()
                    quantityInput.value = ''
                })
                orderDetails.append(quantityInput, addBtn)

                card.append(productImg, productName, productWeight, productCategory, productPrice, orderDetails)
                container.append(card)
            });
        }
        drawCartList(listOfItems, items) {
            listOfItems.innerHTML = ''
            items.forEach(item => {
                let listItem = document.createElement('li');
                listItem.classList.add('itemInOrder')

                let lisItemName = document.createElement('span');
                lisItemName.textContent = item.name;
                let lisItemprice = document.createElement('span');
                lisItemprice.textContent = item.totalSum
                let inputCount = document.createElement('input');
                inputCount.value = item.pieces;
                let removeItem = document.createElement('button');
                removeItem.textContent = 'Remove'
                removeItem.addEventListener('click', function(){
                    shopingCart.removeShopingItem(item.name)
                })
                listItem.append(lisItemName,lisItemprice, inputCount, removeItem)
                listOfItems.append(listItem)
            });
            shopingCart.sumTotal()
            shopingCart.getItemsInCart()
        }
        drawHistoryTable(table, history){
            let tableRow = document.createElement('tr')

            let dataDate = document.createElement('td')
            dataDate.innerText = history.date
            let dataAddress = document.createElement('td')
            dataAddress.innerText = history.address
            let dataPurchases = document.createElement('td')
            dataPurchases.innerText = history.products.join(', ')
            let dataPrice = document.createElement('td')
            dataPrice.innerText = history.totalPrice

            tableRow.append(dataDate, dataAddress, dataPurchases, dataPrice)
            table.append(tableRow)

        }
    }
    return new Render
})()