Template.def_list.rendered = function() {
  Session.set("Category","all");
  console.log("Category all");
};


Template.def_list.helpers({
  definitions: function(){
  	if (Session.get("Category")=="all") {
  		return Definitions.find();
  	} else if (Session.get("Category")=="rm") {
  		return Definitions.find({Categ:"rm"});
  	} else if (Session.get("Category")=="d") {
  		return Definitions.find({Categ:"d"});
  	} else {
  		return Definitions.find();
  	}
  },
  category: function () {
    return Session.get("Category");
  }
});


Template.def_list.events({

	"click .category .all": function () {
		Session.set("Category","all");
	}, 
	"click .category .rm": function () {
		Session.set("Category","rm");
	}, 
	"click .category .d": function () {
		Session.set("Category","d");
	},
	"click .reset": function () {
		Session.set("Category","all");
	}

});