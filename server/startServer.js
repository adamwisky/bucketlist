const { spawn } = require('child_process');

console.log("Attempting to start server...");

PORT=3000
const startServer = spawn('node', ['server.js']);

startServer.stdout.on('data', function(data) {
    console.log(data.toString());
});
