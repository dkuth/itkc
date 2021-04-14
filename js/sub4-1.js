$(function(){
//탭스크립트
  $('.tmenu').click(function(){
    var tab_menu = $(this).attr('data-tab');

      //현재탭의 스타일제거
  $('.tmenu').removeClass('current');
  $('.tab-content').removeClass('current');
        
    //자신의 것만 스타일지정
  $(this).addClass('current');
  $('#'+tab_menu).addClass('current');

  });/* .tmenu end */
});/* script end */