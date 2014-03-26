/* jshint camelcase: false */
$(document).ready(function(){
	'use strict';

	// DROPDOWN TOGGLE
	$('.dropdown-toggle').dropdown();


	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
	$('.dropdown').on('show.bs.dropdown', function(){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});


	// ADD SLIDEUP ANIMATION TO DROPDOWN //
	$('.dropdown').on('hide.bs.dropdown', function(){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});


	// FLECHA GIGANTE EN HOVER DE MAIN SLIDER //
	$('.main-slider .link-more').hover(function(){
		$('.icon-bg').fadeIn();
	}, function() {
		$('.icon-bg').fadeOut();
	});
	

	// FITVIDS (volver los videos embedded responsive)
	$('.container-video').fitVids();

	// SCROLLSPY (indicar active-nav según punto de scroll)
	$('body').scrollspy({ target: '.sidebar-nav' });

	// STICKY (mantener pegado nav en scroll)
	$('#sticky-nav').stick_in_parent();

	// SMOOTH SCROLL
	$('.smooth[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
	    }
	});
});