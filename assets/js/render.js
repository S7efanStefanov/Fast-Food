let painter = (function(){
    class Render{
        drawScreen(container, menuArray){
            menuArray.forEach(recObj => {
                // let piecesInCart = document.getElementById('itemsInCart')

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
                // addBtn.addEventListener('click', function(){})
                orderDetails.append(quantityInput, addBtn)

                card.append(productImg, productName, productWeight, productCategory, productPrice, orderDetails)
                container.append(card)
            });
        }
    }
    return new Render
})()