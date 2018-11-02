// def View Helper
Template.def_view.helpers({

  //Test of equality helper for if handlebars
  equals: function(a,b) {
    if (a == b) {
      return (true);
    } else {
      return (false);
    }
  }
});