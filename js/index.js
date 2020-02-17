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

	// Navbar
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$(".change").css({
				"background": "#333"
			});
			// $("li.nav-active").css("color", "#ff305b");
		} else {
			$(".change").css({
				"background": "transparent"
			});
			$(".nav-link").css("color", "white");
		}
	});

	//Add Active Class{}
$('.navbar-nav').on('click', 'li',function(e) {
	e.preventDefault();
	$(".navbar-nav li.nav-active").removeClass("nav-active");
	$(this).addClass("nav-active");
});

	//Trigger Owl Slider
	$(".owl-carousel").owlCarousel({
		loop:true,
		items:2,
		autoplay: false,
		dots:true,
		margin: 10,
		responsive:{
			0:{items:1},
			600:{items:1},
			1000:{items:1}
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

		//Trigger Mixitup

		var mixer = mixitup('#container');

		// Adjust shuffle
		$('.shuffle li').click(function() {
			$(this).addClass('selected').siblings().removeClass('selected');
		});

});