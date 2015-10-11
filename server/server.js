Sites = new Mongo.Collection("sites");
Definitions = new Mongo.Collection("definitions");

//

// Meteor.methods({
//     allDocs : function () {
//     return Sites.find().count();
//       }
//     });


//Publishes Sites collection for client to subscribe
Meteor.publish("sites", function () {
    return Sites.find({});
  });

Meteor.publish("definitions", function () {
    return Definitions.find({});
  });


// // Search Index for the main site search
// EasySearch.createSearchIndex('site_index', {
//   'collection': Sites, // instanceof Meteor.Collection
//   'field': ['siteID', 'SiteName'], // array of fields to be searchable
//   'limit': 10,
//   'use' : 'mongo-db',
//   'convertNumbers': true
// });


// // Search Index for the autosuggest field
// EasySearch.createSearchIndex('sites_autosuggest_index', {
//   'collection': Sites, 
//   'use' : 'mongo-db',
//   'field': ['siteID', 'SiteName'],
//   'convertNumbers': true
// });

