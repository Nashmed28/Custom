// // // // // function my () {
// // // // // 	alert('hi');
// // // // // }

// // // // $('#slider1').draggable({
// // // //     axis: "x"
// // // // });

// // // // $('#col3').on('click', function() {
// // // // 	alert('hi');
// // // // 	// var x1 = x2 = $(".slider").position().top;
// // // // 	// var y1 = $(".slider").position().left;
// // // // 	// var y2 = ($(window).width() + $(".slider").position().left);
// // // // 	// $(".slider").draggable('option', 'containment', [x1, y1, x2, y2]);
// // // // });

// // // // document.getElementById('slider1').onmousedown = function () {
// // // // 	var x = event.clientX;
// // // // 	alert(x);
// // // // }


// // // $('.slider').draggable({
// // //   	axis: "x"
// // // });

// // // function slide_motion (slider_id) {
// // // 	$('#' + slider_id).on('mousedown', function() {
// // // 	  	// Does the drag
// // // 	  	var y1 = y2 = $('#' + slider_id).position().top;
// // // 	  	var x1 = $('#' + slider_id).position().left;
// // // 	  	var x2 = ($(window).width() + $('#' + slider_id).position().left);
// // // 	  	// $('#' + slider_id).draggable('option', 'containment', [x1, y1, x2, y2]);
	  	
// // // 	  	// Get ratio info
// // // 	  	var screen_width = $(window).width();
// // //   		var x = event.clientX;
// // // 		var x_ratio = x * 100 / screen_width;
// // // 		// alert(x_ratio);
	
// // // 		$('#' + slider_id).prev().css( "width", x_ratio );
// // // 		$('#' + slider_id).next().css( "left", 66.66-x_ratio );
// // // 	});
// // // };

// // var screen_width = $(window).width();
// // var screen_height = $(window).height();

// // var sliders = document.getElementsByClassName("slider");

// // function x_ratio (pos) {
// //   	var x = pos / screen_width;
// //   	return x;
// // };

// // // function my () {alert(x_ratio($("#slider2").position().left)-10)}
// // $(".slider").draggable({axis:'x'});

// // function slide1() {
// //   	$('#slider1').draggable({axis: 'x', containment: [0.15*screen_width,0, (x_ratio($("#slider2").position().left)-0.15)*screen_width,100000]});
// // };

// // function slide2() {
// //   	$('#slider2').draggable({axis: 'x', containment: [(x_ratio($("#slider1").position().left)+0.15)*screen_width,0,0.85*screen_width,100000]});
// // };








// var screen_width = $(window).width();
// var screen_height = $(window).height();

// var sliders = document.getElementsByClassName("slider");

// function x_ratio (pos) {
//   var x = pos / screen_width;
//   return x;
// };

// // function my () {}
// $("#slider1").draggable({axis:'x'});
// $("#slider2").draggable({axis:'x'});


// function slide1() {
//   $('#slider1').draggable({axis: 'x', containment: [0.15*screen_width,0, (x_ratio($("#slider2").position().left)-0.15)*screen_width,100000]});
//   $("#column1").css({"width": (x_ratio($("#slider1").position().left))*screen_width});
  
//    $("#column2").css({"width": ((x_ratio($("#slider2").position().left)) - (x_ratio($("#slider1").position().left)))*screen_width, "left": (x_ratio($("#slider1").position().left))*screen_width });
  
// };

// function slide2() {
//   $('#slider2').draggable({axis: 'x', containment: [ (x_ratio($("#slider1").position().left)+0.15)*screen_width,0,0.85*screen_width,100000]});
//   $("#column2").css({"width": ((x_ratio($("#slider2").position().left)) - (x_ratio($("#slider1").position().left)))*screen_width});
// };










// var screen_width = $(window).width();
// var screen_height = $(window).height();

// var sliders = document.getElementsByClassName("slider");

// var mq = window.matchMedia( "(min-width: 500px)" );
// if (mq.matches) {alert('hi');};

function x_ratio (pos) {
  var screen_width = $(window).width();
  var x = pos / screen_width;
  return x;
};

// function my () {}
$("#slider1").draggable({axis:'x'});
$("#slider2").draggable({axis:'x'});


function slide1() {
  var screen_width = $(window).width();
  var screen_height = $(window).height();
  
  $('#slider1').draggable({axis: 'x', containment: [0.15*screen_width,0, (x_ratio($("#slider2").position().left)-0.15)*screen_width,100000]});
  
  if ($("#slider1").position().left >= 0.15*screen_width && $("#slider1").position().left <= (x_ratio($("#slider2").position().left)-0.15)*screen_width) {

  $("#column1").css({"width": (x_ratio($("#slider1").position().left))*screen_width});
  
   $("#column2").css({"width": ((x_ratio($("#slider2").position().left)) - (x_ratio($("#slider1").position().left)))*screen_width, "left": (x_ratio($("#slider1").position().left))*screen_width });
}
// else{alert('j')}
};

function slide2() {
  var screen_width = $(window).width();
  var screen_height = $(window).height();
  
  $('#slider2').draggable({axis: 'x', containment: [ (x_ratio($("#slider1").position().left)+0.15)*screen_width,0,0.85*screen_width,100000]});
    
    if ($("#slider2").position().left >= (x_ratio($("#slider1").position().left)+0.15)*screen_width && $("#slider2").position().left <= 0.85*screen_width) {

  $("#column2").css({"width": ((x_ratio($("#slider2").position().left)) - (x_ratio($("#slider1").position().left)))*screen_width});
  
  $("#column3").css({"width": (1 - x_ratio($("#slider2").position().left))*screen_width, "left": (x_ratio($("#slider2").position().left))*screen_width });
}
};

$( window ).resize(function() {
  var screen_width = $(window).width();
  var screen_height = $(window).height();
  
  var slider1_ratio = x_ratio($("#slider1").position().left);
  var slider2_ratio = x_ratio($("#slider2").position().left);
  
  // var column1_width = x_ratio($("#column1").css("width"));
  // var column2_width = x_ratio($("#column2").css("width"));
  // var column3_width = x_ratio($("#column3").css("width"));
  
  $("html").css({
    "width": "100%",
    "height": "100%"
  });
  
  $("body").css({
    "width": "100%",
    "height": "100%"
  });
  
  
  $("#slider1").css({
    "left": slider1_ratio*100 + "%", 
    "top": "20%", 
    "background": "black",
    "height": "70%",
    "width": "1px",
    "position": "absolute",
    "bottom": "10%"});
  
  $("#slider2").css({
    "left": slider2_ratio*100 + "%", 
    "background": "black",
    "height": "70%",
    "width": "1px",
    "position": "absolute",
    "top": "20%",
    "bottom": "10%"});
  
  $("#column1").css({
    "width": slider1_ratio*100 + "%"
  });
  
  $("#column2").css({
    "width": (slider2_ratio - slider1_ratio)*100 + "%",
    "left": slider1_ratio*100 + "%"
  });
  
  $("#column3").css({
    "width": ((1 - slider2_ratio)*100) + "%",
    "left": slider2_ratio*100 + "%"
  });
});








