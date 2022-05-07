import navbar from './components/nav.js';
import footer from './components/footer.js';

let footer_cont=document.getElementById('footer');
footer_cont.innerHTML=footer();
var nav=document.querySelector("#navbar");
nav.innerHTML=navbar();
function sideshow(){
var arr=[];
var arr1=[];
var arr2=[];
var arr3=[];
var arr4=["Prachi Singh","Dheeraj Rajput","Kanishka Rajput"]

arr1.push("⭐️⭐️⭐️⭐️⭐️","⭐️⭐️⭐️⭐️⭐️","⭐️⭐️⭐️⭐️⭐️");
var a="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/prithi.png?v=1595576311";
var b="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/shivaprasad.jpg?v=1605863916";
var c="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/meenachowdari.jpg?v=1605863916";


var x="Concern :  Detox and Hair";
var y="Concern: Detox and Pitta & Kappha";
var z="Concern :Dry Skin";

var k="This is the best product I've ever come across. I genuinely recommend it to everyone, give it a short, it's worth. Thank you Vedix.";
var l="It's been only 2 weeks that I have used Vedix products. But I can definitely see a great change in the hair fall. Hair fall has reduced a lot is what I can say. Would definitely continue my journey with Vedix. :) :)";
var m= "It's been only 2 weeks that I have used Vedix products. But I can definitely see a great change in the hair fall. Hair fall has reduced a lot is what I can say. Would definitely continue my journey with Vedix.";
arr.push(a,b,c);
arr2.push(x,y,z);
arr3.push(k,l,m);


localStorage.setItem("arr",JSON.stringify(arr));

localStorage.setItem("arr1",JSON.stringify(arr1));
localStorage.setItem("arr2",JSON.stringify(arr2));
localStorage.setItem("arr3",JSON.stringify(arr3));
localStorage.setItem("arr4",JSON.stringify(arr4));

var set1=JSON.parse(localStorage.getItem("arr"));

var set2=JSON.parse(localStorage.getItem("arr1"));

var set3=JSON.parse(localStorage.getItem("arr2"));

var set4=JSON.parse(localStorage.getItem("arr3"));

var set5=JSON.parse(localStorage.getItem("arr4"));
console.log(set1,set2,set3,set4);
var i=0;

var image=document.querySelector("#side");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");

setInterval(() => {
    
if(i==set1.length){
    i=0;
}
image.src=set1[i];
p1.textContent=set2[i];
p2.textContent=set3[i];
p3.textContent=set4[i];
p4.textContent=set5[i];
i=i+1;
},8000);



}

sideshow();

let a=document.getElementById('cart_count');
a.innerHTML=JSON.parse(localStorage.getItem('Count'));

let product=document.querySelector('#select1');
console.log(product);
product.addEventListener('change',Product);
function Product(){
    let val=document.getElementById('select1').value;
    if(val=='allProduct'){
        //console.log(val);
        window.location.href='product1.html';
    }
    else if(val=='hair'){
        window.location.href='HairCond.html';
    }
    else if(val=='face'){
        window.location.href='FaceSerum.html';
    }
    else if(val=='moisture'){
        window.location.href='moist.html';
    }
    else if(val=='oil'){
        window.location.href='HairOil.html';
    }
    else if(val=='shampoo'){
        window.location.href='Shampoo.html';
    }
    else if(val=='serum'){
        window.location.href='Cleanser.html';
    }
    else if(val=='shampoo'){
        window.location.href='Shampoo.html';
    }
    else if(val=='cond'){
        window.location.href='HairScrum.html';
    }
    else if(val=='pack'){
        window.location.href='HairPack.html';
    }

}



    