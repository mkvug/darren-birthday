$(document).ready(function () { 
	$(document).on("click","#backtotop",(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
		return false;	
	})
	);
});
