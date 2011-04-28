var http = require('http');
var fs = require('fs');
var gameServer = http.createServer(function(req, response){
  fs.readFile(__dirname+'/game.html', function(err, data){
    response.write(data);
    response.end();
  });
})
gameServer.listen(8080);

var assetServer = http.createServer(function(req, response){
  fs.readFile(__dirname+'/stylesheet.css', function(err, data){
    response.write(data);
    response.end();
  });
})
assetServer.listen(8081);

var now = require('now');
var everyone = now.initialize(gameServer);

everyone.now.imageDidFinishDragging = function(selector, top, left){
  everyone.now.moveImageTo(selector, top, left);
};
