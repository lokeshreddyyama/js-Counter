var countDown = document.getElementById('countDown');
var bgImage = document.getElementById('bg-image');


var initialCountdown = countDown.innerHTML;
// console.log(initialCountdown);

var interval = setInterval(function () {

    initialCountdown = initialCountdown - 1;
    // console.log(initialCountdown);
    countDown.innerHTML = initialCountdown;

    // console.log(initialCountdown * 100 + "px");
    countDown.style.fontSize = initialCountdown * 50 + "px";

     bgImage.style.width= initialCountdown*100 +"px";
     bgImage.style.height= initialCountdown*100 +"px";

    var imagePath = initialCountdown % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';
    bgImage.src = imagePath;

    console.log(bgImage.src);

    if (initialCountdown <= 0) {
        clearInterval(interval)
    }

}, 1000)