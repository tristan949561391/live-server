/**
 * Created by Tristan on 17/3/14.
 */
const server = require('../index');
const redis = require('socket.io-redis');
const log4js = require('log4js');
const conf = require('../conf')

//---------配置socket.io－adapter
log4js.configure(conf.log4j);
const logger = log4js.getLogger('debug');
logger.debug(`bin/index.js --->log4js init success`)
for (let i in conf.log4j.appenders) {
    logger.debug(`bin/index.js --->log init with ${JSON.stringify(conf.log4j.appenders[i])}`)
}

//----------配置server
const adapter = redis(conf.redis);
const options = {
    path: "/socket.io",
    adapter: adapter,
    origins: '*'
}
logger.debug(`bin/index.js --->socket.io-redis init success at host:${conf.redis.host} port:${conf.redis.port}`)
server.listen(conf.server.port, options, () => {
    logger.debug(`bin/index.js --->server start success on port ${conf.server.port}`)
})

