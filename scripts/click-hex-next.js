$(document).ready(function() {
    $("#hex-next").click(function() {
        $("#hex-preceding-before-preceding").animate({
            "bottom": "-190px",
            "left": "-220px",
            "opacity": "0"
        }, 5000, "linear");
        $("#hex-preceding svg").animate({
            "width": "152px",
            "height": "152px"
        }, 5000, "linear");
        $("#hex-preceding").animate({
            "top": "80px",
            "right": "135px"
        }, 5000, "linear");
        $("#hex-preceding").animate({
            "top": "-2",
            "left": "-15",
            "grid-column": "2",
            "grid-row": "6"
        }, 10, "linear");
        $("#hex-now svg").animate({
            "width": "182px",
            "height": "182px"
        }, 5000, "linear");
        $("#hex-now").animate({
            "top": "138px",
            "left": "-230px"
        }, 5000, "linear");
        $("#hex-now").animate({
            "top": "-6",
            "left": "-5",
            "grid-column": "3",
            "grid-row": "5"
        }, 10, "linear");
        $("#hex-now text:eq(0), #hex-now text:eq(1), #hex-now text:eq(2), #hex-now text:eq(3), #hex-now rect").fadeOut("slow");
        $("#hex-now text:eq(4)").fadeIn("5000");
        $("#hex-now text:eq(5)").fadeIn("5000");
        $("#hex-next svg").animate({
            "width": "324px",
            "height": "324px"
        }, 5000, "linear");
        $("#hex-next").animate({
            "top": "72",
            "left": "-280px"
        }, 5000, "linear");
        $("#hex-next").animate({
            "grid-column": "4",
            "grid-row": "4",
            "top": "-67",
            "left": "-65px"
        }, 10, "linear");
        $("#hex-next text:eq(0), #hex-next text:eq(1)").fadeOut(5000);
        $("#hex-next text:eq(2), #hex-next text:eq(3), #hex-next text:eq(4), #hex-next text:eq(5), #hex-next rect").fadeIn(5000);
        $("#hex-next-to-next").animate({
            "top": "60",
            "right": "169"
        }, 5000, "linear");
        $("#hex-next-to-next svg").animate({
            "width": "262px",
            "height": "262px"
        }, 5000, "linear");
        $("#hex-next-to-next").animate({
            "top": "-19",
            "right": "35",
            "grid-column": "5",
            "grid-row": "3"
        }, 10, "linear");
        $("#rival-right div:eq(0)").css("display", "none");
        $("#rival-right div:eq(1)").fadeIn(5000);
        $("#rival-left div:eq(0)").css("display", "none");
        $("#rival-left div:eq(1)").fadeIn(5000);
    });
});