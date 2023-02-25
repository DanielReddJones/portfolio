let mynum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
            
var images = ["pics/cabin.jpg", "pics/cliff.jpg", "pics/rain.jpeg", "pics/rain2.jpg", "pics/woods.jpeg"];

mywholenum = mynum(0, 4);
console.log(mywholenum);
document.body.style.background = "url(" + images[mywholenum] + ") no-repeat";
document.body.style.backgroundSize = "cover";