$(function(){
  //bxslider script code
  $('.visual-slider').bxSlider({
   mode:'horizontal',
   moveSlides:1,
   slideMargin:40,
   infiniteLoop:true,
   maxSlides:1,
   speed:400,
   auto:true,
   pager:true,
   autoControls:true,
   controls:false,
   responsive:true,
   autoDirection:'next'
  })
  $('.con1-slider').bxSlider({
    mode:'horizontal',
    moveSlides:1,
    slideMargin:40,
    infiniteLoop:true,
    maxSlides:3,
    speed:400,
    auto:true,
    pager:true,
    autoControls:true,
    controls:false,
    responsive:true,
    autoDirection:'next'
   })
});
$(function(){
  $('.gototop').click(function(e){
    $.scrollTo(this.hash || 0, 900)
  })

  /* Change CSS with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.gototop').addClass('active')
    }
    else {$('.gototop').removeClass('active')
    }
  })
});
$(function(){
  var $tablist = $('.tab');
    
  $tablist.find('ul ul').hide(); //서브 모두감추기
  $tablist.find('li.active>ul').show(); //서브 active만 보이기
    
  function TabToggle(event){
    var $ts = $(this);
    $ts.next('ul').show()
      .parent('li').addClass('active')
      .siblings('li').removeClass('active')
      .find('>ul').hide();

      if($ts.attr('href') == '#'){
        return false;
      }
    }

  //탭 click,focus 이벤트처리
  $tablist.find('>ul>li>a').click(TabToggle).focus(TabToggle);
});

 //bxslider script code
$(function(){
  $('.app').bxSlider({
    mode:'horizontal',
    moveSlides:1,
    infiniteLoop:true,
    maxSlides:1,
    speed:400,
    auto:true,
    pager:false,
    controls:false,
    responsive:true,
    autoDirection:'next'
  });
});

$(function(){
  var $tablist = $('.tab2');
    
  $tablist.find('ul ul').hide(); //서브 모두감추기
  $tablist.find('li.active>ul').show(); //서브 active만 보이기
    
  function TabToggle(event){
    var $ts = $(this);
    $ts.next('ul').show()
      .parent('li').addClass('active')
      .siblings('li').removeClass('active')
      .find('>ul').hide();

      if($ts.attr('href') == '#'){
        return false;
      }
    }

  //탭 click,focus 이벤트처리
  $tablist.find('>ul>li>a').click(TabToggle).focus(TabToggle);
});

//bxslider script code
$(function(){
	$('.banner').bxSlider({
	  mode:'horizontal',
		moveSlides:1,
		slideMargin:40,
		infiniteLoop:true,
		maxSlides:1,
		speed:400,
		auto:true,
		pager:true,
		autoControls:false,
		controls:false,
		responsive:true,
		autoDirection:'next'
	});
});

$(document).ready(function(){
	$('.banner2').bxSlider({
    mode: 'horizontal',
    moveSlides: 1,
    infiniteLoop: true,
    slideWidth: 1000,
    minSlides: 6,
    maxSlides: 6,
    speed: 400,
    pager:false,
    auto:true,
    controls:false,
    autoControls:false 
	});
});