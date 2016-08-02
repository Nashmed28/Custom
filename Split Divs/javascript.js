// // function my () {
// // 	alert('hi');
// // }

// $('#slider1').draggable({
//     axis: "x"
// });

// $('#col3').on('click', function() {
// 	alert('hi');
// 	// var x1 = x2 = $(".slider").position().top;
// 	// var y1 = $(".slider").position().left;
// 	// var y2 = ($(window).width() + $(".slider").position().left);
// 	// $(".slider").draggable('option', 'containment', [x1, y1, x2, y2]);
// });

// document.getElementById('slider1').onmousedown = function () {
// 	var x = event.clientX;
// 	alert(x);
// }


$('.slider').draggable({
  	axis: "x"
});

function slide_motion (slider_id) {
	$('#' + slider_id).on('mousedown', function() {
	  	// Does the drag
	  	var y1 = y2 = $('#' + slider_id).position().top;
	  	var x1 = $('#' + slider_id).position().left;
	  	var x2 = ($(window).width() + $('#' + slider_id).position().left);
	  	// $('#' + slider_id).draggable('option', 'containment', [x1, y1, x2, y2]);
	  	
	  	// Get ratio info
	  	var screen_width = $(window).width();
  		var x = event.clientX;
		var x_ratio = x * 100 / screen_width;
		// alert(x_ratio);
	
		$('#' + slider_id).prev().css( "width", x_ratio );
		$('#' + slider_id).next().css( "left", 66.66-x_ratio );
	});
};

