if($.browser.mozilla||$.browser.opera ){document.removeEventListener("DOMContentLoaded",jQuery.ready,false);document.addEventListener("DOMContentLoaded",function(){jQuery.ready()},false)}
jQuery.event.remove( window, "load", jQuery.ready );
jQuery.event.add( window, "load", function(){ jQuery.ready(); } );
jQuery.extend({
	includeStates:{},
	include:function(url,callback,dependency){
		if ( typeof callback!='function'&&!dependency){
			dependency = callback;
			callback = null;
		}
		url = url.replace('\n', '');
		jQuery.includeStates[url] = false;
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = function () {
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.onreadystatechange = function () {
			if ( this.readyState != "complete" && this.readyState != "loaded" ) return;
			jQuery.includeStates[url] = true;
			if ( callback )
				callback.call(script);
		};
		script.src = url;
		if ( dependency ) {
			if ( dependency.constructor != Array )
				dependency = [dependency];
			setTimeout(function(){
				var valid = true;
				$.each(dependency, function(k, v){
					if (! v() ) {
						valid = false;
						return false;
					}
				})
				if ( valid )
					document.getElementsByTagName('head')[0].appendChild(script);
				else
					setTimeout(arguments.callee, 10);
			}, 10);
		}
		else
			document.getElementsByTagName('head')[0].appendChild(script);
		return function(){
			return jQuery.includeStates[url];
		}
	},
	readyOld: jQuery.ready,
	ready: function () {
		if (jQuery.isReady) return;
		imReady = true;
		$.each(jQuery.includeStates, function(url, state) {
			if (! state)
				return imReady = false;
		});
		if (imReady) {
			jQuery.readyOld.apply(jQuery, arguments);
		} else {
			setTimeout(arguments.callee, 10);
		}
	}
});

///// include js files ////////////
$.include('js/jquery.cycle.all.min.js');
$.include('js/jquery.quicksand.js');
$.include('js/jquery.prettyPhoto.js');
$.include('js/jquery.flexibleColumns.min.js');
$.include('js/superfish.js');
$.include('js/hoverIntent.js');
$.include('js/jquery.innerfade.js');
$.include('js/jquery.watermarkinput.js');
$.include('js/jquery.tipsy.js');

if ($('#slider_pay').length) {
	$.include('js/slider.js');
};

if ($('#contact').length) {
	$.include('js/jquery.jigowatt.js');
} 

// Sliders

if ($('#imageSlider').length) {
	$.include('sliders/nivo-slider/jquery.nivo.slider.js');
	jQuery(window).load(function(){
		jQuery('#imageSlider').nivoSlider({ 
			effect:'random',
			animSpeed:600,
			startSlide: 0,
			pauseTime:3000,
			captionOpacity: 1, 
			pauseOnHover:true,
			directionNav: false,
			directionNavHide:false
		});
	});
}

if ($('#accordion').length) {
	$.include('sliders/elegant-accordion/jquery.elegantAccordion.js');
	jQuery(function() {
		jQuery('#accordion').eAccordion({
			easing: 'swing',                // Anything other than "linear" or "swing" requires the easing plugin
			autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not
			startStopped: false,            // If autoPlay is on, this can force it to start stopped
			stopAtEnd: false,				// If autoplay is on, it will stop when it reaches the last slide
			delay: 3000,                    // How long between slide transitions in AutoPlay mode
			animationTime: 600,             // How long the slide transition takes
			hashTags: true,                 // Should links change the hashtag in the URL?
			pauseOnHover: false,             // If true, and autoPlay is enabled, the show will pause on hover
			width: null,					// Override the default CSS width
			height: null,					// Override the default CSS height
			expandedWidth: '390px'			// Width of the expanded slide
		});
	});
}

if($('#cn-slideshow').length) {
	$.include('sliders/circle-navigation-effect/jquery.tmpl.min.js');
	$.include('sliders/circle-navigation-effect/jquery.slideshow.js');
	jQuery(function() {
		jQuery('#cn-slideshow').slideshow();
	});
} 

if($('#example').length) {
	$.include('sliders/rama-the-jquery-slider-plugin/rama/js/freshline/jquery.freshline.FramesBanner.min.js');
	$.include('sliders/rama-the-jquery-slider-plugin/rama/js/jquery.easing.1.3.js');
	jQuery(document).ready(function() {
		$.noConflict();
		jQuery('#example').frames_slider({
			width:920,
			height:390,
			theme:"sport",
			timer:6000,
			hidetoolbar:6000
		});
	});
} 

if ($('#sample_1').length) {
	$.include('js/jquery.imjqmosaic.0.1.packed.js');
	jQuery(function() {
		$.imJQMosaic({
			image:'images/example_01.jpg',
			target: 'sample_1',
			frameWidth: '920',
			frameHeight:'390',
			numberOfTilesX: '20',
			numberOfTilesY: '9',
			tileBorder: '1',
			tileBorderColor: '#ccc',
			tileBorderRadius: '2',
			effectIntensity: '0.6',
			effectColor: '#c6e346'
		});
	});
}

// Load Google Fonts
WebFontConfig = {
        google: { families: [ 'Allerta', 'Allerta Stencil', 'Amaranth', 'Anton', 'Arimo', 'Bangers', 'Bevan', 'Bigshot One', 'Brawler', 'Cabin', 'Cabin Sketch', 'Candal', 'Cantarell', 'Coda Caption:800', 'Corben:bold', 'Crushed', 'Cuprum', 'Damion', 'Didact Gothic', 'Droid Sans', 'Droid Serif', 'Fontdiner Swanky', 'Francois One', 'Holtwood One SC', 'Josefin Sans', 'Josefin Slab', 'Judson', 'Lato', 'Limelight', 'Lobster', 'Maiden Orange', 'Mako', 'Merriweather', 'Marck Script', 'Molengo', 'Open Sans', 'Old Standard TT', 'Oswald', 'Pacifico', 'Rock Salt', 'Ruslan Display', 'Sigmar One', 'Smythe', 'Special Elite', 'Sue Ellen Francisco', 'Tangerine', 'Tenor Sans', 'Ultra', 'UnifrakturCook:bold', 'Vollkorn', 'Yanone Kaffeesatz' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();


jQuery(document).ready(function(){
    
	// Superfish Menu Plugin
	jQuery('ul.sf-menu').superfish({ 
            animation: {height:'show'},   // slide-down effect without fade-in 
            delay:     1200               		// 1.2 second delay on mouseout 
        });
	
	
	// jQuery Watermark Plugin
	jQuery("#search_input").Watermark("-Search-");
	jQuery("#fsb form.email_updates #email").Watermark("-enter your e-mail-");
	
	
	// jQuery Tipsy
	jQuery('ul.social_list li a').tipsy({
			gravity: 's', // nw | n | ne | w | e | sw | s | se
			fade: true
		}); 

	
	// Table 
	jQuery('table.feature_table thead tr th:first-child').addClass('left_round');
	jQuery('table.feature_table thead tr th:last-child').addClass('right_round');
	jQuery('table.feature_table tbody tr td:last-child').addClass('noborder');
	
	var package = jQuery('.package .price');
	var package_width = jQuery('.package .price').width();
	var package_width_half = (package_width/2)+15;
		package_margin = package.css('marginLeft', -package_width_half);
	
	var package_grey = jQuery('.package_grey .price');
	var package_grey_width = jQuery('.package_grey .price').width();
	var package_grey_width_half = (package_grey_width/2)+15;
	 	package_grey.css('marginLeft', -package_width_half);
	
	
	// Tabs
	if(jQuery('.widget_tabbed, .widget_tabbed_full, .widget_tabbed_left').length) {
	   jQuery(".widget_tabbed, .widget_tabbed_full, .widget_tabbed_left").tabs();
	}
	
	
	// Search 
	jQuery('#search_tooltip_trigger').hover(function() {
		 var tooltip = jQuery('.search_tooltip');
		   tooltip.show(500);
		   tooltip.mouseleave(function() 
		   {
		   tooltip.hide(1000);
		});
	});
	
	
	// Scroll to Top script
	jQuery('a[href=#top]').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	
	
	// Testimonials
	if(jQuery('.widget_testimonials').length) {
	jQuery('.widget_testimonials ul').cycle({
			fx: 'fade',
			timeout: 5000,
			delay: -1000
		});
	}
	
	
	// jQuery Toggle
	jQuery(".toggle_container").hide(); //Hide (Collapse) the toggle containers on load
	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	jQuery(".trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});
    
	
	// jQuery Accordion
	
	//Set default open/close settings
	jQuery('.acc_container').hide(); //Hide/close all containers
	jQuery('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container
	
	
	//On Click
	jQuery('.acc_trigger').click(function(){
		if( jQuery(this).next().is(':hidden') ) { //If immediate next container is closed...
			jQuery('.acc_trigger').removeClass('active').next().slideUp(); //Remove all "active" state and slide up the immediate next container
			jQuery(this).toggleClass('active').next().slideDown(); //Add "active" state to clicked trigger and slide down the immediate next container
		}
		return false; //Prevent the browser jump to the link anchor
	});

	
	// jQuery Tabs

	//When page loads...
	jQuery(".tab_content").hide(); //Hide all content
	jQuery("ul.tabs li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab_content:first").show(); //Show first tab content

	//On Click Event
	jQuery("ul.tabs li").click(function() {

		jQuery("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab_content").hide(); //Hide all tab content

		var activeTab = jQuery(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
		
			
	// jQuery autoAlign	

	jQuery(".alt_columns3").autoHeight(".column");
	
	jQuery("#fsb").autoColumn(45, ".widget-container");
	jQuery("#fsb").autoHeight(".widget-container");

	jQuery(".columns").autoColumn(40, ".column");
	jQuery(".columns").autoHeight(".column");
	
	jQuery(".columns2").autoColumn(40, ".column");
	jQuery(".columns2").autoHeight(".column");
	
	jQuery(".columns3").autoColumn(40,".column");
	jQuery(".columns3").autoHeight(".column");
  
	jQuery(".columns4").autoColumn(40, ".column");
	jQuery(".columns4").autoHeight(".column");
	  
	jQuery(".columns5").autoColumn(40, ".column");
	jQuery(".columns5").autoHeight(".column");
	  
	jQuery(".columns6").autoColumn(40, ".column");
	jQuery(".columns6").autoHeight(".column");
	  
	jQuery(".columns7").autoColumn(40, ".column");
	jQuery(".columns7").autoHeight(".column");
	  
	jQuery(".columns8").autoColumn(40, ".column");
	jQuery(".columns8").autoHeight(".column");
	  
	jQuery(".columns9").autoColumn(40, ".column");
	jQuery(".columns9").autoHeight(".column");
	  
	jQuery(".columns10").autoColumn(40, ".column");
	jQuery(".columns10").autoHeight(".column");
	  
	jQuery(".columns11").autoColumn(40, ".column");
	jQuery(".columns11").autoHeight(".column");
	  
	jQuery(".columns12").autoColumn(40, ".column");
	jQuery(".columns12").autoHeight(".column");
	  
	jQuery(".columns13").autoColumn(40, ".column");
	jQuery(".columns13").autoHeight(".column");
	  
	jQuery(".columns14").autoColumn(40, ".column");
	jQuery(".columns14").autoHeight(".column");
	  
	jQuery(".columns15").autoColumn(55, ".column");
	jQuery(".columns15").autoHeight(".column");
	  
	jQuery(".columns16").autoColumn(55, ".column");
	jQuery(".columns16").autoHeight(".column");	
	

	// Gallery
	jQuery(".gl_col_2 .gallery-item::nth-child(2n)").addClass("nomargin");
	jQuery(".gl_col_3 .gallery-item::nth-child(3n)").addClass("nomargin");
	jQuery(".gl_col_4 .gallery-item::nth-child(4n)").addClass("nomargin");
	
	
	// Portfolio Single Page
	jQuery('.pics_single').cycle({
				fx:     'scrollHorz', 
				timeout: 0, 
				next:   '.next',
				prev:   '.prev',
				easing: 'easeInBack'
			});
			
	
	// Portfolio hover effect
	jQuery('.gallery-image').hover(function() {
		// on hovering over find the element we want to fade *up*
		var fade = jQuery('.gallery-zoom', this);
		// if the element is currently being animated (to fadeOut)...
		if (fade.is('img')) {
			// ...stop the current animation, and fade it to 1 from current position
			fade.stop().fadeTo(500, 1);
		
		} else {
			fade.fadeIn(500);
		}
	}, function () {
		var fade = jQuery('> .gallery-zoom', this);
		 
		if (fade.is('img')) {
			fade.stop().fadeTo(500, 0);
		} else {
			fade.fadeOut(500);
		}
	});
	
	
	// Prepare loading
	jQuery('.zoomer').each(function() {
        $(this).attr('rel','prettyPhoto[gallery]').prettyPhoto();
    });

	// Spyglass icon on hover over images
	jQuery('.zoomer img, .workPanelLink img').hover(function(){
		jQuery(this).animate({"opacity": "0.5"},{queue:true,duration:200});
	}, function() {
		jQuery(this).animate({"opacity": "1"},{queue:true,duration:200});
	});
	
	
	// Adding Border
	var borderSubject = jQuery('.border_magic');
	borderSubject.wrap('<div class="add_border" />');
	
	var borderSubjectVideo = jQuery('.magic_video');
	borderSubjectVideo.wrap('<div class="add_border" />');
	
	
	// Transfering alignment to added border
	var bordered = jQuery('.add_border');
	bordered.find('.alignleft').removeClass('alignleft').parent().addClass('alignleft');
	bordered.find('.alignright').removeClass('alignright').parent().addClass('alignright');
	
	
	// Smooth image load 
	borderSubject.fadeIn(1500).parent().delay(1500).queue(function() {
		jQuery(this).css('background-image','url(images/zoom.png)');
	})
	
	borderSubjectVideo.fadeIn(1500).parent().delay(1500).queue(function() {
		jQuery(this).css('background-image','url(images/zoom_video.png)');
	})
	
	
	/* Toggler */
	jQuery('div.toggler:not(.open)').hide();
	jQuery('.toggle').click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("fast");
	});

	// jQuery data-rel to rel
	if (jQuery("a[data-rel]").length) {
		jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).data('rel'));});
	}
	
	if (jQuery("a[data-rel]").length) {
		jQuery('a[data-rel]').each(function() {jQuery(this).attr('rel', jQuery(this).attr('data-rel'));});
	}
	
	if (jQuery(".pics").length) {
		jQuery('.pics').cycle({ 	
			fx:     'scrollHorz', 
			timeout: 0, 
			next:   '.next',
			prev:   '.prev',
			easing: 'easeOutQuint'
		});
	}
	
	// Services Round
	jQuery('.services_round .round').hover(function() {
			var img = jQuery('.mainround img', this );
	    img.animate({height:'195px', width:'195px', top:'-10px', left:'0'});
	},function() {
			var img = jQuery('.mainround img', this );
		img.animate({height:'175px', width:'175px', top:'0', left:'10px'});	
	});

	
	// Clients List
	jQuery('.clients-list li::nth-child(4n+1)').css('border-left','none');
	var noborder = jQuery('ul.clients-list li').slice(0,4);
		noborder.css('border-top','none');
	
	jQuery("ul.full-post-item li").hover(function() {
		var fade = jQuery(this, this);
			jQuery(fade).addClass('active');
			jQuery(this).find('.top').css('background','url(images/post_dark_top.png) repeat-x top');
			jQuery(this).find('.bottom').css('background','url(images/post_dark_bottom.png) repeat-x bottom');
	}, function(){
		var fade = jQuery(this, this);
			jQuery(fade).removeClass('active');
			jQuery(this).find('.top').css('background','url(images/post_white_top.png) repeat-x top');
			jQuery(this).find('.bottom').css('background','url(images/post_white_bottom.png) repeat-x bottom');
	});
	
	
	// PrettyPhoto
	function pp_lightbox() {	
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'normal', /* fast/slow/normal */
			opacity: 0.70, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* true/false */
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			overlay_gallery: true, /* display or hide the thumbnails on a lightbox when it opened */
			deeplinking: false,
			social_tools: false /* html or false to disable */
		});
	
	}
	
	if(jQuery().prettyPhoto) {
		pp_lightbox(); 
	}
	
});


	var topPanelHidden=true, topPanelShowing, hasClosed;
	if(jQuery) (function($){
		
		$.fn.workPanel = function(params){
			var conf = $.extend({
				blockPanel:'#workPanel',
				blockHover:'img'
			}, params);
			return this.each(function(){
				var o=$(this),c=conf,targetPane=o.attr('href'),panel=$(c.blockPanel), h=$(c.blockHover, o);
				h.hover(
					function(){h.animate({opacity:0.6},{queue:true,duration:200})},
					function(){h.animate({opacity:1},{queue:true,duration:200})}
				);
				o.bind('click', function(){
					if(topPanelHidden != true){
						o.removeClass('selected');
						panel.stop().animate({height:'0px',opacity:0},500);
						$('.workPanelContent').fadeOut(500);
						$('body').scrollTo({top:panel.offset().top, left:0}, 1000, {easing:'easeInOutCubic'});
						hasClosed=true;
					}
					if(topPanelShowing != targetPane || topPanelHidden == true){
						topPanelShowing=targetPane;
						o.addClass('selected');
						$('div'+targetPane).animate({opacity:1}, 500, function(){	
							$('div'+targetPane).fadeIn(500);
						});
						panel.stop().animate({height:'575px',opacity:1},500);
						$('body').scrollTo({top:panel.offset().top, left:0}, 1000, {easing:'easeInOutCubic'});
						hasClosed=false;
					}
					topPanelHidden = hasClosed;
					return false;
				});
			});
		}
	})(jQuery);

	jQuery(document).ready(function($){
		/*	$('#workPanel').css({height:'0px',opacity:0});
			$('.workPanelContent').hide();*/
			$('.workPanelLink').workPanel();
			// bind radiobuttons in the form
			var $filterType = $('#filter a');
	
			// get the first collection
			var $list = $('#gallery');
	
			// clone applications to get a second collection
			var $data = $list.clone();
	
			$filterType.click(function(event) {
	
				if ($(this).attr('rel') == 'everyone') {
				  var $sortedData = $data.find('li');
				} else {
					var $sortedData = $data.find('.'+ $(this).attr('rel'));
				}
	
				$('#filter li').removeClass('current_link');
				$(this).parent('li').addClass('current_link');
				
	
				$list.quicksand($sortedData, {
				  attribute: 'id',
				  duration: 800,
				  easing: 'easeInOutQuad',
				  adjustHeight: 'auto',
				  useScaling: 'false'
				}, function(){
					$('.image-grid .workPanelLink').workPanel();
				});
	
				return false;
		  });
	 });