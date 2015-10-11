Meteor.subscribe("sites");

Template.site_list.rendered = function() {
  Session.set("Category","all");
  console.log("Category all");
  Session.set("topSites","all");
  console.log("topsites all");
};

Template.site_list.helpers({

  sites: function(){

    if (Session.get("Category")=="all" && Session.get("topSites")=="all" ) {
      console.log("Category all");
      console.log("topsites all");
      return Sites.find();
        
    } else if (Session.get("Category")=="all" && Session.get("topSites")=="yes" ) {
      return Sites.find({top: {$ne: "n"}});

    } else if (Session.get("Category")=="all" && Session.get("topSites")=="no" ) {
      return Sites.find({top: {$ne: "y"} });

    } else if (Session.get("Category")=="E" && Session.get("topSites")=="all" ) {
      return Sites.find({Categ:1});

    } else if (Session.get("Category")=="E" && Session.get("topSites")=="yes" ) {
      return Sites.find({Categ:1, top: {$ne: "n"} });

    } else if (Session.get("Category")=="E" && Session.get("topSites")=="no" ) {
      return Sites.find({Categ:1, top: {$ne: "y"} });

    } else if (Session.get("Category")=="F" && Session.get("topSites")=="all" ) {
      return Sites.find({Categ:2 });

    } else if (Session.get("Category")=="F" && Session.get("topSites")=="yes" ) {
      return Sites.find({Categ:2, top: {$ne: "n"} });

    } else if (Session.get("Category")=="F" && Session.get("topSites")=="no" ) {
      return Sites.find({Categ:2, top: {$ne: "y"} });

    } else if (Session.get("Category")=="H" && Session.get("topSites")=="all" ) {
      return Sites.find({Categ:3});

    } else if (Session.get("Category")=="H" && Session.get("topSites")=="yes" ) {
      return Sites.find({Categ:3, top: {$ne: "n"} });

    } else if (Session.get("Category")=="H" && Session.get("topSites")=="no" ) {
      return Sites.find({Categ:3, top: {$ne: "y"} });

    } else if (Session.get("Category")=="N" && Session.get("topSites")=="all" ) {
      return Sites.find({Categ:4});

    } else if (Session.get("Category")=="N" && Session.get("topSites")=="yes" ) {
      return Sites.find({Categ:4, top: {$ne: "n"} });

    } else if (Session.get("Category")=="N" && Session.get("topSites")=="no" ) {
      return Sites.find({Categ:4, top: {$ne: "y"} });

    } else if (Session.get("Category")=="R" && Session.get("topSites")=="all" ) {
      return Sites.find({Categ:5});

    } else if (Session.get("Category")=="R" && Session.get("topSites")=="yes" ) {
      return Sites.find({Categ:5, top: {$ne: "n"} });

    } else if (Session.get("Category")=="R" && Session.get("topSites")=="no" ) {
      return Sites.find({Categ:5, top: {$ne: "y"} });
    } else {
      return Sites.find()
    }
  },

  category: function () {
    return Session.get("Category");
  },
  topSites: function () {
    return Session.get("topSites");
  }
});


 Template.site_list.events({
    "click .category .E": function () {
      Session.set("Category","E");
    },
    "click .category .F": function () {
      Session.set("Category","F");
    },
    "click .category .H": function () {
      Session.set("Category","H");
    },
    "click .category .N": function () {
      Session.set("Category","N");
    },
    "click .category .R": function () {
      Session.set("Category","R");
    },

    "click .topsites .yes": function () {
      Session.set("topSites","yes");
      console.log("only top sites")
    },

    "click .topsites .no": function () {
      Session.set("topSites","no");
    },

    "click .reset": function () {
      console.log('reset clicked');  
    }

 });

