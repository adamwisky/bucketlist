const { spawn } = require('child_process');

process.chdir('./server');
const startServer = spawn('nodemon', ['server.js']);

process.chdir('../client');
const startClient = spawn('serve', ['-s', 'build', '-p', '3000']);
