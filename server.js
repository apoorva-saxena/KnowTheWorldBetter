'use strict'
const express = require('express')
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const world_data = require('./scripts/world_data_service.js')


server.use(bodyParser.urlencoded())
server.use(bodyParser.json());

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

server.use(express.static(__dirname + '/app'));

//api for getting the world data
server.get('/api/world_data', function(req, res) {
	async function getWorldData () {
		const world = await world_data.getWorldData()
		res.send(world);
	}
	getWorldData()
})

//listen to server
server.listen(8080);
console.log("Server listening to port 8080")

exports = module.exports = server