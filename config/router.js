/*
*All the get and post request
*/
var rsd = require('../app/controllers/rsd');


module.exports = function (app) {
	
	app.get('/rsdhome', rsd.showhomepage);
	app.post('/rsdwelcomepage', rsd.showwelcomepage);
	
};