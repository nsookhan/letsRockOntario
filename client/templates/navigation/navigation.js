//Sites = new Mongo.Collection("sites");
Meteor.subscribe("sites");
Meteor.subscribe("definitions");

Sites = new Mongo.Collection("sites");
Definitions = new Mongo.Collection("definitions");


//Easy Search
Sites.initEasySearch(['siteID','SiteName']);


Template.navigation.helpers({

	// site_link: function(url){
	// 	Router.go('/'+url);
	// }


});

Template.navigation.events({

// routing via events
		"dblclick .list-group" :function(event,template){
		Router.go('/'+event.target.id);


		//clears the search input
		template.find('.form-control').value = "";
		var instance = EasySearch.getComponentInstance({ index: 'sites' });
		instance.clear();

	}
});





