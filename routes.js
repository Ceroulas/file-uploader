'use strict';
const multer = require('multer');
const ioClient = require('socket.io-client');

const etlServerUrl = 'http://localhost:8000';
let socketClient; 

let fileName;

module.exports = function(app, io) {

	app.post('/upload', function(req, res){
        res.redirect(307, etlServerUrl + req.path);
	});

    app.get('/report', function(req, res){
        res.redirect(307, etlServerUrl + req.path);
    });

    socketIO(io);    
}

function socketIO (io){
    socketClient = ioClient.connect(etlServerUrl, {reconnect: true});
    console.log('conectei no socket server to server: file-uploader');

    socketClient.on('get msg', function(data){
        
        console.log('data: '+ data);
        
        io.on('connection', function(socket){
                console.log('User connected file-uploader: ');
                socket.emit('send msg',data.toString()+'\n');
        });  
    });
}