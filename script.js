var invertal = 500;
var randomNum = 1;

window.onscroll = () => { window.scroll(0, 0); };

function getRandomFreddyImage() {  
    var randomImage = new Array();  

    randomImage[0] = "Five%20Nights%20At%20Freddy's%20Files/Textures/Main%20Menu/431.png";
    randomImage[1] = "Five%20Nights%20At%20Freddy's%20Files/Textures/Main%20Menu/440.png";
    randomImage[2] = "Five%20Nights%20At%20Freddy's%20Files/Textures/Main%20Menu/441.png";
    randomImage[3] = "Five%20Nights%20At%20Freddy's%20Files/Textures/Main%20Menu/442.png";

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
    invertal = Math.floor(Math.random() * 1000) + 800;
    getRandomFreddyImage();
}, invertal);   // Interval set to 1 seconds
