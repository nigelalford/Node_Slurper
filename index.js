var fs = require('fs'),
    http = require('http'),
    /*url = require('url'),
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,*/
    mkdirp = require('mkdirp'),
    esriAMD = require('./esri_3.8_modules');

// App variables
var file_url = 'http://js.arcgis.com/3.8amd/js/esri/';
    //setDir = './esri3.8amd/'

var scrape = function (location) {
	console.log('scraping...');
    var readFile = function (callback) {
        if (esriAMD.length > 0) {
            var setFile = esriAMD.shift(),
                fileEnding = setFile.split('/').pop(),
                folders = setFile.substr(0, setFile.lastIndexOf('/')) + '/';

            mkdirp(location + folders, function (err) {
                var file = fs.createWriteStream(location + folders + fileEnding);
                if (err) {
                    console.log('prob: ' + err);
                }

                http.get(file_url + setFile, function (res) {
                    res.on('error', function (err) {
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
        console.log("scraping finished");
    };
    return readFile;
};

module.exports = scrape(location);