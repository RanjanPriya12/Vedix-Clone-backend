// let combo = JSON.parse(localStorage.getItem("combo"))||[];




const com=async()=>{

try{

let res=await fetch("http://localhost:5000/product")
let data=await res.json();
console.log(data);
appendComboData(data);
}catch(err){
    console.log(err.message);
}


}
com();

let combos_cart = localStorage.getItem("combos_cart");
if(!combos_cart) {
    combos_cart = [];
    localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
    refreshCartCount(combos_cart)
}
else{
    combos_cart = JSON.parse(combos_cart);
    refreshCartCount(combos_cart)
}
function refreshCartCount(combos_cart) {
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = `: ${combos_cart.length}`;
    localStorage.setItem('Count',JSON.stringify(combos_cart.length));
  }
function appendComboData(combo) {
    //console.log(combo)
    document.querySelector("#product-container-f").innerHTML="";
combo.map((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class","main-product-div")
    let div1 = document.createElement("div");
    div1.setAttribute("class","image-container-div")
    let div2 = document.createElement("div");
    div2.setAttribute("class","description-div");
    let div3 = document.createElement("div");
    div3.setAttribute("class","price-ratings-div");
    let div4 = document.createElement("div");
    div4.setAttribute("class","Cartbtn-div");
    let div5 = document.createElement("div");
    div5.setAttribute("class","Details-div");
    let Image = document.createElement("img");
    Image.src=elem.image
    Image.setAttribute("width","100%");
    Image.setAttribute("height","100%");
    div1.append(Image);
    let description = document.createElement("p");
    description.textContent=elem.title;
    div2.append(description)
    let ratings = document.createElement("p");
    ratings.innerHTML=`★★★★★`
    ratings.style.color="goldenRod"
    let Price = document.createElement("P");
    Price.textContent="Rs."+elem.price;
    div3.append(ratings,Price);
    let details = document.createElement("p");
    details.textContent="View Details"
    div5.append(details);
    let cartButton = document.createElement("button");
    cartButton.innerHTML="ADD TO CART"
    cartButton.setAttribute("class","btn-cart")
    cartButton.onclick= (e) =>{
        addTocart(elem);
    }
    div4.append(cartButton)
    div.append(div1,div2,div3,div5,div4);
    document.querySelector("#product-container-f").append(div);
});
function addTocart(elem) {
    // let combos_cart = JSON.parse(localStorage.getItem("combos_cart"))||[];
    combos_cart.push(elem);
    localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
    refreshCartCount(combos_cart);
    window.location.href="product1.html";
}
}
let cart_icon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart-sidebar");
let close_cart = document.querySelector(".close-cart");
let overallContainer = document.querySelector("#product-main-container");
cart_icon.onclick = () => {
overallContainer.setAttribute("class","activeOnblur")
cart.classList.add("active");
}
close_cart.onclick = () => {
    overallContainer.setAttribute("class","activeofblur")
    cart.classList.remove("active");
}
displaySidebarData(combos_cart);
 function displaySidebarData(combos_cart) {
    document.querySelector(".sub-cart-content").innerHTML="";
    combos_cart.map((elem,index) => {
            let div = document.createElement("div");
            div.setAttribute("class","main-Div-c")
            let upperDiv = document.createElement("div");
            upperDiv.setAttribute("class","upperDiv")
            let lowerDiv = document.createElement("div");
            lowerDiv.setAttribute("class","lowerDiv");
            let upperDiv_img = document.createElement("div");
            upperDiv_img.setAttribute("class","image-div-s")
            let upperDiv_content = document.createElement("div");
            let upperDiv_remove = document.createElement("div");
            upperDiv_remove.setAttribute("class","delete-div-s")
            let lowerDiv_quantity = document.createElement("div");
            let lowerDiv_price = document.createElement("div");
            let lowerDiv_Strikedprice = document.createElement("div");
            let Image = document.createElement("img");
            Image.src=elem.image;
            Image.setAttribute("width","100%");
            let description = document.createElement("p");
            description.textContent=elem.title;
            let remove = document.createElement("div");
            remove.innerHTML=`<i class="far fa-trash-alt"></i>`;
            remove.addEventListener("click",function() {
                deleteTask(combos_cart,index);
                });
            let quantity = document.createElement("input");
            quantity.setAttribute("type","number");
            quantity.setAttribute("class","input-div");
            let strikedprice = document.createElement("p");
            strikedprice.textContent="Rs."+elem.strickedPrice;
            strikedprice.style.textDecoration="line-through"
            let Price = document.createElement("p");
            Price.textContent="Rs."+elem.price;
           upperDiv_img.append(Image);
           upperDiv_content.append(description);
           upperDiv_remove.append(remove);
           upperDiv.append(upperDiv_img,upperDiv_content,upperDiv_remove);
           lowerDiv_quantity.append(quantity);
           lowerDiv_Strikedprice.append(strikedprice);
           lowerDiv_price.append(Price);
           lowerDiv.append(lowerDiv_quantity,lowerDiv_Strikedprice,lowerDiv_price);
           div.append(upperDiv,lowerDiv);
           document.querySelector(".sub-cart-content").append(div);
           })
 }
 function deleteTask(combos_cart,index) {    
    combos_cart.splice(index,1);
    localStorage.setItem("combos_cart",JSON.stringify(combos_cart));
    displaySidebarData(combos_cart);
    refreshCartCount(combos_cart);
    totalDisplay(total);
    window.location.href="#";
}
let total = combos_cart.reduce(function (acc, curr) {
    return acc + curr.price;
  }, 0);
function totalDisplay(total) {
    let totalDisplay = document.getElementById("totalDisplay");
    totalDisplay.textContent = "Rs."+ total;
  }
  totalDisplay(total);
  displaySidebarData(combos_cart);









