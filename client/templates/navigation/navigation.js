Sites = new Mongo.Collection("sites");
Definitions = new Mongo.Collection("definitions");

Meteor.subscribe("sites");
Meteor.subscribe("definitions");


//Easy Search
Sites.initEasySearch(['SiteName', 'SiteID']);


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





