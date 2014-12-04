$(document).ready(function() {
	$('.nav-icon').click(function(){
		if($('nav').hasClass('active')){
			$('nav ul').slideUp();
			$('nav').removeClass('active');
		}
		else{
			$('nav ul').slideDown();
			$('nav').addClass('active');
		}
	});
})