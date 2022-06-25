// Heart
let heartIcon = document.querySelector("#heart-icon");
let heart = document.querySelector(".heart");
let closeHeart = document.querySelector("#close-heart");

// open heart
heartIcon.onclick = () => {
    heart.classList.add("active");
};
//close heart
closeHeart.onclick = () => {
    heart.classList.remove("active");
};

// Heart Working JS
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Making function
function ready() {
    // Remove items from heart
    var reomveHeartButtons = document.getElementsByClassName("heart-remove");
    console.log(reomveHeartButtons);
    for (var i = 0; i < reomveHeartButtons.length; i++) {
        var buttonn = reomveHeartButtons[i];
        buttonn.addEventListener("click", removeHeartItem);
    }
    //Add to heart
    var addHeart = document.getElementsByClassName("add-heart"); 
    for ( var i = 0; i < addHeart.length; i++) {
        var buttonn = addHeart[i];
        buttonn.addEventListener("click", addHeartClicked);

    }
}

//remove items from heart
function removeHeartItem(event) {
    var buttonClickedd = event.target;
    buttonClickedd.parentElement.remove();
}
// add to heart
function addHeartClicked(event){
    var buttonn = event.target;
    
    var shopProductss = buttonn.parentElement.parentElement.parentElement;
   
    var titlee = shopProductss.getElementsByClassName("product-title")[0].innerText;
    
    var pricee = shopProductss.getElementsByClassName("price")[0].innerText;
    var productImgg = shopProductss.getElementsByClassName("product-img")[0].src;
    

    addProductToCartt(titlee, pricee, productImgg);
}
function addProductToCartt(title, price, productImg) {
    var cartShopBoxx = document.createElement("div");
    cartShopBoxx.classList.add("heart-box");
    var cartItemss = document.getElementsByClassName("heart-content")[0];
    var cartItemsNamess = cartItemss.getElementsByClassName("heart-product-title");
    for (var i = 0; i < cartItemsNamess.length; i++){
        if (cartItemsNamess[i].innerText == title) {
        alert("Bạn đã thêm sản phẩm này vào sản phẩm yêu thích");
        return;
    }
}

var cartBoxContentt = `<img src="${productImg}" alt="" class="heart-img">
                            <div class="detail-hbox">
                            <div class="heart-product-title">${title}</div>
                            <div class="heart-price">${price}</div>
                            </div>
                             <i class='bx bxs-trash-alt heart-remove' ></i>`;
                        cartShopBoxx.innerHTML = cartBoxContentt;
    cartItemss.append(cartShopBoxx);
    cartShopBoxx.getElementsByClassName("heart-remove")[0].addEventListener("click", removeHeartItem);
}