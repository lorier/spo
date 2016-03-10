$(document).foundation();


$(document).ready(function() {
  
  	var s = $('.safety-wrap').width();
  	var mobileMargin = setSafetyTopMarginforMobile();

  	$('#sticky-menu').scrollToFixed({marginTop: mobileMargin});
  
	setSafetyPosition(s);
	
	$( window ).resize(function(){
	  	setSafetyPosition(s);
	  	mobileMargin = setSafetyTopMarginforMobile();
	  });
	console.log($('.safety-wrap').height());
});
function setSafetyTopMarginforMobile(){
	return getWindowWidth() > 1024 ? 0 : $('.safety-wrap').height();
}

function getWindowWidth(){
	return $(window).width();
}

function setSafetyPosition(s){
	if ( getWindowWidth() > 1024 ){

		//get the left offset of the menu bar
		var tOffset = $('.top-bar').offset().left;
		console.log(tOffset);
	 	var tWidth = $('.top-bar').width()
	 	var sPosition = (tWidth + tOffset) - s +'px';
		$('.safety-wrap').css({ 'left': sPosition });
	}else {
		$('.safety-wrap').css({'left': '0', 'margin': "0, auto", 'text-align': 'center' });
		$('.safety').css()
	}
}