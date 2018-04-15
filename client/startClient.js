const { spawn } = require('child_process');

console.log("Attempting to start client...");

const startClient = spawn('node', ['src/index.js']);

startClient.stdout.on('data', function(data) {
    console.log(data.toString());
});
