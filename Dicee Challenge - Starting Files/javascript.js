var randomno1=math.round(mah.ramdom()*6)+1;
var randomno2=math.round(mah.ramdom()*6)+1;
// math.random() {0.1-0.99} by multiply it by 6 we get the num
// between 0-5 but we need 1-6 so we just add 1
var randomdiceimg1 ="dice"+randomno1+".png";
var imgsrc1="images/"+randomdiceimg1;
var randomdiceimg2="dice"+randomno2+".png";
var imgsrc1="images/"+randomdiceimg2;

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];
img1.setAttribute("src",imgsrc1);