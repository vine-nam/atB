$(document).ready(function () {
    'use strict';
    
    var ht = $(window).height();
    //$("section").height(ht);
    $(window).on("resize", function () {
        
    });
    
    $(window).on("scroll", function (e) {
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        
        //teaser volume
        /*
        var vid = $("video")[0];
        if(scroll<=1000) {
            vid.volume = 1-scroll/1000;
        } else if (scroll>1000){
            vid.volume = 0;
        } */

        //scoll
        /*
        if(scroll >= (ht*1)/3 && scroll < (ht*2)/3) {
            $("#synopsis").css({"opacity": "1"});
        }
        if(scroll >= (ht*2)/3 && scroll < (ht*3)/3) {
            $("#character").css({"opacity": "1"});
        }*/
        
        //$("h1").text(scroll+", "+ht);
        //$("#head").css({"top": scroll});
        //$("#synopsis").css({"top": -scroll});
        //$("#character").css({"top": -scroll});
        //$("#photo").css({"top": -scroll});
        //$("#video").css({"top": -scroll});
        //$("#ticket").css({"top": -scroll});
    
    });
    //nav controll
    $("header li").on("click", function (e) {
        e.preventDefault();  
        //e.stopPropagation();
        e.stopImmediatePropagation();

        var sectionHt = $("body").children();
        var index = $(this).index();
        var headerHt = $("header").height();
        var sumSectionHt = 0;
        var i = 0;
        sumSectionHt = -headerHt;
        for (i = 1; i <= index; i = i + 1) {
            sumSectionHt += sectionHt.eq(i).outerHeight();
        }
        $("html, body").stop().animate({"scrollTop": sumSectionHt}, 800);

    });

    //#character img
    var r = 0;
    var click1 = '';
    var click2 = '';
    $("#character img").on("click", function (e) {
        e.stopImmediatePropagation();

        click2 = $(this).next().text();
        click1 = $(this).attr("alt");

        if (r === 180) {//click2
            r = 0;
            $(this).css({
                "transform": "rotateY(" + r + "deg)"
            });
            $(this).next().text(click1);
            $(this).attr("alt", click2);
        } else {//click1
            r = 180;
            $(this).css({
                "transform": "rotateY(" + r + "deg)"
            });
            $(this).next().text(click1);
            $(this).attr("alt", click2);
        }

    });
    $("#character img").on("mouseout", function () {
        $(this).css({
            "transform": "rotateY(0deg)"
        });
        if (r === 180) {
            r = 0;
            click2 = $(this).next().text();
            click1 = $(this).attr("alt");
            $(this).next().text(click1);
            $(this).attr("alt", click2);
        }
    });
    $("#character img").on("mouseover", function () {
        $(this).css({
            "transform": "rotateY(20deg)"
       });
    });

    //span
    $("#character span").on("mouseover", function (e) {


    });

    //
    $("iframe").click(function () {
        $(this).css({
            "height": "700px"
        });
    });
    /*
    $("iframe").hover(
        function() {
            $(this).css ({
                "height": "700px"
            });
        },function() {
            $(this).css ({
                "height": "100%"
            });
        }
    );
    */
});