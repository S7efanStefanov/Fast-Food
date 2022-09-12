let recepieManager = (function(){
    class Recepie{
        constructor(imgURL, name, weight, category, price){
            this.imgURL = imgURL;
            this.name = name;
            this.weight = weight;
            this.category = category;
            this.price = price;
        }
    }
    class recepieManager{
        constructor(){
            this.allRecepies = [];
        }
        addRecepie(recepie){
            this.allRecepies.push(recepie)
        }
        getAllRecepies(recepieArray){
            recepieArray.forEach(rec => {
                this.addRecepie(new Recepie(rec.image, rec.name, rec.weight, rec.category, rec.price))
            });
        }
        filterRecepies(searchedStr){
             return this.allRecepies.filter(curRec => {
                return curRec.name.toLowerCase().includes(searchedStr.toLowerCase())
            })
        }
    }
    return new recepieManager()
})()