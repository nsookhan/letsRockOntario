
// Subscribe to server published collection
Meteor.subscribe("sites");
Meteor.subscribe("definitions");


Template.site_view.onCreated(function() {

  var self = this;


  GoogleMaps.ready('site_view_map', function(map) {
    // Adds the site marker once ready (already centered)

    var marker;


    self.autorun(function(){


       var id = Router.current().params._site;
    // // gets the url :_site
      
       var site_doc = Sites.findOne({siteID: id});

      if(! site_doc){
        console.log('something went wrong with mongo D:');
      }

      if(! marker){
          
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(site_doc.Lat, site_doc.Lon),
            zoom: site_doc.mapzoom,
            map: map.instance


        });

      }
      else{


        marker.setPosition(new google.maps.LatLng(site_doc.Lat, site_doc.Lon));

      }

      map.instance.setCenter(marker.getPosition());


    });


  });



});


// Site View Helper
Template.site_view.helpers({


site_view_map_options: function() {

    var id = Router.current().params._site;
    // // gets the url :_site
      
    var site_doc = Sites.findOne({siteID: id});
      // retrieves entire document that for the respective id

    // Makes sure the maps API has loaded
    if (GoogleMaps.loaded() && id && site_doc) {
      // Map initialization options


      return {
        center: new google.maps.LatLng(site_doc.Lat, site_doc.Lon),
        zoom: site_doc.mapzoom,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 45
      };


    }
   
  }

});
