var fs = require('fs'),
    path = require('path');

function createLabel(name, data, cb) {

    fs.readFile('labelxml.xml', function(err, labelBuffer) {
        var labelString = labelBuffer.toString();
        var str = (data || '');
        var strArray = str.split("\n"),
            finalArray = [];

        finalArray = strArray.map(function(splitStr) {
            return (splitStr || '').replace(/(.{65})/g, "$1\n");
        });

        finalArray.unshift(name);
        
        labelString = labelString.replace('{STRINGCONTENT}', finalArray.join("\n"));
        var date = new Date();
        var file = path.join('labels', date.getTime() + '.label');

        fs.writeFile(file, labelString, function() {
            cb(file);
        });
    })

}

module.exports = createLabel;