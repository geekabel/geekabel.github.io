'use strict';

// JavaScript Document
$(document).ready(function(e) {
  
			$(".device-nav").click(function(){
				$(this).find('span').toggleClass('fa-times').toggleClass('fa-bars');
				$("nav").toggleClass("reveal");
			});
			$('nav a').smoothScroll();
			$('.text-box a').smoothScroll();


			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll > 100) {
					$("header").addClass("change");
				} else {
					$("header").removeClass("change");
				}
			});
});

		var audio = document.getElementById("myAudio"); 
		function playAudio() { 
		  audio.play(); 
		} 
		function pauseAudio() { 
		  audio.pause(); 
		} 
		$('#play').click(function(e) {
			$(this).hide();
			$('#pause').show();
		});
		$('#pause').click(function(e) {
			$(this).hide();
			$('#play').show();
		});
