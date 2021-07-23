	$(function(){
		$('.sub').hide();
		$('.group > a').click(function(){
		$('.sub').hide();
		$(this).next().show();
		});
	});

	 $(document).ready(function(){
		$('.nav_info > li > a').click(function(){
			$('.nav_info > li > a').removeClass("active");
			$(this).addClass("active");
		});
	 });

	/* 
	$('.group').click(function(){
		$('.nav_info li .sub').slideUp();
		$(this).children('.sub').stop().slideToggle();
	});
	*/
