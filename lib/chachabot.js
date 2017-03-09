var util = require('util');
var path = require('path');
var fs = require('fs');
var SQLite = require('sqlite3').verbose()
var Bot = require('slackbots')

var Chachabot = function Constructor(settings) {
	this.settings = settings;
	this.setttings.name = this.settings.name || 'chachabot';
	this.user = null
	
	
}
