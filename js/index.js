$(document).ready(function(){
    ////////////////////////////////////////////////////////헤더
    $(".headerR > nav > ul > li.bannerBg").mouseover(function(){
      $("header").addClass("on");
    });
    $(".headerR > nav > ul > li.bannerBg").mouseout(function(){
      $("header").removeClass("on");
    });

//  ////////////////////////////////////////////////////////탭메뉴
    $(".tabmenu > ul > li").click(function(){
      let idx = $(this).index();
      $(".tabmenu > ul > li").removeClass("on");
      $(this).addClass("on");
      $(".menuWrap > div").removeClass("on");
      $(".menuWrap > div").eq(idx).addClass("on");
  });

  //////////////////////////////////////////////////////////어바웃어스 스크롤기능
  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    //스크롤바가 얼마만큼 내려와있는지 수를 남겨주는 함수 scrollTop()
    let windowHeight = $(window).height()/2;
    //.height() << 재료가없기때문에 widow(브라우저의 높이를 가져옴 width는 넓이) 나누기 2
    //나누는 이유는 보여야하는 컨텐츠를 화면 중간에 걸릴때 보여주기 위하여.
    //h1태그들에 대해서 각각 반복동작을 수행
    $(".aboutUs").each(function(){
      //each() 반복문 함수 $("선택자").each(function(){}) 스크롤할때마다 반복한다.
      if(scrollTop+windowHeight > $(this).offset().top){
        //.offset().top 문서를 기준으로 위에서부터 얼마나 떨어져있는지. 스크롤이 지나쳤다면,
        $(".aboutUs").addClass("on");
        //class on 을 붙여라
      }else{
        $(".aboutUs").removeClass("on");
        //class on 을 떼라
      }
    });
    });

/////////////////////////////////////////////////////////서브배너 스크롤기능

  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    //스크롤바가 얼마만큼 내려와있는지 수를 남겨주는 함수 scrollTop()
    let windowHeight = $(window).height()/2;
    //.height() << 재료가없기때문에 widow(브라우저의 높이를 가져옴 width는 넓이) 나누기 2
    //나누는 이유는 보여야하는 컨텐츠를 화면 중간에 걸릴때 보여주기 위하여.
    //h1태그들에 대해서 각각 반복동작을 수행
    $(".subBanner").each(function(){
      //each() 반복문 함수 $("선택자").each(function(){}) 스크롤할때마다 반복한다.
      if(scrollTop+windowHeight > $(this).offset().top){
        //.offset().top 문서를 기준으로 위에서부터 얼마나 떨어져있는지. 스크롤이 지나쳤다면,
        $(".subBanner").addClass("on");
        //class on 을 붙여라
      }else{
        $(".subBanner").removeClass("on");
        //class on 을 떼라
      }
    });
    });

  ///////////////////////////////////////////////////////////뉴스 스크롤기능

  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    //스크롤바가 얼마만큼 내려와있는지 수를 남겨주는 함수 scrollTop()
    let windowHeight = $(window).height()/2;
    //.height() << 재료가없기때문에 widow(브라우저의 높이를 가져옴 width는 넓이) 나누기 2
    //나누는 이유는 보여야하는 컨텐츠를 화면 중간에 걸릴때 보여주기 위하여.
    //h1태그들에 대해서 각각 반복동작을 수행
    $(".news").each(function(){
      //each() 반복문 함수 $("선택자").each(function(){}) 스크롤할때마다 반복한다.
      if(scrollTop+windowHeight > $(this).offset().top){
        //.offset().top 문서를 기준으로 위에서부터 얼마나 떨어져있는지. 스크롤이 지나쳤다면,
        $(".news").addClass("on");
        //class on 을 붙여라
      }else{
        $(".news").removeClass("on");
        //class on 을 떼라
      }
    });
    });

  ///////////////////////////////////////////////////////////////미디어 스크롤기능

  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    //스크롤바가 얼마만큼 내려와있는지 수를 남겨주는 함수 scrollTop()
    let windowHeight = $(window).height()/2;
    //.height() << 재료가없기때문에 widow(브라우저의 높이를 가져옴 width는 넓이) 나누기 2
    //나누는 이유는 보여야하는 컨텐츠를 화면 중간에 걸릴때 보여주기 위하여.
    //h1태그들에 대해서 각각 반복동작을 수행
    $(".media").each(function(){
      //each() 반복문 함수 $("선택자").each(function(){}) 스크롤할때마다 반복한다.
      if(scrollTop+windowHeight > $(this).offset().top){
        //.offset().top 문서를 기준으로 위에서부터 얼마나 떨어져있는지. 스크롤이 지나쳤다면,
        $(".media").addClass("on");
        //class on 을 붙여라
      }else{
        $(".media").removeClass("on");
        //class on 을 떼라
      }
    });
    });

  ///////////////////////////////////////////////메인배너 -> 어바웃어스 스크롤

  $(".main").on("mousewheel DOMMouseScroll",function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.details){
      //브라우저가 파이어폭스인 경우
      delta = E.detail * -40;
    }else{
      //브라우저가 크롬인 경우
      delta = E.wheelDelta;
    }
    if(delta>0){
      //마우스 휠을 올렸을때
        let posTop = $(this).prev().offset().top;
        $("html,body").stop().animate({scrollTop:posTop},800);
    }else{
      //마우스 휠을 내렸을 때
      //1.내가 마우스를 올려서 휠을 내린 태그 기준 다음형제 태그의 전체문서의 위에서 얼만큼 떨어져있는 지를 계산한 뒤
      let posTop = $(this).next().offset().top-170;
      // console.log(posTop)
      //2.그만큼 부드럽게 스크롤을 이동하는 기능
      $("html,body").stop().animate({scrollTop:posTop},800);
    }
  });
