
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

      if(! marker && site_doc.SubTitle == "Rock Walk"){

        Sites.find({SubTitle:"UTSC Rock Walk"}).forEach(function(info){
          var id = info.siteID;

          var image = {
            url:"/assets/markers/utsc2.png",
            scaledSize: new google.maps.Size(40, 64),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 64)
          };

          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.Lat,info.Lon),
            icon: image,
            map: map.instance,
            zoom: site_doc.mapzoom
            });

        var infowindow = new google.maps.InfoWindow({ 
          content: 
          ['<span class="InfoWindow">',
          '<h3>' + id.toUpperCase() + '</h3>',
          '<span>' + info.SiteName + '</span>',
          '</span>'].join('')
        });
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

}
      else if(site_doc.SubTitle == "UTSC Rock Walk"){
        Sites.find({SubTitle:"UTSC Rock Walk"}).forEach(function(info){
          var image = {
            url:"/assets/markers/utsc2.png",
            scaledSize: new google.maps.Size(40, 64),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 64)
          }; 
          var id = info.siteID;       
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(info.Lat,info.Lon),
            icon: image,
            map: map.instance,
            zoom: site_doc.mapzoom
            });

        var infowindow = new google.maps.InfoWindow({ 
          content: 
          ['<span class="InfoWindow">',
          '<h3>' + id.toUpperCase() + '</h3>',
          '<span>' + info.SiteName + '</span>',
          '</span>'].join('')
        });
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
    }
      else if(! marker){
        
      if(site_doc.Categ == '1') {
        var image = {
          url:"/assets/markers/fr.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if(site_doc.Categ == '2') {
          var image = {
          url:"/assets/markers/br.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if(site_doc.Categ == '3') {
        var image = {
          url:"/assets/markers/er.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if (site_doc.Categ == '4') {
        var image = {
          url:"/assets/markers/hr.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if(site_doc.Categ == '5') {
        var image = {
          url:"/assets/markers/dr.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      }
          marker = new google.maps.Marker({
            icon:image,
            position: new google.maps.LatLng(site_doc.Lat, site_doc.Lon),
            zoom: site_doc.mapzoom,
            map: map.instance
        });
      }

      else{

      if(site_doc.Categ == '1') {
        var image = {
          url:"/assets/markers/fr.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if(site_doc.Categ == '2') {
          var image = {
          url:"/assets/markers/br.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if(site_doc.Categ == '3') {
        var image = {
          url:"/assets/markers/er.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if (site_doc.Categ == '4') {
        var image = {
          url:"/assets/markers/hr.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };        
      } else if(site_doc.Categ == '5') {
        var image = {
          url:"/assets/markers/dr.png",
          scaledSize: new google.maps.Size(40, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 64)
          };  
        };

//dynamically set new icon image and poistion for a pre-existing marker
        marker.setIcon(image);
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





/*
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

          var infowindow = new google.maps.InfoWindow({ 
            content: 
            ['<span class="InfoWindow">',
            '<h3>' + id.toUpperCase() + '</h3>',
            '<span>' + site_doc.SiteName + '</span>',
            '</span>'].join('')
        });
*/

















