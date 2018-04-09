const { spawn } = require('child_process');
const ls = spawn('serve', ['-s', 'build', '-p', '3000']);
