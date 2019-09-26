/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Scrolling
5. Init Clients Slider
6. Init Testimonials Slider
7. Init Blog Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	setHeader();
	initMenu();
	initScrolling();
	initClientsSlider();
	initTestimonialsSlider();
	initBlogSlider();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.header');
		var menuBtn = $('.menu_button_wrap');

		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var hamburger = $('.hamburger');
			var menu = $('.menu');

			$('html').on('click', function()
			{
				menu.removeClass('active');
			});

			hamburger.on('click', function()
			{
				event.stopPropagation();
				menu.addClass('active');
			});

			menu.on('click', function()
			{
				event.stopPropagation();
			});
		}
	}

	/* 

	4. Init Scrolling

	*/

	function initScrolling()
	{
		if($('.main_nav ul li a').length)
		{
			var links = $('.scroll_link');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			$(window).scrollTo(target, 1500, {offset: -80, easing: 'easeInOutQuart'});
	    			if($('.menu').hasClass('active'))
	    			{
	    				$('.menu').removeClass('active');
	    			};
	    		});
	    	});
		}	
	}

	/* 

	5. Init Clients Slider

	*/

	function initClientsSlider()
	{
		if($('.clients_slider').length)
		{
			var slider = $('.clients_slider');
			slider.owlCarousel(
			{
				items:6,
				autoplay:true,
				autoplayTimeout:8000,
				loop:true,
				dots:false,
				nav:false,
				responsive:
				{
					0:{items:2},
					720:{items:3},
					991:{items:4},
					1200:{items:6}
				}
			})
		}
	}

	/* 

	6. Init Testimonials Slider

	*/

	function initTestimonialsSlider()
	{
		if($('.testimonials_slider').length)
		{
			var slider = $('.testimonials_slider');
			slider.owlCarousel(
			{
				items:1,
				autoplay:true,
				autoplayTimeout:8000,
				smartSpeed:1200,
				loop:true,
				nav:false
			})
		}
	}

	/* 

	7. Init Blog Slider

	*/

	function initBlogSlider()
	{
		if($('.blog_slider').length)
		{
			var slider = $('.blog_slider');
			slider.owlCarousel(
			{
				items:4,
				autoplay:false,
				autoplayTimeout:8000,
				loop:true,
				dots:false,
				nav:false,
				responsive:
				{
					0:{items:1},
					720:{items:2},
					991:{items:3},
					1200:{items:4}
				}
			})
		}
	}

});