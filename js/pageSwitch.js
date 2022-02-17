
$(".skills-btn").on("click", ()=> {
    $("#skills-page").css("display", "block")
    $(".card-2__skills").css("display", "block")
    $("#about-me-page").css("display", "none")
    $("#project-page").css("display", "none")
    $("#hobby-page").css("display", "none")
})
$(".about-me-btn").on("click", ()=> {
    $("#skills-page").css("display", "none")
    $("#about-me-page").css("display", "block")
    $("#project-page").css("display", "none")
    $("#hobby-page").css("display", "none")
})
$(".project-btn").on("click", ()=> {
    $("#skills-page").css("display", "none")
    $("#about-me-page").css("display", "none")
    $("#project-page").css("display", "block")
    $("#hobby-page").css("display", "none")
})
$(".hobby-btn").on("click", ()=> {
    $("#skills-page").css("display", "none")
    $(".card-2__skills").css("display", "none")
    $("#about-me-page").css("display", "none")
    $("#project-page").css("display", "none")
    $("#hobby-page").css("display", "block")
})