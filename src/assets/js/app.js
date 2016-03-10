$(document).foundation();


$(document).ready(function() {
  	$('#sticky-menu').scrollToFixed();
  

  	var s = $('.safety').width();
  
	setSafetyPosition(s);
	
	$( window ).resize(function(){
	  	setSafetyPosition(s)
	  });
});

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
		$('.safety').css({ 'left': sPosition });
	}else {
		$('.safety').css({'left': '40%', 'margin': "0, auto" });
	}
}