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
});