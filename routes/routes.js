'use strict';
const multer = require('multer');
const ioClient = require('socket.io-client');

const etlServerUrl = 'http://localhost:8000';

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
     io.of('/log').on('connection', function(socket){
        let socketClient = ioClient(etlServerUrl, {reconnect: true});
        console.log('file-uploader user connected');

        socketClient.on('get msg', function(data){  
            socket.emit('send msg',data.toString()+'\n');
        });  
    });
}