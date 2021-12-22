var invertal = 500;
var randomNum = 1;

window.onscroll = () => { window.scroll(0, 0); };

function getRandomFreddyImage() {  
    var randomImage = new Array();  

    randomImage[0] = "https://www.dropbox.com/sh/vxiigvz3e465xpt/AABePY-4sY5bhF7JYndRhvdaa/Textures/Main%20Menu?dl=0&preview=431.png&subfolder_nav_tracking=1";
    randomImage[1] = "https://www.dropbox.com/sh/vxiigvz3e465xpt/AABePY-4sY5bhF7JYndRhvdaa/Textures/Main%20Menu?dl=0&preview=440.png&subfolder_nav_tracking=1";
    randomImage[2] = "https://www.dropbox.com/sh/vxiigvz3e465xpt/AABePY-4sY5bhF7JYndRhvdaa/Textures/Main%20Menu?dl=0&preview=441.png&subfolder_nav_tracking=1";
    randomImage[3] = "https://www.dropbox.com/sh/vxiigvz3e465xpt/AABePY-4sY5bhF7JYndRhvdaa/Textures/Main%20Menu?dl=0&preview=442.png&subfolder_nav_tracking=1";

    var number = Math.floor(Math.random()*randomImage.length);  
    setTimeout(function(){
        return document.getElementById("mmFreddy").src = randomImage[number];
    },invertal);
    if (randomImage[3]) {
        randomNum = Math.floor(Math.random() * 3) + 1;
        if(randomNum == 3) {
            return document.getElementById("mmFreddy").src = randomImage[number];
        } else {
            getRandomFreddyImage();
        }
    }
}

setInterval(function() {
    invertal = Math.floor(Math.random() * 800) + 500;
    getRandomFreddyImage();
}, invertal);   // Interval set to 1 seconds
