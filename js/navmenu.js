$(document).ready(function () {
	$("#navbar ul li").hover(function()
		{
			if ($("> ul", this).length > 0) 
    				{
        			$("> ul", this).slideDown({duration: "fast"});
    				}
		}, function()
		{
			if ($("> ul", this).length > 0) 
				{
        			$("> ul", this).slideUp({duration: "fast"});
    				}
		}
	);
	$(".navbutton").mouseover(function()
		{
			$(this).css("border-bottom", "5px solid #3e3e3e");
			$("> p", this).css("color", "#3e3e3e");
		});
	$(".navbutton").mouseout(function()
		{
			$(this).css("border-bottom", "5px solid #f0f0f0");
			$("> p", this).css("color", "#9e9e9e");
		});
	$(".dropdown").mouseover(function()
		{
			$(this).parent().children(".navbutton").css("border-bottom", "5px solid #3e3e3e");
			$(this).parent().children(".navbutton p").css("color", "#3e3e3e");
		});
	$(".dropdown").mouseout(function()
		{
			$(this).parent().children(".navbutton").css("border-bottom", "5px solid #f0f0f0");
			$(this).parent().children(".navbutton p").css("color", "#9e9e9e");
		});
	$(".dropdown p").mouseover(function()
		{
			$(this).css("background-color","#e9e9e9");
		});
	$(".dropdown p").mouseout(function()
		{
			$(this).css("background-color","#f1f1f1");
		});

});
