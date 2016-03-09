$(document).foundation();

//Sticky header
// $(window).resize(function() {
// 	getHeight();
// 	console.log(window.height);
// });

// function getHeight (){
// 	var heroHeight = $('.hero').height();
// 		$('.hero').css({'height': heroHeight,});

// 	if ($(".menu-toggle").css("display") == "block" ){
// 		$('.sticky-menu').css({'height': heroHeight,});
// 	}else if ($(".menu-toggle").css("display") == "none" ){
// 		$('.sticky-menu').css({'height': 'auto'});
// 	}
// }

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
	if ( getWindowWidth() > 639 ){
		//get the left offset of the menu bar
		var mOffset = $('.menu').offset().left;
	 	var mWidth = $('.menu').width()
	 	var sPosition = (mWidth + mOffset) - s +'px';
		$('.safety').css({ 'left': sPosition });
	}else {
		$('.safety').css({'left': '40%', 'margin': "0, auto" });
	}
}