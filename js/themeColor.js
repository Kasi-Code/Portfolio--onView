// using some part as basic JS to show my knowledge between both basic JS and JQuery

const profilePage = document.querySelector(".profileInfoGrid");
const hobbyPage = document.querySelector(".hobbyInfoGrid");
const skillsPage = document.querySelector(".skillsInfoGrid");

const clickProfile = document.querySelector(".profileButton");
const clickSkills = document.querySelector(".skillsButton");
const clickHobby = document.querySelector(".hobbyButton");


// changing pages

clickProfile.addEventListener('click', function(){
    profilePage.style.display = "block";
    hobbyPage.style.display = "none";
    skillsPage.style.display = "none";
})
clickHobby.addEventListener('click', function(){
    profilePage.style.display = "none";
    skillsPage.style.display = "none";
    hobbyPage.style.display = "block";
})
clickSkills.addEventListener('click', function(){
    profilePage.style.display = "none";
    hobbyPage.style.display = "none";  
    skillsPage.style.display = "block";  
    $(".projectPage").css("display", "none")
    $(".skillPage").css("display", "block")
})
    $( "#projectButton" ).click(() => {
        $("#skillPage").css("display", "none")
        $("#projectPage").css("display", "block")
    });
    $( "#skillButton" ).click(() => {
        $("#skillPage").css("display", "block")
        $("#projectPage").css("display", "none")
    });

// changing theme color/mode

const dark = "linear-gradient(to right bottom, rgb(255, 255, 255), rgb(133, 133, 133))";
const light = "linear-gradient(to right bottom, rgb(0, 0, 0), rgb(26, 25, 25))";

$(".lightButton").on("click", ()=> {
    $(".lightButton").css("display", "none")
    $(".darkButton").css("display", "block")
    $("body").css("color", "black")
    $("body").css("backgroundColor", "white")
    $(".bottomPageSection, .skillsInfoGrid, .hobbyInfoGrid, .aboutMe, .profileInfoGrid").css("background", dark)
        // weatherBG.style.background = dark;
        
})

const darkMode = document.querySelector(".darkButton");

darkMode.addEventListener('click', function(){
    $(".lightButton").css("display", "block")
    $(".darkButton").css("display", "none")
    $("body").css("color", "white")
    $("body").css("backgroundColor", "black")
    $(".bottomPageSection, .skillsInfoGrid, .hobbyInfoGrid, .aboutMe, .profileInfoGrid").css("background", light)
        // weatherBG.style.background = light;
})