import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement(){
		console.log('did insert element');
		var container = $('.content .liquid-child');
		var initialContent = container.html();

		$('.one').html(initialContent);
		container.html('');
		if ($('#map')){
	    var location = document.getElementById('map');
	  	var mapOptions = {
	  		center: {lat: -25.363, lng: 131.044},
	  		zoom: 8
	  	};
   		var map = new google.maps.Map(location, mapOptions);
		}
	}

});
