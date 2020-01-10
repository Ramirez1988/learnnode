var fs = require('fs');
var path = require('path');

module.exports = function filterFiles(folder, extension, callback) {
    fs.readdir(folder, function(err, files) {
        if(err) return callback(err);

        var filesArray = [];
        files.forEach(function(file) {
            if(path.extname(file) === "."+extension) {
                filesArray.push(file);
            }       
        });     
        return callback(null, filesArray);
    });
}

