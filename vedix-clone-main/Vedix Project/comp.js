var naam=document.querySelector("#p1");
var a=JSON.parse(localStorage.getItem("a"));
naam.textContent=`Hi,   ${a}`;
console.log(a);
var profile=document.querySelector("#p2");
profile.textContent=`${a}'s Current Skin Profile`;
var type=document.querySelector("#type");
var issue=document.querySelector("#issue");
var b=JSON.parse(localStorage.getItem("s"));
var c=JSON.parse(localStorage.getItem("t"));
type.textContent=c;
issue.textContent=b;
var p3=document.querySelector("#p3");
p3.textContent=`${a}'s Recommended Vedix Regimen For Healthy & Glowing Skin Is 100% Natural`;




var iframe=document.querySelector("#iframe")
var div=document.createElement("div")
var i=document.createElement("iframe");
i.src=`https://www.youtube.com/embed/rA74PhbrlvI`;
i.style.width="100%";

var p1=document.createElement("p");
p1.textContent="- Avika Gour";
p1.style.fontWeight="bold"
var p2=document.createElement("p");
p2.textContent="“Vedix has helped me get my natural radiance back and I love my glowing skin now!”";
div.append(i,p2,p1);
iframe.append(div);




var iframe=document.querySelector("#iframe")
var div1=document.createElement("div")
var i=document.createElement("iframe");
i.src=`https://www.youtube.com/embed/e3WPHnxBp9g`;
var p1=document.createElement("p");
p1.style.fontWeight="bold"
p1.textContent="- Aswariya";

var p2=document.createElement("p");
p2.textContent="“Vedix skin care has helped me heal my damaged skin and made it much healthier.”";

div1.append(i,p2,p1);
i.style.width="100%";
iframe.append(div1);