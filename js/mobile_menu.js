$(function(){
  var windowWidth = $( window ).width();
  var gnb = $('.header .gnb');
  var mobile_menu_btn = $('.menu-btn-mobile');
  var parent_menu = $('.header .gnb li.parent-menu');
  var parent_menu_a = $('.header .gnb li.parent-menu a');
  var child_menu = $('ul.child-menu');
  var mobile_gnb_flag=0;

  //피씨 메뉴 드롭다운 모션
  function PcMenuMode(){

    $(parent_menu).hover(function(){
      $(this).find("ul.child-menu").stop().fadeToggle(400);
    });
  }

//모바일모드 첫화면
function MobileMode(){
  $(parent_menu).off();
  $(gnb).fadeOut(0);
  $(parent_menu).fadeIn(0);
  $(child_menu).fadeIn(0);
}

//모바일 메뉴 오픈 모션
function MobileGnbOpen(){
  $(gnb).fadeIn(100);
  $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile-close.png");

}
//모바일 메뉴 닫기 모션
function MobileGnbClose(){
  $(gnb).fadeOut(100);
  $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile.png");
}

  // 첫 진입시 별
  if(windowWidth > 601){
    $(gnb).fadeIn(0);
    $(parent_menu).fadeIn(0);
    $(child_menu).fadeOut(0);
    PcMenuMode();
  }else{
    MobileMode()
    $('.menu-btn-mobile').click(function(){
      //모바일 gnb 펼쳐짐
      if(gnb.is(":hidden") & $('.menu-btn-mobile').is(":visible")){
        console.log("메뉴버튼 클릭 on");
        MobileGnbOpen();
        // MenuItemMotion();
        $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile-close.png");
      }

      else if(gnb.is(":visible") & $('.menu-btn-mobile').is(":visible")){
        //모바일 gnb 닫힘
        MobileGnbClose(500);
        $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile.png");


      }
    });
  }

  //리사이즈 감지
  $(window).resize(function() {
    var windowWidth = $( window ).width();
    if(windowWidth < 601) {
      MobileMode();
      $('.menu-btn-mobile').click(function(){
        //모바일 gnb 펼쳐짐
        if(gnb.is(":hidden") & $('.menu-btn-mobile').is(":visible")){
          console.log("메뉴버튼 클릭 on");

          MobileGnbOpen();
          // MenuItemMotion();
          $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile-close.png");
        }

        else if(gnb.is(":visible") & $('.menu-btn-mobile').is(":visible")){
          //모바일 gnb 닫힘
          MobileGnbClose();
          $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile.png");
        }
      });

    } else {
        //창 가로 크기가 601보다 클 경우
        $(gnb).fadeIn(0);
        $(parent_menu).fadeIn(0);
        $(child_menu).fadeOut(0);
        PcMenuMode();

    }
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








});
