
var result = require('./mymodule');

result(process.argv[2], process.argv[3], function(err, data) {
    if(err)
        return console.error(err);
    data.forEach(function(file) {
        console.log(file);      
    }); 
});