var deadline = new Date("Jan 3, 2021 23:59:99").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 

document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "EXPIRED"; 
    } 
}, 1000);
// var x=setInterval(function(){

//     // var now=new Date().getT
// var noOfDaysLeft=14;

//     // var days=Math.floor(noOfDaysLeft/(1000*60*60*24));
//     var days=14;
//     var hours=Math.floor((noOfDaysLeft%(1000*60*60*24))/(1000*60*60));
//     var minutes=Math.floor((t%(1000*60*60))/(1000*60));
//     var seconds=Math.floor((t%(1000*60))/1000);
    
    
//     // document.getElementById("demo").innerHTML = days + "d "  
//     // + hours + "h " + minutes + "m " + seconds + "s "; 
//     //     if (noOfDaysLeft < 0) { 
//     //         clearInterval(x); 
//     //         document.getElementById("demo").innerHTML = "EXPIRED"; 
//     //     } 

//     document.getElementById("days").innerText=days;
//     document.getElementById("hours").innerText=hours;
//     document.getElementById("minutes").innerText=minutes;
//     document.getElementById("seconds").innerText=seconds;

// },1000);