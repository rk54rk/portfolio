var c = $('.b')[0];
c.onclick = function() {
 // Trigger the `hover` event on the paragraph
 c.onhover.call(p);
};

div_porportion();

function div_porportion(){
	var b1 = $('.b1').width();
	$('.b1').css({'height':b1+'px'});
	
	var b2 = $('.b2').width();
	$('.b2').css({'height':b2/2+'px'});
	
	var b3 = $('.b3').width();
	$('.b3').css({'height':b3*2+'px'});
	
	var b4 = $('.b4').width();
	$('.b4').css({'height':b4+'px'});
}
