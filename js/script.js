$('.menu-btn').on('click',function(){
  $('.menu-content').toggleClass('open');
  $('.menu-btn').toggleClass('btn-open');
});
$('.menu-list').on('click',function(){
  $('.menu-content').removeClass('open');
  $('.menu-btn').removeClass('btn-open');
});


$(function(){
  $(".modaal-outer-wrapper").click(function (){
    $('#video')[0].pause();
  });
});