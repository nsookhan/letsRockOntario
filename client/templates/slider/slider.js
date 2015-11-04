Meteor.subscribe("sites"); 
Template.slider.helpers({

	create_delete: function(){
		id = Router.current().params._site;
		csite = Sites.findOne({siteID: id});		
		$('.carousel').remove();
		if (csite.ImageN > 0) {
			$('<div id="carousel" class="carousel slide container" style="width: 400px; margin: 0 auto"></div>').appendTo('.carousel-holder');
			$('<div class="carousel-inner"></div>').appendTo('#carousel');
			$('<a class="left carousel-control" href="#carousel" data-slide="prev"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a>').appendTo('#carousel');
			$('<a class="right carousel-control" href="#carousel" data-slide="next"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><span class="sr-only">next</span></a>').appendTo('#carousel');
			$('<ol class="carousel-indicators"></ol>').appendTo('#carousel')
			console.log("create");
		}	
	},


 
 
//sitePictures/C1a.png

	image: function(){
			if (csite.ImageN == 1) {
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'a.png"></div>').appendTo('.carousel-inner');
				$('<li data-target="#carousel" data-slide-to="0"></li>').appendTo('.carousel-indicators');
				console.log("create1");
			} else if (csite.ImageN==2) {
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'a.png"></div>').appendTo('.carousel-inner');
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'b.png"></div>').appendTo('.carousel-inner');
				$('<li data-target="#carousel" data-slide-to="0"></li>').appendTo('.carousel-indicators');
				$('<li data-target="#carousel" data-slide-to="1"></li>').appendTo('.carousel-indicators');
				console.log("create2");
			} else if (csite.ImageN==3) {
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'a.png"></div>').appendTo('.carousel-inner');
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'b.png"></div>').appendTo('.carousel-inner');
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'c.png"></div>').appendTo('.carousel-inner');
				$('<li data-target="#carousel" data-slide-to="0"></li>').appendTo('.carousel-indicators');
				$('<li data-target="#carousel" data-slide-to="1"></li>').appendTo('.carousel-indicators');
				$('<li data-target="#carousel" data-slide-to="2"></li>').appendTo('.carousel-indicators');
				console.log("create3");
			} else if (csite.ImageN==4) {
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'a.png"></div>').appendTo('.carousel-inner');
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'b.png"></div>').appendTo('.carousel-inner');
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'c.png"></div>').appendTo('.carousel-inner');
				$('<div class="item"><img src="sitePictures/'+csite.siteID+'d.png"></div>').appendTo('.carousel-inner');
				$('<li data-target="#carousel" data-slide-to="0"></li>').appendTo('.carousel-indicators');
				$('<li data-target="#carousel" data-slide-to="1"></li>').appendTo('.carousel-indicators');
				$('<li data-target="#carousel" data-slide-to="2"></li>').appendTo('.carousel-indicators');
				$('<li data-target="#carousel" data-slide-to="3"></li>').appendTo('.carousel-indicators');
				console.log("create4");
			};
			$('.carousel-indicators > li').first().addClass('active');
	  		$('.item').first().addClass('active');
		},

});
	
/*
	create_delete: function(){
		id = Router.current().params._site;
		csite = Sites.findOne({siteID: id});
		if (! id) {
			if (csite.ImageN > 0) {
				$('<div id="carousel" class="carousel slide container" style="width: 400px; margin: 0 auto"></div>').appendTo('.carousel-holder');
				$('<div class="carousel-inner"></div>').appendTo('.carousel');
				$('<a class="left carousel-control" href="#carousel" data-slide="prev">‹</a>').appendTo('.carousel');
				$('<a class="right carousel-control" href="#carousel" data-slide="next">›</a>').appendTo('.carousel');
				console.log("create");
			}		
		} else {
			$('.carousel').remove();
			if (csite.ImageN > 0) {
				$('<div id="carousel" class="carousel slide container" style="width: 400px; margin: 0 auto"></div>').appendTo('.carousel-holder');
				$('<div class="carousel-inner"></div>').appendTo('.carousel');
				$('<a class="left carousel-control" href="#carousel" data-slide="prev">‹</a>').appendTo('.carousel');
				$('<a class="right carousel-control" href="#carousel" data-slide="next">›</a>').appendTo('.carousel');
				console.log("create");
			}	
		}
	},

	*/