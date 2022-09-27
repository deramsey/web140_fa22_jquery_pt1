$(document).ready( function() {
    $("body").css("background-color", "blue");


    $("#example").hover( function(){
        $(this).css({"background-color": "green", "text-decoration": "underline"});
        $("#example > p").text("You're hovering on me!");
    },
    function(){
        $(this).css({"background-color": "#FF00FF", "text-decoration": "none"});
        $("#example > p").text("Do it again!");
    })
});

/*
window.addEventListener('load', (event) => {
    document.body.style.backgroundColor = "red";
});*/