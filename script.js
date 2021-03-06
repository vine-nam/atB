/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    'use strict';
    
    //nav controll
    $("header li").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        var sectionHt = $("body").children(),
            index = $(this).index(),
            headerHt = $("header").height(),
            sumSectionHt = 0,
            i = 0;
        sumSectionHt = -headerHt;
        for (i = 1; i <= index; i = i + 1) {
            sumSectionHt += sectionHt.eq(i).outerHeight();
        }
        $("html, body").stop().animate({"scrollTop": sumSectionHt}, 700);

    });

    //#character img
    var r = 0,
        click1 = '',
        click2 = '';
    $("#character img").on("mouseout", function () {
        click2 = $(this).next().text();
        click1 = $(this).attr("alt");
        $(this).next().text(click1);
        $(this).attr("alt", click2);
    });
    $("#character img").on("mouseover", function () {
        click2 = $(this).next().text();
        click1 = $(this).attr("alt");
        $(this).next().text(click1);
        $(this).attr("alt", click2);
    });
    
    //photo img click
    $("#photo img").on("click", function () {
        var imgScr = $(this).attr("src");
        $("#target").attr("src", imgScr);
        if (!$(this).hasClass("typeB")) {
            $("#fullScreen div").attr("class", "fitA");
        } else {
            $("#fullScreen div").attr("class", "fitB");
        }
        $("#fullScreen").attr("class", "show");
    });
    $(".close").on("click", function () {
        $("#fullScreen").attr("class", "hide");
    });
    $("#fullScreen").on("click", function (e) {
        if (!$(e.target).hasClass("area")) {
            $("#fullScreen").attr("class", "hide");
        }
    });

});