var span = document.getElementById("day");

var now = new Date();
var year = now.getFullYear();//年
var month = now.getMonth() + 1;//月  (注意：月份+1)
var date = now.getDate() + 2;//日
var day = now.getDay();
var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var week = weeks[day];//根据day值，获取星期数组中的星期数。
if (month < 10) {
        month = "0" + month;
    }
if (date < 10) {
        date = "0" + date;
    }
 
span.innerHTML = " " + week + "," + " " + date + "/" + month + "/" + year;
window.onscroll=function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离

    var img = document.getElementById('tar');

    

    var imgRight = img.offsetTop;

    
    
    
   /* if(t >= videoT){
        document.getElementById('er').classList.remove("do");
    }
    if(t < videoT){
        document.getElementById('er').classList.add("do");
    } */
    if( t >= imgRight){
        document.getElementById('no').classList.remove("yes");
    }if(t < imgRight){
        document.getElementById('no').classList.add("yes");
    }
}