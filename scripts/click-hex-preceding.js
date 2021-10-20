$(document).ready(function() {
    $("#hex-preceding").click(function() {
        $("#hex-next-to-next").animate({
            "top": "-182px",
            "right": "-272px",
            "opacity": "0"
        }, 5000, "linear");
        $("#hex-next svg").animate({
            "width": "152px",
            "height": "152px"
        }, 5000, "linear");
        $("#hex-next").animate({
            "left": "150",
            "bottom": "60"
        }, 5000, "linear");
        $("#hex-next").animate({
            "bottom": "-20",
        "left": "35",
            "grid-column": "6",
            "grid-row": "2"
        }, 10, "linear");
        $("#hex-now svg").animate({
            "width": "182px",
            "height": "182px"
        }, 5000, "linear");
        $("#hex-now").animate({
            "bottom": "130",
            "left": "210"
        }, 5000, "linear");
        $("#hex-now").animate({
            "bottom": "-11",
            "left": "8",
            "grid-column": "5",
            "grid-row": "3"
        }, 10, "linear");
        $("#hex-now text:eq(0), #hex-now text:eq(1), #hex-now text:eq(2), #hex-now text:eq(3), #hex-now rect").fadeOut("slow");
        $("#hex-now text:eq(4)").fadeIn("5000");
        $("#hex-now text:eq(5)").fadeIn("5000");
        $("#hex-preceding svg").animate({
            "width": "327px",
            "height": "327px"
        }, 5000, "linear");
        $("#hex-preceding").animate({
            "bottom": "130",
            "left": "220"
        }, 5000, "linear");
        $("#hex-preceding text:eq(0), #hex-preceding text:eq(1)").fadeOut(5000);
        $("#hex-preceding text:eq(2), #hex-preceding text:eq(3), #hex-preceding text:eq(4), #hex-preceding text:eq(5), #hex-preceding rect").fadeIn(5000);
        $("#hex-preceding").animate({
            "bottom": "-12",
            "left": "10",
            "grid-column": "4",
            "grid-row": "4"
        }, 10, "linear");
        $("#hex-preceding-before-preceding svg").animate({
            "width": "262px",
            "height": "262px"
        }, 5000, "linear");
        $("#hex-preceding-before-preceding").animate({
            "bottom": "70",
            "left": "120"
        }, 5000, "linear");
        $("#hex-preceding-before-preceding").animate({
            "bottom": "-9",
            "left": "14",
            "grid-column": "3",
            "grid-row": "5"
        }, 10, "linear");
        $("#rival-right div:eq(0)").css("display", "none");
        $("#rival-right div:eq(2)").fadeIn(5000);
        $("#rival-left div:eq(0)").css("display", "none");
        $("#rival-left div:eq(2)").fadeIn(5000);
    });
});