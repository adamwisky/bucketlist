const { spawn } = require('child_process');

const startClient = spawn('serve', ['-s', 'build', '-p', '3000']);
