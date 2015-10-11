
// Subscribe to server published collection
Meteor.subscribe("definitions");
Meteor.subscribe("sites");
     
// Site View Helper
Template.def_view.helpers({

 defInfo: function(){
    id = Router.current().params._definition;
    // gets the url :_site  
    def_doc = Definitions.findOne({Name: id});
   // $('<h2>'+def_doc.Name+'</h2>').appendTo('.infoContainer');
   // $('<p>'+def_doc.Desc+'</p>').appendTo('.infoContainer');
    console.log(id);
    return def_doc
},
});





//    var currentDefinition = this.params._definition;
//    return Definitions.findOne({ dbID: currentDefinition });

//    var currentDefinition = this.params._definition;
//    return Definitions.findOne({ dbID: currentDefinition });
//  } 



/*
defintion_view_map_options: function() {

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

});

*/


/*
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
*/