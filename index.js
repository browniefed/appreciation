var restify = require('restify'),
    printlabel = require('./printlabel'),
    createlabel = require('./createlabel');

var server = restify.createServer({});

server.use(restify.bodyParser());

server.post('/printLabel', function create(req, res, next) {
    if ((req.params.text || '').trim()) {
        createlabel(req.params.name, req.params.text, function(labelPath) {
            printlabel(labelPath);
        });
    }

    res.header('Location', req.headers.referer + 'done.html');
    res.send(302);
});

server.get(/\/?.*/, restify.serveStatic({
  directory: './app',
  default: 'index.html'
}));

server.listen(80);