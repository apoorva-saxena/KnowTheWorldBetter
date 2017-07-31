const request = require('request')

function log(obj) {
    console.log(require('util').inspect(obj, false, null));
}

const world_data = {
	getWorldData : async function () {
		return new Promise (function (resolve, reject) {
			request('https://restcountries.eu/rest/v2/all', function(error, response, body) {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }
            })
		})
	}
}

module.exports = world_data;