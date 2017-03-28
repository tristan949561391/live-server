const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const log4js = require('log4js');
const logger = log4js.getLogger('cheese');

if (cluster.isMaster) {
    logger.debug("bin/cluster.js-->master start...");

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('listening', function (worker, address) {
        logger.debug(`bin/cluster.js-->listening: worker ${worker.process.pid}  Address: ${address.address}:${address.port}`);
    });

    cluster.on('exit', function (worker, code, signal) {
        logger.debug(`bin/cluster.js-->worker ${worker.process.pid}  died`);
    });
} else {
    require('./index')
}