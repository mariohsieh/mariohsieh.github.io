$(document).ready(function() {
	
	function initial() {
		$('.container nav li:first-of-type').addClass("active");
		$('#bio').css("display", "inherit");
	}

	// event handlers
	
	// main navigation click
	$(document).on("click", ".container nav li", function() {
		var pagelink = $(this).html();
		$(".container nav li").removeClass("active");
		$(this).addClass("active");
		$('article div').css("display", "none");
		$('#'+pagelink).css("display", "inherit");
	});

	// artwork click
	$(document).on("click", "#artwork img", function() {
		var imageName = $(this).attr("alt");
		$(".overlay").css("display", "block").append("<img alt='"+imageName+"' src='img/"+imageName+".jpg' />");
	});
	
	// exit from gallery
	$(document).on("click", ".overlay", function() {
		$(this).css("display", "none").empty();
	});
		
	initial();
});

