// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';

	$('#dn').on('change', function () {
		if ($(this).prop('checked') == false) {
			$('body').addClass('light');
			localStorage.setItem('light', this.checked);
		} else {
			$('body').removeClass('light');
			localStorage.removeItem('light');
		}
	});

	if (localStorage.getItem('light')) {
		$('body').addClass('light');
		$("#dn").prop("checked", false);
	} else {
		$("#dn").prop("checked", true);
	}

	// lazy load image
	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

})(jQuery);