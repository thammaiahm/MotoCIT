/*
*All the get and post request
*/
var rsd = require('../app/controllers/rsd');
var loadtest = require('../app/controllers/rsd')


module.exports = function (app) {
	
	/*
	 * Author:Thammaiah
	 */
	app.get('/rsdhome', rsd.showhomepage);
	app.post('/rsdwelcomepage', rsd.showwelcomepage);
	
	/*
	 * Author:Akshatha
	 */
	app.get('/loadtestcase',rsd.displayloadtest);
	
};