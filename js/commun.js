$(function(){
  var dt = $(".qna-area dt");
  var arrow = $(".qna-arrow");

  $(dt).click(function(){
    if($(this).next().is(':visible')){
      $(this).next().stop().slideToggle();
      $(this).find('span').css('background-position','0px 0px');
    }else{
      $(this).next().stop().slideToggle();
      $(this).find('span').css('background-position','0px -20px');
    }
  });
});
