$(function(){
  // gnb 객체 할당
  var gnb = $('.header .gnb');
  var gnb_li =$('.header .gnb li a');

  // 반응형 햄버거 메뉴 토글 구현
// $('.menu-btn-mobile').bind({
//   click:function(){
//     MobileGnbOpen();
//   },
//   click:function(){
//     MobileGnbClose();
//   }
//
// });

  $('.menu-btn-mobile').click(function(){
          // $(gnb).toggle(1000);

          if(gnb.is(":hidden") & $('.menu-btn-mobile').is(":visible")){
            console.log("now visible");
            $(".gnb_pointer").addClass("display_none");
            $(".service-req").removeClass("display_none").addClass("display_block");
            MobileGnbOpen();
            MenuItemMotion();
            $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile-close.png");
          }
          else if(gnb.is(":visible") & $('.menu-btn-mobile').is(":visible")){
            console.log("now hidden");
            MenuItemReset(500);
            $(".header .menu-btn-mobile img").attr("src","img/menu-btn-mobile.png");
          }

  });

  // 메뉴 글씨 이동 모션
  function MobileGnbOpen(){
    $(gnb).fadeIn(100);
  }

  function MobileGnbClose(setTime){
    $(gnb).fadeOut(setTime);
  }

  function MenuItemReset(setTime){
    console.log("사라져라 메뉴!!!");
    $('.header .gnb li:nth-child(1) a').fadeOut(setTime).animate({'margin-left':'-500px'},100);
    $('.header .gnb li:nth-child(2) a').fadeOut(setTime).animate({'margin-left':'-500px'},200);
    $('.header .gnb li:nth-child(3) a').fadeOut(setTime).animate({'margin-left':'-500px'},300);
    $('.header .gnb li:nth-child(4) a').fadeOut(setTime).animate({'margin-left':'-500px'},400);
    $('.header .gnb li:nth-child(5) a').fadeOut(setTime).animate({'margin-left':'-500px'},500);
    MobileGnbClose(setTime);
  }
  function MenuItemMotion(){
    $('.header .gnb li:nth-child(1) a').fadeIn(100).animate({'margin-left':'0px'},100);
    $('.header .gnb li:nth-child(2) a').fadeIn(100).animate({'margin-left':'0px'},200);
    $('.header .gnb li:nth-child(3) a').fadeIn(100).animate({'margin-left':'0px'},300);
    $('.header .gnb li:nth-child(4) a').fadeIn(100).animate({'margin-left':'0px'},400);
    $('.header .gnb li:nth-child(5) a').fadeIn(100).animate({'margin-left':'0px'},500);

  }

  // if(.header .gnb)
});
