var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
/*
 * 
*/
var rsdUser = new Schema({
	username:String,
	pass:String
	});

mongoose.model('Rsds',rsdUser);