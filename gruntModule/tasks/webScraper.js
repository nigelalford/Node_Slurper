/*
 * webScraper
 * https://github.com/Atlmapper/Node_Slurper
 *
 * Copyright (c) 2014 Atlmapper
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks	
		
	var description = 'Web Scraper designed to pull ESRI libraries into a specified project folder.';

	grunt.registerTask('webScraper', description, function () {
		var fs = require('fs'),
			http = require('http'),
			mkdirp = require('mkdirp'),
			esriAMD = require('../esri_3.8_modules');

		// App variables
		var file_url = 'http://js.arcgis.com/3.8amd/js/esri/',
			hardSet = './hardCoded';

		function readFile(callback){
			if (esriAMD.length > 0) {			
				var setFile = esriAMD.shift(),
					fileEnding = setFile.split('/').pop(),
					folders = setFile.substr(0, setFile.lastIndexOf('/')) + '/';
					console.log('this should: ' + hardSet + folders + fileEnding);
				mkdirp(hardSet + folders, function (err) {
					var file = fs.createWriteStream(hardSet + folders + fileEnding);
				console.log('its not getting here');
					if (err) {
						console.log('prob: ' + err);
					}
					console.log('1');

					http.get(file_url + setFile, function (res) {
						console.log('1.5');
						res.on('error', function (err) {
							console.log(err);
						});
						res.on('data', function (data) {
							console.log('2');
							file.write(data);
						});
						res.on('end', function () {
							console.log('3');
							readFile(callback);
						});
					});

				});

			} else {
				callback();
				console.log("scraping is completed");
			}
		}

		readFile(function () {
			console.log("reading finishes");
		});

	});
};