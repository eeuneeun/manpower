
$(function(){
    var windowWidth = $(window).width();
    var gnb = $('.header .gnb');
    var mobile_menu_btn = $('.menu-btn-mobile');
    var parent_menu = $('.header .gnb li.parent-menu');
    var parent_menu_a = $('.header .gnb li.parent-menu').children('a');
    var child_menu = $('ul.child-menu');
    var eng = $('li.triangle a.eng');
    var kor = $('li.triangle a.kor');

    //한국어&영어 선택 모션
    $(eng).click(function() {
        $(this).fadeOut(0, function() {
          $(kor).fadeIn(500);
          })
    });
    $(kor).click(function() {
        $(this).fadeOut(0, function() {
          $(eng).fadeIn(500);
          })
    });
    //피씨 메뉴 리셋&모션
    function PcMenuMode(){
      $(gnb).fadeIn(0);
      $(mobile_menu_btn).fadeOut(0).off();
      $(parent_menu).fadeIn(0).off();
      $(child_menu).fadeOut(0);
    }
    //모바일모드 리셋 첫화면
    function MobileMode(){
      $(mobile_menu_btn).fadeIn(0).off();
      $(gnb).fadeOut(0);
      $(parent_menu).fadeOut(0).off();
      $(child_menu).fadeOut(0);
      $(".header .menu-btn-mobile img").attr("src","../../img/menu-btn-mobile.png");
    }


    // PC 메뉴 오픈 모션
    function PcGnbOpen(){
      $(parent_menu).hover(
        function(){
          console.log("pc drop");
          // $(this).nextAll().stop().fadeToggle(100);
          $(this).find("ul.child-menu").stop().fadeIn(500);
        },function(){
          $(this).find("ul.child-menu").stop().fadeOut(0);
      });
    }
    // 모바일 메뉴 버튼에 리스너 등록
    function MobileBtnActive(){
      $(mobile_menu_btn).toggle(function() {
          MobileGnbOpen();
        }, function() {
          MobileGnbClose();
        });
      }

    // 모바일 메뉴 오픈 모션
    function MobileGnbOpen(){
      $(gnb).fadeIn(100);
      $(parent_menu).fadeIn(0);
      $(child_menu).fadeIn(0);
      $(".header .menu-btn-mobile img").attr("src","../../img/menu-btn-mobile-close.png");

    }


    // 첫 진입시 분기
    if(windowWidth > 750){
      PcMenuMode();
      PcGnbOpen();

    }else{
      MobileMode();
      $(mobile_menu_btn).click(function(){
        if(gnb.is(":hidden") & $(mobile_menu_btn).is(":visible")){
          MobileGnbOpen();
        }else if(gnb.is(":visible") & $(mobile_menu_btn).is(":visible")){
          $(gnb).fadeOut(100);
          $(".header .menu-btn-mobile img").attr("src","../../img/menu-btn-mobile.png");

        }
      });
      // MobileBtnActive();
    }
    //리사이즈 감지
    $(window).resize(function() {
      var windowWidth = $( window ).width();
      if(windowWidth < 750) {
        MobileMode();
        $(mobile_menu_btn).click(function(){
          if(gnb.is(":hidden") & $(mobile_menu_btn).is(":visible")){
            MobileGnbOpen();
          }else if(gnb.is(":visible") & $(mobile_menu_btn).is(":visible")){
            $(gnb).fadeOut(100);
            $(".header .menu-btn-mobile img").attr("src","../../img/menu-btn-mobile.png");

          }
        });
      }else if(windowWidth > 750){
        PcMenuMode();
        PcGnbOpen();
      }
    });
  });



  // //모바일 메뉴 아이템 리셋 모션 -> 사용안함
  // function MenuItemReset(setTime){
  //   console.log("사라져라 메뉴!!!");
  //   $(".header .gnb li.parent-menu:nth-child(1)").fadeOut(setTime).animate({'margin-left':'-500px'},100);
  //   $('.header .gnb li.parent-menu:nth-child(2) a').fadeOut(setTime).animate({'margin-left':'-500px'},200);
  //   $('.header .gnb li.parent-menu:nth-child(3) a').fadeOut(setTime).animate({'margin-left':'-500px'},300);
  //   $('.header .gnb li.parent-menu:nth-child(4) a').fadeOut(setTime).animate({'margin-left':'-500px'},400);
  //   $('.header .gnb li.parent-menu:nth-child(5) a').fadeOut(setTime).animate({'margin-left':'-500px'},500);
  //   $('.header .gnb li.parent-menu:nth-child(6) a').fadeOut(setTime).animate({'margin-left':'-500px'},600);
  //   MobileGnbClose(setTime);
  // }
  // function MenuItemMotion(){
  //   $(".header .gnb li.parent-menu:nth-child(1)").fadeIn(100).animate({'margin-left':'0px'},100);
  //   $('.header .gnb li.parent-menu:nth-child(2) a').fadeIn(100).animate({'margin-left':'0px'},200);
  //   $('.header .gnb li.parent-menu:nth-child(3) a').fadeIn(100).animate({'margin-left':'0px'},300);
  //   $('.header .gnb li.parent-menu:nth-child(4) a').fadeIn(100).animate({'margin-left':'0px'},400);
  //   $('.header .gnb li.parent-menu:nth-child(5) a').fadeIn(100).animate({'margin-left':'0px'},500);
  //   $(".header .gnb li.parent-menu:nth-child(6) a").fadeIn(100).animate({'margin-left':'0px'},600);
  // }
