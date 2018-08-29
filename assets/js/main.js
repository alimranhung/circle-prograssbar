(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



         $("#circle-progress").circleProgress({
		    value: 0.9,
		    size: 200,
		    fill:'red',
		    thickness:'2',
		    emptyFill:'yellow',
		  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
  });
         $("#graphic-progress").circleProgress({
		    value: 0.6,
		    size: 200,
		    fill:'red',
		    thickness:'2',
		    emptyFill:'yellow',
		  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(60 * progress) + '<i>%</i>');
  });
         $("#digital-progress").circleProgress({
		    value: 0.7,
		    size: 150,
		    fill:'red',
		    thickness:'3',
		    emptyFill:'yellow',
		  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar-percentage').html(Math.round(70 * progress) + '<i>%</i>');
  });



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	