$(document).ready(function () {
    $(".yazilar").append("hamo");
    //$("button").css({backgroundColor: "red"})
    $("#goster").css({ color: "blue"})
    $("li:even").css({ backgroundColor: "red" });
    $("li:odd").css({ backgroundColor: "blue" });
    $("li:nth-child(3").css({backgroundColor: "purple" });
    $("button:first-child").css({backgroundColor:"red"});
    $("button:last-child").css({backgroundColor:"yellow"});
    
    var yazilar = $(".yazilar")

    $("#gizle").click(function () {
        $(yazilar).hide(2000);
    });

    $("#goster").click(function () {
        $(yazilar).show(500);
    });

    $("#goster-gizle").click(function () {
        $(yazilar).toggle(1000);
    });

    $("#acil-kapan").click(function () {
        yazilar.slideUp().slideDown();
    });

    $("#eleman-ekle").click(function () {
        yazilar.append("hamo");
        yazilar.prepend("Hamo");
    });

    $("#eleman-sil").click(function () {
        $("li:first-child").remove();
    });

    $("#sinif-ekle").click(function () {
        yazilar.addClass("ekle");
    });

    $("#sinif-kaldir").click(function () {
        yazilar.removeClass("ekle");
    });

    $("#sinif-degis").click(function () {
        yazilar.toggleClass("ekle");
    });


    //******************************************************************************************************************************** */
    var kutu1 = $(".kutu1");
    var kutu2 = $(".kutu2");
    var poz1  = kutu1.position();
    var sol1  = poz1.left;
    var poz2  = kutu2.position();
    
    $("#anim-basla").click(function () {
        kutu1.css({position:"relative"});
        while (sol1 <= 1100 ) {
            kutu1.animate({
                left:"+=20"
            });
            sol1 +=50;
        }
    });

    var zaman=setInterval(kac,1000);

    function kac () {
        var d       =   new Date();
        var saat    =   d.getHours();
        var dakika  =   d.getMinutes();
        var saniye  =   d.getSeconds();
        $(".saat").text(saat);
        $(".dakika").text(dakika);
        $(".saniye").text(saniye);
    }
















});
