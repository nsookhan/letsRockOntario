//Sites = new Mongo.Collection("sites");

Meteor.subscribe("sites");

var marker = {};

// light map style
var styles = [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}];

Template.map.helpers({
  main_map_options: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options

      return {
        center: new google.maps.LatLng(43.746174, -79.386412),
        zoom: 7,
        disableDefaultUI: true,
        styles: styles
      };


    }
  }

});

Template.map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.

  

  GoogleMaps.ready('main_map', function(map) {

   
    console.log('Main Map ready');



    // Adds a InfoWindow
    Sites.find().forEach(function(info){

      var id = info.siteID;

      var infowindow = new google.maps.InfoWindow({ 
          content: 
            ['<span class="InfoWindow">',
            '<h3>' + id.toUpperCase() + '</h3>',
            '<span>' + info.SiteName + '</span>',
            '</span>'].join('')
        });

      var latlng = new google.maps.LatLng(info.Lat,info.Lon);

      if(info.Categ == '1') {
        stkClr = "#3EF400";
      } else if(info.Categ == '2') {
        stkClr = "#7E3874";
      } else if(info.Categ == '3') {
        stkClr = "#F40000";
      } else if (info.Categ == '4') {
        stkClr = "#214B1F";
      } else if(info.Categ == '5') {
        stkClr = "#214B1F";
      } else if(info.Categ == '6') {
        stkClr = "#0D00F4";
      }; 

      var marker = new google.maps.Marker({
                    position: latlng,
                     icon: {
                      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                      scale: 3.2,
                      fillOpacity: 1,
                      fillColor: stkClr,
                      strokeWeight: 1,
                    },
                    map: map.instance
                    });


      // Adding Hover listener for Tooltip (InfoWindow)
      marker.addListener('mouseover',function(){
        infowindow.open(map.instance, marker);
      });

      marker.addListener('mouseout',function(){
        infowindow.close();
      });

      // Double click handler to go to the site.
      marker.addListener('dblclick',function(){
         Router.go('/'+id);
      });


    });


  });
});