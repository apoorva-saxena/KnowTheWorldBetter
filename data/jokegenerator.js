' use strict '
var path = require('path');
var request = require('request');
var Q = require('q');
var lodash = require('lodash');
var ProgressBar = require('progress');
var sqlite3 = require('sqlite3').verbose();

var outputFile = process.argv[2] || path.resolve(__dirname, 'chachabot.db');
var db = new sqlite.Database(outputFile);


request()
