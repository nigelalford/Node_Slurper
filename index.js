// Dependencies
var fs = require('fs'),
	http = require('http'),
	mkdirp = require('mkdirp'),
	/*url = require('url'),
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,*/
	esriAMD = require('./esri_3.8_modules');

// App variables
var file_url = 'http://js.arcgis.com/3.8amd/js/esri/',
	setDir = './newFolderYo/';

/*(function clearFiles() {
	fs.rmdir(setDir, function (err) {
		if (err) throw err;
	});
})();*/

function readFile(callback) {
	if (esriAMD.length > 0) {
		var setFile = esriAMD.shift(),
			fileEnding = setFile.split('/').pop(),
			folders = setFile.substr(0, setFile.lastIndexOf('/')) + '/';

		mkdirp(setDir + folders, function (err) {
			var file = fs.createWriteStream(setDir + folders + fileEnding);
			if (err) {
				console.log('prob: ' + err);
			}

			http.get(file_url + setFile, function (res) {
				res.on('error', function (err) {
					//debugger;
					console.log(err);
				});
				res.on('data', function (data) {
					file.write(data);
				});
				res.on('end', function () {
					readFile(callback);
				});
			});

		});

	} else {
		callback();
	}
}
readFile(function () {
	console.log("reading finishes");
});