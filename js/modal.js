($(function(){
	$('.btnOne').click(function(){
		$('.overlay').addClass('open');
		$('.signUpContain').addClass('open');
	});
	
	$('.btnTwo').click(function(){
		$('.overlay').addClass('open');
		$('.signInContain').addClass('open');
	});
	
	$('.exOut').click(function(){
		$('.overlay').removeClass('open');
		$('.modal').removeClass('open');
	});
}));