var express = require('express');
var path = require('path');
var expressApp = express();

var httpObject = require('http').Server(expressApp);
var io = require('socket.io')(httpObject);

//expressApp.use(express.static(path.join(__dirname, 'public')));

expressApp.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

expressApp.get('/js/util.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/util.js')); 
});
expressApp.get('/js/gl-matrix.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/gl-matrix.js')); 
});
expressApp.get('/js/app.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/app.js')); 
});
expressApp.get('/js/socket.io.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/socket.io.js')); 
});
expressApp.get('/shaders/shader.vs.glsl',function(req,res){
    res.sendFile(path.join(__dirname + '/shaders/shader.vs.glsl')); 
});
expressApp.get('/shaders/shader.fs.glsl',function(req,res){
    res.sendFile(path.join(__dirname + '/shaders/shader.fs.glsl')); 
});

io.on('connection', function(socket) {
   	socket.on('plantChange', function(data) {
   		console.log('plantChange');
     	socket.broadcast.emit("plantChange", data);
   	});
});

httpObject.listen(3000, function(){
  console.log('listening on *:3000');
});