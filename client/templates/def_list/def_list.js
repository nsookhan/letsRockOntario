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
  },
    //Test of equality helper for if handlebars
  equals: function(a,b) {
    if (a == b) {
      return (true);
    } else {
      return (false);
    }
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




Template.def_list.events({
  //modal
  "click .def": function () {
  if (typeof mdef == 'undefined') {
    // if modal def does not exist, create
    $('<div class="modal fade" id="modal" role="dialog"></div>').appendTo('.container-fluid');
    $('<div class="modal-dialog"></div>').appendTo('#modal');
    $('<div class="modal-content"></div>').appendTo('.modal-dialog');
    $('<div class="modal-header"></div>').appendTo('.modal-content');
    $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').appendTo('.modal-header');
    $('<h4></h4>').appendTo('.modal-header');
    $('<div class="modal-body"></div>').appendTo('.modal-content');
    $('<p></p>').appendTo('.modal-body');
    // add clicked site description to modal
    mdef =  event.target.innerHTML.capitalizeFirstLetter();
      mdef = Definitions.findOne({Name:mdef});
      $('<p>'+mdef.modalDesc+'</p>').appendTo('.modal-body');
      if(mdef.Occ != ""){
        $('<h3>See Sites:</h3>').appendTo('.modal-body');
        $('<p>'+mdef.Occ+'</p>').appendTo('.modal-body');
      };
      $('<h4>'+mdef.Name+'</h4>').appendTo('.modal-header');
      if (mdef.ImageN == 1) {
        $('<div class="imgHolder"><img src="/rockPictures/'+ mdef.defID + 'a.png"></div>').appendTo('.modal-body');
      };
      return (mdef);  
  } else {
    //if modal def exists, destroy + create
    $('#modal').remove();
    $('.modal').remove();
    $('.fade').remove();
    $('<div class="modal fade" id="modal" role="dialog"></div>').appendTo('.container-fluid');
    $('<div class="modal-dialog"></div>').appendTo('#modal');
    $('<div class="modal-content"></div>').appendTo('.modal-dialog');
    $('<div class="modal-header"></div>').appendTo('.modal-content');
    $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>').appendTo('.modal-header');
    $('<h4></h4>').appendTo('.modal-header');
    $('<div class="modal-body"></div>').appendTo('.modal-content');
    $('<p></p>').appendTo('.modal-body');
    // add clicked site description to modal
    mdef =  event.target.innerHTML.capitalizeFirstLetter();
    mdef = Definitions.findOne({Name:mdef});
    $('<p>'+mdef.modalDesc+'</p>').appendTo('.modal-body');
    $('<h4>'+mdef.Name+'</h4>').appendTo('.modal-header');
    if(mdef.Occ != ""){
        $('<h3>See Sites:</h3>').appendTo('.modal-body');
        $('<p>'+mdef.Occ+'</p>').appendTo('.modal-body');
      };   
    if (mdef.ImageN == 1) {
        $('<div class="imgHolder"><img src="/rockPictures/'+ mdef.defID + 'a.png"></div>').appendTo('.modal-body');
      };
    return (mdef);  
    }
  },
  "click .test":function() {
    console.log("clicked")
  }

});