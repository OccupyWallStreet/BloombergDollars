$(document).ready(function() {
	var shadows = $(document).find('.shadow');
	shadows.each( function( i, element ){
		nycga.ui.addDropShadow( element );
	});
	nycga.ui.addHoverMenus();
});