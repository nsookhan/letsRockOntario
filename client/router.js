// Router Setup

Router.configure({
  layoutTemplate: 'layout'
  // sets the main template as Layout with the nav bar
});

// Home Page router (with Main map) load about page until subscriptions loaded
Router.route('/', function () {
  this.subscribe('sites', this.params._id).wait();

  if (this.ready()) {
    this.render('home');
  } else {
    this.render('loading');
  }
});




// image
Router.map(function(){
	this.route('/public'), {
		path: '/public/:path(*)',
		action: function() {
			var path = this.params.path;
			this.response.sendfile(path);
		}
	}
});


// About page router
Router.route('/about', function(){
	this.render('about')
	});



// site list page router
Router.route('/site_list', function(){
	this.render('site_list',{
		data: function(){
			return Sites.find();
		}
	});
});


// definition list page router
Router.route('/definitions_list', function(){
	this.render('def_list',{
		data: function(){
			return Definitions.find();
		}
	});
});


// Dynamic Router for each site/definition.
Router.route('/:_current',function(){

	var current = this.params._current; 
	console.log(current);

	this.render('site_view',{
		data: function(){
		return Sites.findOne({ siteID: current });	
		}
	});
});

//
Router.route('/def/:_current',function(){

	var current = this.params._current; 
	console.log(current);

	this.render('def_view',{
		data: function(){
		current = current.replace(" ","_");
		current = current.toLowerCase();
		return Definitions.findOne({ Tag: current });
		}
	});
});

//TODO: figure out how to load google maps only for only Main view and site_view
Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
});

