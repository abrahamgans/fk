/* Document Ready ---------- */
$(document).ready(function() {

	/* Sidebar */
	$('.menu-btn').click(function() {
	  $('body').addClass('sb-toggled');
	  $('.prevent-click').fadeIn();
	});
	$('body .prevent-click').click(function() {
	  $('body').removeClass('sb-toggled');
	  $('.prevent-click').fadeOut();
	});

	/* Promote Ad */
	$('.promote-account-ad .close-btn').click(function() {
	  $(this).parent().parent().hide();
	});

	/* Promote Form */
	$('.package-select').click(function() {
	  $(this).toggleClass('toggled');
	});


	/* Dark Mode */
	$('.darkmode-options .button .switch input').change(function() {

		console.log(_getCookie('dark_mode'));

		if(this.checked) {

			_addCookie('1', 'dark_mode');

			$('body').addClass('darkmode');

		} else {

			_addCookie('0', 'dark_mode');

			$('body').removeClass('darkmode');
		}
	});

	/* Scroll */
	$(function() {
	  $('.scroll-more-btn').on('click', function(e) {
	  	$(this).addClass('scrolled');
	    e.preventDefault();
	    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');

	  });
	});


});
