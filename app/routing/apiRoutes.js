// Pull in required dependencies
var path = require('path');

// Import the array
var lang = require('../data/languages.js');

// Export API routes
module.exports = function(app) {
	console.log('___ENTER apiRoutes.js___');

	// Total list of languages
	app.get('/api/lang', function(req, res) {
		res.json(lang);
	});

	// Add new entry
	app.post('/api/lang', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		console.log('userResponses = ' + userResponses);

		// Compute best language match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing languages in the list
		for (var i = 0; i < lang.length; i++) {
			console.log('lang = ' + JSON.stringify(lang[i]));

			// Compute differences for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(lang[i].scores[j] - userResponses[j]);
			}
			console.log('diff = ' + diff);

			// If lowest difference, record the language match
			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
				console.log('Lang name = ' + lang[i].name);
				console.log('Lang image = ' + lang[i].photo);

				totalDifference = diff;
				matchName = lang[i].name;
				matchImage = lang[i].photo;
			}
		}

		// Add new user
		lang.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
