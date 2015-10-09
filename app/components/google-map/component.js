import Ember from 'ember';

export default Ember.Component.extend({
  wwLocations: [
   ['Office @ The Source', 39.768641, -104.979753, 1],
   ['Za @ Cart Driver', 39.757595, -104.986112, 2],
   ['Pool @ Taxi', 39.773378926190745, -104.98331578009606, 3],
   ['Brew @ TRVE', 39.719869, -104.987622, 4],
   ['Dance @ Milk Bar', 39.732805, -104.987538, 5],
   ['Bratz @ Wurstküche', 39.749897, -104.987165, 6],
   ['I Scream @ Little Man', 39.759374, -105.011262, 7],
   ['Skate @ Denver Skate Park', 39.759567, -105.002619, 8]
  ],

  didInsertElement() {
    // Ember.run.later((function(){
      this.initMap();
    // }), 2000);
  },

  initMap(){
    var customMapType = new google.maps.StyledMapType([
     {
        stylers: [
          { hue: "#000000" },
          { saturation: -100 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100},
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          { color: '#000000' },
          {visibility: "simplified"},
        ]
      }
    ], {
      name: 'Wunder Werkz'
    });
    var customMapTypeId = 'custom_style';
    var location = document.getElementById('map');
    var mapOptions = {
      center: {lat: 39.749897, lng: -104.987165},
      zoom: 13,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      }
    };
    var map = new google.maps.Map(location, mapOptions);
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
    this.setMarkers(map);
  },

  setMarkers(map) {
    var wwLocations = this.get('wwLocations');
    var image = {
      url: '../images/mapIcon.png',
      size: new google.maps.Size(50,40),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 40)
    };

    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (var i=0; i < wwLocations.length; i++) {
      var wwLocation = wwLocations[i];
      var marker = new google.maps.Marker({
        position: {lat: wwLocation[1], lng: wwLocation[2]},
        map: map,
        icon: image,
        shape: shape,
        title: wwLocation[0],
        zIndex: wwLocation[3]
      });
    }
  }
});
