$(document).ready(function(){
	var gnbdiv = $('.gnb > li > div');
	var bg = $('.bg_gnb');
	var li = $('.gnb > li');

	li.on('mouseover focusin', function(){
		hig=0;
		gnbdiv.each(function(){
			temp=parseInt($(this).outerHeight());
			if(hig <= temp){
				hig=temp;
			}
		});
		gnbdiv.show().css('height', hig);
		bg.show().css('height', hig);
	});

	li.on('mouseleave', function(){
		hide_el();
	});
	
	function hide_el() {
		gnbdiv.hide().removeAttr('style');
		bg.hide().removeAttr('style');
	}
});
// $(function(){
// 	var gnb = $(".g1>li");
// 	var sub = $(".g1>li>ul");

// 	var headerMin = $(".menu").height();//30px
// 	var headerMax = sub.innerHeight() + headerMin;	

// 	var state = false; //참-거짓설정변수
// 	var speed = 150;
// 	gnbA.mouseenter(function(){
// 		if(!state){ 
// 			$(".menu").stop().animate({height:headerMax},speed,function(){
// 				sub.stop().fadeIn(speed);
// 			});
// 			state = true;
// 		}
		
// 		$(this).find(sub).addClass("on"); //sub는 변수이므로 ""생략
// 	});

// 	gnbA.mouseleave(function(){
// 		$(this).find(sub).removeClass("on");
// 	});   
	
	
// 	$(".gnb").mouseleave(function(){
// 		sub.stop().fadeOut(speed,function(){
// 			$(".menu").stop().animate({height:headerMin},speed);            
// 		});
// 		state = false;
// 	});
	
// 	$(".g1 li a").focus(function(){
// 		$(".menu").stop().animate({height:headerMax},speed);
// 		sub.stop().fadeIn(speed);
// 	}).blur(function(){
// 		$(".menu").stop().animate({height:headerMin},speed);
// 		sub.stop().fadeOut(speed);		  
// 	});	
// });