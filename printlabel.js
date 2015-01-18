var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

var defaultArgs = [
    '/printer "DYMO LabelWriter Twin Turbo" /tray 0 /copies 1 '
]
//PrintLabel.exe 
function printLabel(file) {
    var args = Array.prototype.slice.call(defaultArgs);
        args[0] += '"' + file + '"';
        console.log(args[0]);

    var ls = exec("printlabel " + args[0]);
}

module.exports = printLabel;