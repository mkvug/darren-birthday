$(document).ready(function () {
	$(document).on("focus", "input, textarea", function () {
		$(this).addClass("selectedinput");
	});
	$(document).on("blur", "input, textarea", function () {
		$(this).removeClass("selectedinput");
	});
});
