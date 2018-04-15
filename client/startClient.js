const { spawn } = require('child_process');

console.log("Attempting to start client...");

const startClient = spawn('serve', ['-s', 'build', '-p', '3000']);

startClient.stdout.on('data', function(data) {
    console.log(data.toString());
});
