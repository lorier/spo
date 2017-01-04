
$(document).ready(function() {
	$(document).foundation();

  	$('.safety-wrap').css({'display': 'inline-block'});
  	var safetyWidth = $('.safety-wrap').width();
  	var safetyHeight = $('.safety-wrap').height();

	var isMenuFixed = false;
  	
  	$('#sticky-menu').scrollToFixed({

  		preFixed: function(){ 
  			isMenuFixed = true;
  		},
  		postFixed: function(){
  			isMenuFixed = false;
  		} 	
  	});
  
	setSafetyHorizPosition(safetyWidth);
	
	$( window ).resize(function(){
	  	setSafetyHorizPosition(safetyWidth);
	  	setTopMargin(isMenuFixed, safetyHeight);
	});

	$( window ).scroll(function(){
		setTopMargin(isMenuFixed, safetyHeight);
	})
});


function isWindowDesktop(){
	return $(window).width() > 1023;
}
function setTopMargin(menuFixed, height){
	var desktop = isWindowDesktop();
	if ( menuFixed && !desktop ) {
		$('#sticky-menu').css({'margin-top': height});
		$('.safety-wrap').css({ 'background-color': '#373737' });
	} else {
		$('#sticky-menu').css({'margin-top': '0px'});
		$('.safety-wrap').css({ 'background-color': 'transparent' });

	}
}
function setSafetyHorizPosition(safetyWidth){
	if ( isWindowDesktop() ){
		//get the left offset of the menu bar
		var tOffset = $('.top-bar').offset().left;
	 	var tWidth = $('.top-bar').width()
	 	var sPosition = (tWidth + tOffset) - safetyWidth +'px';
		$('.safety-wrap').css({ 'left': sPosition, 'text-align': 'left', 'width': 'auto', 'background-color': 'transparent'  });
	}else {
		$('.safety-wrap').css({ 'left': 0, 'text-align': 'center', 'width': '100%'});
	}
}


