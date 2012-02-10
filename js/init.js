jQuery(function( $ ){
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */

	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	$.localScroll.defaults.axis = 'x';

	// Scroll initially if there's a hash (#something) in the url 
	$.localScroll.hash({
		target: '#content', // Could be a selector or a jQuery object too.
		queue:true,
		duration:1500
	});

	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		target: '#content', // could be a selector or a jQuery object too.
		queue:true,
		duration:1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});
});


$(document).ready(function(){
	var numberWithCommas = function(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }
  var calculateBtoD = function(){
		var dollars = $('#usd_amt').val().replace(/,/g,"").replace("$","");
		var bloombucks = 1/197916;
		var total = ((Math.round((dollars * bloombucks)*100))/100).toFixed(2);
			if (!isNaN(total)) {
			  $('#amount').html(numberWithCommas(total));
			} else {
			}
    }
		$('#usd_amt').keyup(  function(){
    		var dollars = $('#usd_amt').val().replace(/,/g,"").replace("$","");
    		var bloombucks = 1/197916;
    		var total = ((Math.round((dollars * bloombucks)*100))/100).toFixed(2);
    			if (!isNaN(total)) {
    			  $('#amount').html(numberWithCommas(total));
    			} else {
    	    }
    	});	
    	

})
