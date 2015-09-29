import Ember from 'ember';

export default Ember.Component.extend({
	map: null,

  didInsertElement: function() {
    var location = document.getElementById('map');
  	var mapOptions = {
  		center: {lat: -25.363, lng: 131.044},
  		zoom: 8
  	};
   	var map = new google.maps.Map(location, mapOptions);
   	this.set('map', map);
  }
});
