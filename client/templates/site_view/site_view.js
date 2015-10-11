
// Subscribe to server published collection
Meteor.subscribe("sites");
Meteor.subscribe("definitions");



// Site View Helper
Template.site_view.helpers({
// get_url: function(){
//     var id = Router.current().params._site;
//     // gets the url :_site  
//     var site_doc = Sites.findOne({siteID: id});
//     console.log(site_doc.Lat);

//     return Session.set({lat: site_doc.Lat, lng: site_doc.Lon});

// },
site_view_map_options: function() {

    var id = Router.current().params._site;
    // // gets the url :_site
      
    var site_doc = Sites.findOne({siteID: id});
      // retrieves entire document that for the respective id

    // Makes sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options


      return {
        center: new google.maps.LatLng(site_doc.Lat, site_doc.Lon),
        zoom: site_doc.mapzoom,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 45
      };


    }
   
  }

// ,dictionary: function(desc){

//  console.log(desc);
//  return desc;



// }

});


Template.site_view.onCreated(function() {

  GoogleMaps.ready('site_view_map', function(map) {
    // Adds the site marker once ready (already centered)
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});

Template.site_view.onDestroyed(function() {
  console.log('destroyed');
});