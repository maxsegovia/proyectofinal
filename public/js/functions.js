(function($) {

	"use strict"

	/* - Google-map-black & white */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'images/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom") ,10);
		var styles = [{"featureType":"landscape","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":" "},{"lightness":" "},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":" "},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":" "},{"saturation":" "}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":" "},{"saturation":" "}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}

		map = new google.maps.Map(document.getElementById(obj), mapOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		infowindow = new google.maps.InfoWindow({
			content: contentString
		});

        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}

	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$(".menu-block").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		} // set sticky menu - end

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});

	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {
		// ON MOBILE MENU CLICK, HIDE NAVBAR
		$('.nav-tabs-react').on('click', function () {
			if ($(window).width() < 991) {
				$('.navbar-toggler').click();
				$('.navbar-toggle').click();
			}
		});

		/* - Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$(".menu-block").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		} // set sticky menu - end

		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');

		/* Find all anchors */
		$("#navbar").find("a[href]").each(function(i,a) {

			var $a = $(a);
			var href = $a.attr("href");

			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+"#") == 0 ) {

				/* remove URI from href */
				href = href.replace(url,"");

				/* update anchors HREF with new one */
				$a.attr("href",href);
			}
		});

		/* Add Easing Effect on Section Scroll */
		$(".navbar-nav > li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])").on("click", function() {

			if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {

					$("html, body").animate( { scrollTop: target.offset().top - 83 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});

		/* - Responsive Caret */
		$(".ddl-switch").on("click", function() {

			var li = $(this).parent();

			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});

		/* - Remove p empty tag for Shortcode */
		$( "p" ).each(function() {
			var $this = $( this );
				if( $this.html().replace(/\s|&nbsp;/g, '').length == 0) {
				$this.remove();
			}
		});

		/* - Tooltip */
		$('[data-toggle="tooltip"]').tooltip();

		/* Intro Section */
		if($(".gear-carousel").length){
			$(".gear-carousel").owlCarousel({
				autoplay: false,
				touchDrag: true,
				mouseDrag: true,
				loop:true,
				margin: 30,
				nav: true,
				dots: false,
				smartSpeed: 1000,
				responsive:{
					0:{
						items:1
					},
					560:{
						items:2
					},
					1000:{
						items:3
					},
					1200:{
						items:3
					}
				}
			})
		}

		/* Product Section */
		if($(".product-carousel").length){
			$(".product-carousel").owlCarousel({
				autoplay: false,
				touchDrag: true,
				mouseDrag: true,
				loop:true,
				margin: 0,
				nav: true,
				dots: false,
				smartSpeed: 1000,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					1000:{
						items:3
					},
					1200:{
						items:4
					}
				}
			})
		}

		/* Testimonial Section */
		if($(".testimonial-carousel").length){
			$(".testimonial-carousel").owlCarousel({
				autoplay: false,
				touchDrag: true,
				mouseDrag: true,
				loop:true,
				margin: 0,
				nav: false,
				dots: true,
				smartSpeed: 1000,
				responsive:{
					0:{
						items:1
					},
					560:{
						items:1
					},
					1000:{
						items:2
					},
					1200:{
						items:2
					}
				}
			})
		}

		/* - Client Carousel */
		if( $(".clients-carousel").length ) {
			$(".clients-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: false,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					480:{
						items: 2
					},
					640:{
						items: 3
					},
					992:{
						items: 4
					},
					1200:{
						items: 5
					}
				}
			});
		}

		/* - Client Carousel */
		if( $(".accessories-tab-box").length ) {
			$(".accessories-tab-box div.nav").owlCarousel({
				loop: false,
				margin: 30,
				nav: true,
				dots: false,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					480:{
						items: 2
					},
					640:{
						items: 2
					},
					992:{
						items: 3
					},
					1200:{
						items: 4
					},
					1367:{
						items: 5
					}
				}
			});
		}
		$(".accessories-tab-box .nav-tabs a").on("click", function(e) {
			$(".accessories-tab-box .nav-tabs a").removeClass('active');
			$(this).addClass('active');
		});

		/* - Choose Section */
		var choose_count = 0;
		choose_count = $( "[id*='choose_shape-']" ).length;
		for(var i=1; i<=choose_count; i++)
		{
			$( "[id*='choose_shape-"+i+"']" ).css("clip-path","url('#choose-"+i+"')");
		}

		/* - Choose Border Section */
		var choose_br_count = 0;
		choose_br_count = $( "[id*='choose_br_shape-']" ).length;
		for(var i=1; i<=choose_br_count; i++)
		{
			$( "[id*='choose_br_shape-"+i+"']" ).css("clip-path","url('#choose_br-"+i+"')");
		}

		/* - Contact Map */
		if($('#map-canvas-contact').length==1){
			initialize('map-canvas-contact');
		}

		/* -- Places Section */
		if( $("#places-section").length ){
			if( width >= 768 )
			{
				var c_width = $("#places-section .carousel-caption").width();
				var control_width = (width - c_width) / 2;
				$(".places-section .carousel-control").css("width", control_width);
			}
		}

		/* Gallery */
		if( $(".entry-gallerylist").length ){
			$(".entry-gallerylist").magnificPopup({
				delegate: "a",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				}
			});
		}

		/* -- Tabs */
		$('a[data-toggle="tab"],a[data-toggle="collapse"]').on( "click", function() {
			setTimeout(function() {
				$(window).trigger("resize");
			}, 500);
			setTimeout(function() {
				$(window).trigger("resize");
			}, 500);
		});


		if( $(".popup-modal").length ){

			$('.popup-modal').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#username',
				modal: true
			});
			$(document).on('click', '.popup-modal-dismiss', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});
		}

		/* -- Gallery Popup */
		function getParameterByName(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		var SlideId = getParameterByName('id');
		$(".gallery-box .gallery-box-hover > a").on("click",function() {
			$(".gallery-active").css("display","block");
			$("html").css("overflow","hidden");

			$('#carousel').flexslider({
				animation: "slide",
				controlNav: false,
				directionNav: true,
				animationLoop: false,
				slideshow: false,
				itemWidth: 185,
				itemMargin: 10,
				asNavFor: '#slider',
				startAt: SlideId
			});
			if( $.trim(SlideId.length) == 0 ){
				SlideId = 0;
			}
			$('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				startAt: SlideId,
				sync: "#carousel"
			});
		});

		$(".gallery-active .gallery-content .act-close").on("click",function() {
			$(".gallery-active").css("display","none");
			$("html").removeAttr("style");
		});


		/* -- Intro Section */
		if( $(".intro-section").length ){
			$(".intro-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{
					$(".intro-section .intro-content i").addClass("animated rotateIn");
				});
			});
		}

		/* -- Accessories Section */
		if( $(".accessories-section").length ){
			$(".accessories-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{
					$(".accessories-section .accessories-tab-box").addClass("animated fadeInRight");
				});
			});
		}

		/* -- Whychoose Section */
		if( $(".whychoose-section").length ){
			$(".whychoose-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{
					$(".whychoose-section .row > .col-md-3").addClass("animated fadeInUp");
				});
			});
		}

		/* -- Team Section */
		if( $(".team-section").length ){
			$(".team-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{
					$(".team-section .row > .col-md-3").addClass("animated fadeInUp");
				});
			});
		}

		/* -- Pricing Section */
		if( $(".price-section").length ){
			$(".price-section").each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{
					$(".price-section .row > .col-md-3").addClass("animated fadeInDown");
				});
			});
		}

		if( $("#btn_submit").length ){
			/* - Contact Form */
			$( "#btn_submit" ).on( "click", function(event) {
				event.preventDefault();
				var mydata = $("form").serialize();

				$.ajax({
					type: "POST",
					dataType: "json",
					url: "contact.php",
					data: mydata,
					success: function(data) {

					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input-name").val("");
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#input_subject").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();
					}
					},
					error: function(xhr, textStatus, errorThrown) {
					//alert(textStatus);
					}
				});
				return false;
				$('#contact-form').attr("action", "saveQuery").submit();
			});

			/* Quick Contact Form /- */
			document.addEventListener('DOMContentLoaded', function () {
				document.querySelector('main').className += 'loaded';
			});
		}

	});

	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {

		/* - Site Loader */
		if ( !$('html').is('.ie6, .ie7, .ie8') ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css('display','none');
		}
	});

})(jQuery);
