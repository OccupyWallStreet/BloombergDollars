	$('input').blur(function() {
	var price = $('#price').val()	
	var quantity = $('#qty').val()	
	var total = price * quantity;
		if (!isNaN(total)) {
		$('#total').attr('value', total)
		} else {
		alert('Ops Error! Please only numbers')
		}
});