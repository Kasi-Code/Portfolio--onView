const colorDay = "linear-gradient(to right bottom, rgb(255, 255, 255), rgb(133, 133, 133))";
const colorNight = "linear-gradient(to right bottom, rgb(0, 0, 0), rgb(26, 25, 25))";
const txtColorDay = "rgb(30,30,30)";
const txtColorNight = "rgb(150, 150, 150)";

// changing theme color/mode

$(".light-mode").on("click", ()=> {
    $(".dark-mode").css("display", "block")
    $(".light-mode").css("display", "none")
    $(".profile, .bottom-nav").css("color", txtColorDay)
    $(".item, .bottom-nav").css("background", colorDay);
    $("body").css("background-color", "white");
    $("a").css("color", txtColorDay) 
})

$(".dark-mode").on("click", ()=> {
    $(".dark-mode").css("display", "none")
    $(".light-mode").css("display", "block")
    $(".profile, .bottom-nav").css("color", txtColorNight)
    $(".item, .bottom-nav").css("background", colorNight);      
    $("body").css("background-color", "black"); 
    $("a").css("color", txtColorNight) 
})