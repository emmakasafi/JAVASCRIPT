const os = require('os');
var totalmemory=os.totalmem();
var freeMemory=os.freemem();
console.log(`TOTAL MEMORY:',${totalmemory}`);
console.log(`Free memory: ${freeMemory}`);