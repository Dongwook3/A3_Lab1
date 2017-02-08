(function() {
	var carImages = document.querySelectorAll('.thumbInfo img'),
	modelName = document.querySelector('.modelName'),
	priceInfo = document.querySelector('.priceInfo'),
	modelDetails = document.querySelector('.modelDetails'),

	function makeRequest() {
		httpRequest = new XMLHttpRequest();

		if (!httpRequest) {
			console.log('');
		}

		httpRequest.onreadystatechange = showCarInfo;
		httpRequest.open('GET', 'includes/ajaxQuery.php' + "?model" + this.id);
		httpRequest.send();
	}

	function showCarInfo() {
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200)
			model = JSON.parse(httpRequest.responseText);

			modelName.firstChild.nodeValue = modelName;

			[].forEach.call(document.querySelectorAll('.hidden'), function(item){
				item.classList.remove('hidden');
			})

			modelName.firstChild.nodeValue = model.modelName;
			priceInfo.firstChild.nodeValue = model.pricing;
			modelDetails.firstChild.nodeValue = model.modelDetails;
	}

	[].forEach.call(carImages, function(el) {
		el.addEventListener('click', makeRequest, false);
	})
})();