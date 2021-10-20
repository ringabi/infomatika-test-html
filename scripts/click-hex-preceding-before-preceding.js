$(document).ready(function() {
            $("#hex-preceding-before-preceding").click(function() {
                $("#hex-next-to-next").animate({
                    "top": "-182px",
                    "right": "-272px",
                    "opacity": "0"
                }, 5000, "linear");
                $("#hex-next").animate({
                    "bottom": "316px",
                    "right": "-476px",
                    "opacity": "0"
                }, 5000, "linear");
                $("#hex-now svg").animate({
                    "width": "140px",
                    "height": "140px"
                }, 5000, "linear");
                $("#hex-now").animate({
                    "bottom": "200",
                    "left": "360"
                }, 5000, "linear");
                $("#hex-now").animate({
                    "bottom": "-8",
                    "left": "23px",
                    "grid-column": "6",
                    "grid-row": "2"
                }, 10, "linear");
                $("#hex-now text:eq(0), #hex-now text:eq(1), #hex-now text:eq(2), #hex-now text:eq(3), #hex-now rect").fadeOut("slow");
                $("#hex-now text:eq(4)").fadeIn("5000");
                $("#hex-now text:eq(5)").fadeIn("5000");
                $("#hex-preceding").animate({
                    "bottom": "260",
                    "left": "430"
                }, 5000, "linear");
                $("#hex-preceding").animate({
                    "bottom": "-17",
                    "left": "13",
                    "grid-column": "5",
                    "grid-row": "3"
                }, 10, "linear");
                $("#hex-preceding-before-preceding svg").animate({
                    "width": "433px",
                    "height": "433px"
                }, 5000, "linear");
                $("#hex-preceding-before-preceding").animate({
                    "bottom": "180",
                    "left": "290"
                }, 5000, "linear");
                $("#hex-preceding-before-preceding").animate({
                    "bottom": "-41",
                    "left": "63",
                    "grid-column": "4",
                    "grid-row": "4"
                }, 10, "linear");
                $("#hex-preceding-before-preceding text:eq(0), #hex-preceding-before-preceding text:eq(1)").fadeOut(5000);
                $("#hex-preceding-before-preceding text:eq(2), #hex-preceding-before-preceding text:eq(3), #hex-preceding-before-preceding text:eq(4), #hex-preceding-before-preceding text:eq(5), #hex-preceding-before-preceding rect").fadeIn(5000);
                $("#hex-preceding-before-preceding-1 svg").animate({
                    "width": "262px",
                    "height": "262px"
                }, 5000, "linear");
                $("#hex-preceding-before-preceding-1").animate({
                    "bottom": "70",
                    "left": "128px",
                }, 5000, "linear");
                $("#hex-preceding-before-preceding-1").animate({
                    "bottom": "-9",
                    "left": "29",
                    "grid-column": "3",
                    "grid-row": "5"
                }, 10, "linear");
                $("#rival-right div:eq(0)").css("display", "none");
                $("#rival-right div:eq(3)").fadeIn(5000);
                $("#rival-left div:eq(0)").css("display", "none");
                $("#rival-left div:eq(3)").fadeIn(5000);
            });
        });