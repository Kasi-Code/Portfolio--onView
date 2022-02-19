
$(".about-me-btn").on("click", ()=> {
    $("#about-me-page").css("display", "block")
    $("#skills-page").css("display", "none")
    $("#project-page").css("display", "none")
    $("#hobby-page").css("display", "none")
})
$(".skills-btn, .skills-btn-page").on("click", ()=> {
    $("#about-me-page").css("display", "none")
    $("#skills-page").css("display", "block")
    $("#project-page").css("display", "none")
    $("#hobby-page").css("display", "none")
})
$(".project-btn").on("click", ()=> {
    $("#about-me-page").css("display", "none")
    $("#skills-page").css("display", "none")
    $("#project-page").css("display", "block")
    $("#hobby-page").css("display", "none")
})
$(".hobby-btn").on("click", ()=> {
    $("#about-me-page").css("display", "none")
    $("#skills-page").css("display", "none")
    $("#project-page").css("display", "none")
    $("#hobby-page").css("display", "block")
})