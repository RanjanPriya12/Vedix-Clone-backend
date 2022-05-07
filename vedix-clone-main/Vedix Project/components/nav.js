function navbar(){
    return `   <div id="nav">
    <div id="nav1">
 
 <div> 
    <p>
        Order Now & Get Assured Dispatch In 24hrs
        
    </p>
    <button id="navbutton">
    <a href="allproduct.html" style="text-decoration:none;color:black;">
    Order Now
    </a>
    </button> 
 </div>
 
    </div>
    <div id="nav2"> 
        <div>
        <a href="index.html" style="text-decoration:none;color:black;">
            <img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/logo.svg?v=1585630376">
        </a>
            </div>
        <div>
       
            <p id="quiz1">
            <a href="quiz1.html" style="text-decoration:none;color:black;">
            Know Your Skin 
            </a>
            <i class="fas fa-angle-right"></i>
        </p>
 
        </div>
        <div>
            <p id="quiz2">
 
            <a href="comp.html" style="text-decoration:none;color:black;">
            Your Skin Analysis
            </a>
            <i class="fas fa-angle-right"></i> 
        </p>
        </div>
        <div class="cart" style="width:55px; display:flex; justify-content:space-between;text-align:center; align-item:center;">

        <a href="cart.html" style="text-decoration:none;color:black;">
       <img id='CartIcon' src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/cart_icon_93f3b819-aa16-479e-b6ba-c5007e8520d2.png?v=1623129140">
     </a>
     <div id='cart_count' style="height:30px; widht:30px; padding:0px 6px; margin-top:2px; font-size:16px; border-radius:50%; background-color:red;color:white;"></div>
       </div>
 <div>
    <select id="select">
        <option>Shop</option>
        <option>Why Vedix</option>
        <option>Science</option>
        <option>Pricing</option>
        <option>Reviews</option>
        <option>Blog</option>
        <option>Faqs</option>
        </select>
 </div>
 <div class="lock">
 <a href="login.html" style="text-decoration:none;color:black;">
    <img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/signin-lock.png?v=1623746079">
 </a>
    </div>
 </div>
    </div>
    <div id="bottomnav">
        <div><a href="index.html" style="text-decoration:none;color:black;">Home</a></div>
        <div>Why Vedix</div>
        <div>Science</div>
        <div>Pricing</div>
        <div>Reviews</div>
        <div>
        <a href="blog.html" style="text-decoration:none;color:black;">
        Blog
        </a>
        </div>
        <div>Faqs</div>  
        <div></div>
        <div>
        <select id="select1">
        <option>Shop</option>
        <option value='allProduct'>All Products</option>
        <option value='hair'>Hair Full Regimen</option>
        <option value='face'>Skin Full Regimen</option>
        <option value='moisture'>Best Sellers</option>
        <option value='oil'>Hair Oils</option>
        <option value='shampoo'>Hair Shampoos</option>
        <option value='serum'>Hair Serums</option>
        <option value='cond'>Hair Conditioner</option>
        <option value='pack'>Face Serums</option>
        <option>
        Hair Conditioners
        </option>
        <option style=" border-bottom: 1px solid red;">Hair Packs & Masks</option>
        <option>Skin Cleansers</option>
        <option>Skin Moisturizers</option>
        <option>Skin Actives</option>
        <option>Face Oils</option>
        </select>
        </div>
        <div>
        <p id="quiz5" >
        <a href="quiz1.html" style="text-decoration:none;color:black;">
        Know Your Skin 
        </a>
        <i class="fas fa-angle-right"></i>
    </p>
    </div>
    </div>`
 
 
 
 }
 export default navbar;