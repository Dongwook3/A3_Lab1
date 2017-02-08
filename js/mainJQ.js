(function() {
	$('.thumbInfo img').on('click', function () {
		//add JSON call here
		$.getJSON('includes/ajaxQuery.php', { model:this.id }, function(data) {
			//console.log(data);
			$('.subhead span').text(data.modelName)
			$('.modelName').text(data.modelName)
			$('.priceInfo').text(data.pricing)
			$('.modelDetails').text(data.modelDetails);
			
		});
	});

	$('#F55').on('click', function () {
		
		$('#F56').fadeTo(1, .5);
		$('#R58').fadeTo(1, .5);
		$('#F55').fadeTo(1, 1);
	});

	$('#F56').on('click', function () {
		
		$('#F56').fadeTo(1, 1);
		$('#R58').fadeTo(1, .5);
		$('#F55').fadeTo(1, .5);
	});

	$('#R58').on('click', function () {
		
		$('#F56').fadeTo(1, .5);
		$('#R58').fadeTo(1, 1);
		$('#F55').fadeTo(1, .5);
	});
})();