$(function(){
	$('#phoneWrap li').hover(function(){
		$(this).find('.phone').animate({bottom:0},500);
		$(this).find('.phone-bg').animate({opacity:0.2},500);
		$(this).find('.mark').css({'display':'block'});
	
	},function(){
		$(this).find('.phone').animate({bottom:'-20px'},500);
		$(this).find('.phone-bg').animate({opacity:1},500);
		$(this).find('.mark').css({'display':'none'});
	
	})
})