///////////////////////////////////////////////어바웃어스 <-> 어바웃어스2 스크롤

$(".aboutuswrap").on("mousewheel DOMMouseScroll",function(event){
  let E = event.originalEvent;
  let delta = 0;
  if(E.details){
    //브라우저가 파이어폭스인 경우
    delta = E.detail * -40;
  }else{
    //브라우저가 크롬인 경우
    delta = E.wheelDelta;
  }
  if(delta>0){
    //마우스 휠을 올렸을때
      let posTop = $(".main").offset().top-80;
      $("html,body").stop().animate({scrollTop:posTop},800);
  }else{
    //마우스 휠을 내렸을 때
    //1.내가 마우스를 올려서 휠을 내린 태그 기준 다음형제 태그의 전체문서의 위에서 얼만큼 떨어져있는 지를 계산한 뒤
    let posTop = $(".subBanner").offset().top-95;
    // console.log(posTop)
    //2.그만큼 부드럽게 스크롤을 이동하는 기능
    $("html,body").stop().animate({scrollTop:posTop},800);
  }
});

/////////////////////////////////////////////////어바웃어스2 <-> 뉴스 스크롤

$(".subBanner").on("mousewheel DOMMouseScroll",function(event){
  let E = event.originalEvent;
  let delta = 0;
  if(E.details){
    //브라우저가 파이어폭스인 경우
    delta = E.detail * -40;
  }else{
    //브라우저가 크롬인 경우
    delta = E.wheelDelta;
  }
  if(delta>0){
    //마우스 휠을 올렸을때
      let posTop = $(".aboutuswrap").offset().top-170;
      $("html,body").stop().animate({scrollTop:posTop},800);
  }else{
    //마우스 휠을 내렸을 때
    //1.내가 마우스를 올려서 휠을 내린 태그 기준 다음형제 태그의 전체문서의 위에서 얼만큼 떨어져있는 지를 계산한 뒤
    let posTop = $(".wrap").offset().top-120;
    // console.log(posTop)
    //2.그만큼 부드럽게 스크롤을 이동하는 기능
    $("html,body").stop().animate({scrollTop:posTop},800);
  }
});

////////////////////////////////////////////뉴스 <-> 탭메뉴 스크롤
  $(".wrap").on("mousewheel DOMMouseScroll",function(event){
    let E = event.originalEvent;
    let delta = 0;
    if(E.details){
      //브라우저가 파이어폭스인 경우
      delta = E.detail * -40;
    }else{
      //브라우저가 크롬인 경우
      delta = E.wheelDelta;
    }
    if(delta>0){
      //마우스 휠을 올렸을때
        let posTop = $(".subBanner").offset().top-95;
        $("html,body").stop().animate({scrollTop:posTop},800);
    }else{
      //마우스 휠을 내렸을 때
      //1.내가 마우스를 올려서 휠을 내린 태그 기준 다음형제 태그의 전체문서의 위에서 얼만큼 떨어져있는 지를 계산한 뒤
      let posTop = $(".menu").offset().top-200;
      // console.log(posTop)
      //2.그만큼 부드럽게 스크롤을 이동하는 기능
      $("html,body").stop().animate({scrollTop:posTop},800);
    }
  });

  //////////////////////////////////////////// 탭메뉴 -> 미디어
    $(".menu").on("mousewheel DOMMouseScroll",function(event){
      let E = event.originalEvent;
      let delta = 0;
      if(E.details){
        //브라우저가 파이어폭스인 경우
        delta = E.detail * -40;
      }else{
        //브라우저가 크롬인 경우
        delta = E.wheelDelta;
      }
      if(delta>0){
        //마우스 휠을 올렸을때
          let posTop = $(".wrap").offset().top-135;
          $("html,body").stop().animate({scrollTop:posTop},800);
      }else{
        //마우스 휠을 내렸을 때
        //1.내가 마우스를 올려서 휠을 내린 태그 기준 다음형제 태그의 전체문서의 위에서 얼만큼 떨어져있는 지를 계산한 뒤
        let posTop = $(".media").offset().top-160;
        // console.log(posTop)
        //2.그만큼 부드럽게 스크롤을 이동하는 기능
        $("html,body").stop().animate({scrollTop:posTop},800);
      }
    });

///////////////////////////////////////미디어 -> 탭메뉴

$(".media").on("mousewheel DOMMouseScroll",function(event){
  let E = event.originalEvent;
  let delta = 0;
  if(E.details){
    //브라우저가 파이어폭스인 경우
    delta = E.detail * -40;
  }else{
    //브라우저가 크롬인 경우
    delta = E.wheelDelta;
  }
  if(delta>0){
    //마우스 휠을 올렸을때
      let posTop = $(".menu").offset().top-190;
      $("html,body").stop().animate({scrollTop:posTop},800);
  }else{
    //마우스 휠을 내렸을 때
    //1.내가 마우스를 올려서 휠을 내린 태그 기준 다음형제 태그의 전체문서의 위에서 얼만큼 떨어져있는 지를 계산한 뒤
    // let posTop = $(".media").offset().top-160;
    // console.log(posTop)
    //2.그만큼 부드럽게 스크롤을 이동하는 기능
    $("html,body").stop().animate({scrollTop:posTop},800);
  }
});














});
