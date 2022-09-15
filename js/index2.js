$(document).ready(function(){
    ////////////////////////////////////////////////////////헤더
    $(".headerR > nav > ul > li.bannerBg").mouseover(function(){
      $("header").addClass("on");
    });
    $(".headerR > nav > ul > li.bannerBg").mouseout(function(){
      $("header").removeClass("on");
    });
  });  
