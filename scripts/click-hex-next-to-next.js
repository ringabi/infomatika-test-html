$(document).ready(function() {
    $("#hex-next-to-next").click(function() {
        $("#hex-preceding-before-preceding").animate({
            "bottom": "-190px",
            "left": "-220px",
            "opacity": "0"
        }, 5000, "linear");
        $("#hex-preceding").animate({
            "bottom": "-270px",
            "left": "-363px",
            "opacity": "0"
        }, 5000, "linear");
        $("#hex-now svg").animate({
            "width": "137px",
            "height": "137px"
        }, 5000, "linear");
        $("#hex-now").animate({
            "bottom": "-215",
            "left": "-370"
        }, 5000, "linear");
        $("#hex-now").animate({
            "bottom": "6",
            "left": "-20",
            "grid-column": "2",
            "grid-row": "6"
        }, 10, "linear");
        $("#hex-now text:eq(0), #hex-now text:eq(1), #hex-now text:eq(2), #hex-now text:eq(3), #hex-now rect").fadeOut("slow");
        $("#hex-now text:eq(4)").fadeIn("5000");
        $("#hex-now text:eq(5)").fadeIn("5000");
        $("#hex-next").animate({
            "bottom": "-268",
            "left": "-460"
        }, 5000, "linear");
        $("#hex-next").animate({
            "bottom": "17",
            "left": "-14",
            "grid-column": "3",
            "grid-row": "5"
        }, 10, "linear");
        $("#hex-next-to-next svg").animate({
            "width": "433px",
            "height": "433px"
        }, 5000, "linear");
        $("#hex-next-to-next").animate({
            "bottom": "-135",
            "left": "-460"
        }, 5000, "linear");
        $("#hex-next-to-next").animate({
            "bottom": "90",
            "left": "-102",
            "grid-column": "4",
            "grid-row": "4"
        }, 10, "linear");
        $("#hex-next-to-next text:eq(0), #hex-next-to-next text:eq(1)").fadeOut(5000);
        $("#hex-next-to-next text:eq(2), #hex-next-to-next text:eq(3), #hex-next-to-next text:eq(4), #hex-next-to-next text:eq(5), #hex-next-to-next rect").fadeIn(5000);
        $("#hex-next-to-next-1 svg").animate({
            "width": "262px",
            "height": "262px",
        }, 5000, "linear");
        $("#hex-next-to-next-1").animate({
            "bottom": "-60px",
            "left": "-170px"
        }, 5000, "linear");
        $("#hex-next-to-next-1").animate({
            "bottom": "19",
            "left": "-35",
            "grid-column": "5",
            "grid-row": "3"
        }, 10, "linear");
        $("#rival-right div:eq(0)").css("display", "none");
        $("#rival-right div:eq(4)").fadeIn(5000);
        $("#rival-left div:eq(0)").css("display", "none");
        $("#rival-left div:eq(4)").fadeIn(5000);
    });
});