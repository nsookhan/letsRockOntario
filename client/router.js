// Router Setup

Router.configure({
  layoutTemplate: 'layout'
  // sets the main template as Layout with the nav bar
});

// Home Page router (with Main map)
Router.route('/', function(){
	name:'home',
  this.render('home');
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
	this.render('about');
});


// About page router
Router.route('/site_list', function(){
	this.render('site_list',{
		data: function(){
			return Sites.find();
		}
	});
});


// Dynamic Router for each site.
Router.route('/:_site',function(){

	
	this.render('site_view',{
		data: function(){
		var currentSite = this.params._site;
		console.log(currentSite)
		return Sites.findOne({ siteID: currentSite });	
		}
		
	});
}

);


// Dynamic Router for each definition
Router.route('/def/:_definition',function(){

	this.render('def_view',{
		data: function(){
		var currentDefinition = this.params._definition;
		console.log(currentDefinition)
		return Definitions.findOne({ Name: currentDefinition });
	} 
});
});

//TODO: figure out how to load google maps only for only Main view and site_view
Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
});