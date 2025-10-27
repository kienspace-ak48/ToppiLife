const http = require('http');
const https = require('https');
require('dotenv').config();
const app = require('./app');
const HOST = '0.0.0.0';

// server
// HTTP server 8080
const httpServer = http.createServer(app);
httpServer.listen(process.env.HTTP_PORT, HOST, ()=>{
    console.log(`HTTP Server is running on: http://localhost:${process.env.HTTP_PORT}`)
});
// HTTPS server 8443
const httpsServer = https.createServer(app);
httpsServer.listen(process.env.HTTPS_PORT, HOST, ()=>{
    console.log(`HTTPS server is running on: https://localhost:${process.env.HTTPS_PORT} `)
});