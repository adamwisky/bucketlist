const { spawn } = require('child_process');

console.log("Attempting to start server...");

// override the PORT to 3000 for nginx config
process.env['PORT']=5000
const startServer = spawn('node', ['server.js']);

startServer.stdout.on('data', function(data) {
    console.log(data.toString());
});
