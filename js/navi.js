	$(function(){
		$('.sub').hide();
		$('.group > a').click(function(){
		$('.sub').hide();
		$(this).next().show();
		});
	});

	 $(document).ready(function(){
		$('.navi > li > a').click(function(){
			$('.navi > li > a').removeClass("active");
			$(this).addClass("active");
		});
	 });

	/* 
	$('.group').click(function(){
		$('.navi li .sub').slideUp();
		$(this).children('.sub').stop().slideToggle();
	});
	*/
