'use strict';
const multer = require('multer');
const http = require('http');
const io = require('socket.io-client');

const etlServerUrl = 'http://localhost:8000';
const socket = io.connect(etlServerUrl, {reconnect: true});

let fileName;

module.exports = function(app) {

	app.post('/upload', function(req, res){
        console.log(req.headers)
        res.redirect(307, etlServerUrl + req.path);
	});

	app.get('/log', function( req, res ){
        console.log('Entrei log')
        socket.on('get msg', function(data){
            console.log(data);
        });
    });

	app.get('/report', function(req, res){
        res.redirect(307, etlServerUrl + req.path);
    });

}