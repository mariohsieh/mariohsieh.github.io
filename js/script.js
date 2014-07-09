$(document).ready(function() {
	
	function initial() {
		$('.container nav li:first-of-type').addClass("active");
		$('#bio').css("display", "inherit");
	}

	// event handlers
	$(document).on("click", ".container nav li", function() {
		var pagelink = $(this).html();
		$(".container nav li").removeClass("active");
		$(this).addClass("active");
		$('article div').css("display", "none");
		$('#'+pagelink).css("display", "inherit");
	});


	initial();
});

