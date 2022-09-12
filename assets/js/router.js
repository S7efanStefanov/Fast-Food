let router = (function(){
    class Router{
        hashChangeHandler(){
            let hash = window.location.hash.slice(1) || HASH_ARR[0];

            HASH_ARR.forEach(hashIter => {
                let page = document.getElementById(hashIter);
                if (hashIter === hash){
                    page.style.display = 'flex';
                }else{
                    page.style.display = 'none';
                }
            })
        }
    }
    return new Router();

})()