/*
*Thammaiah:Controller which renders the view
*/
var mongoose = require('mongoose');
var Rsd = mongoose.model('Rsds');
var utils = require('../../lib/utils');

/**
 * Route to home page
 */
exports.showhomepage = function (req, res) {
	  res.render('rsd/rsdhomepage',{
	    title:'Thammaiah'
	  });
	};
	
exports.showwelcomepage = function (req, res) {
	      var rsduser = new Rsd(req.body);
	      rsduser.save(function (err) {
	  	    if (err) {
	  	      console.log(err);	
	  	    }
	  	    });
		  res.render('rsd/rsdwelcomepage',{
		    title:rsduser.username
		  });
		};


		
		/**
		 * Akshatha
		 * New node file- used for uploading testcases
		 */	
exports.displayloadtest = function(req, res){
	res.render('rsd/loadtestcasepage',{
	  title:'Akshatha'
	});	
};


/*
	*Chethana
	*For New module Recipe Generation
*/
exports.showrecipegeneration = function (req, res) {
	  res.render('rsd/rsdRecipeGeneration',{
		  title:'chethana'
		  });
		};

