const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar")

//buttons

const searchButton = document.querySelector("#search-btn");
const cartButton = document.querySelector("#cart-btn");
const menuButton = document.querySelector("#menu-btn");

searchButton.addEventListener("click",function(){
    searchForm.classList.toggle("active");
   document.addEventListener("click",function(event) {
    if(!event.composedPath().includes(searchButton) && !event.composedPath().includes(searchForm)){
        searchForm.classList.remove("active");
    }
   })
})

cartButton.addEventListener("click",function() {
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(event) {
        if (!event.composedPath().includes(cartButton) && !event.composedPath().includes(cartItem)) {
            cartItem.classList.remove("active");
        }
    })
})

menuButton.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(event){
        if (!event.composedPath().includes(menuButton) && !event.composedPath().includes(navbar)) {
            navbar.classList.remove("active");
        }
    })
})