$(function() {

	//Adjust Home Height

	$('.header').height($(window).height());

	//Typer
	var typed = new Typed('.typed', {
		strings: ["", "Designer", "Developer"],
		typeSpeed: 15,
		backSpeed: 0,
		loop: true,
		loopCount: Infinity,
		showCursor: true,
		cursorChar: '|',
		autoInsertCss: true,
	});

	//Trigger Owl Slider
	$(".owl-carousel").owlCarousel({
		items: 2,
		autoWidth: true,
		center: true,
		loop: true,
		margin: 50,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	//Smooth Scroll
	$('.navbar-dark .navbar-nav .nav-link').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top
		}, 500);
	});

	//Counter
	$('.count').each(function() {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
				duration: 8000,
				easing: 'swing',
				step: function() {
					$(this).text(Math.ceil(this.Counter));
				}
			});
	});
});