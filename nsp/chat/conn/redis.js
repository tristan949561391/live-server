/**
 * Created by Tristan on 2017/3/27.
 */
let redis = require('redis')
let config = require('../../../conf/index')
let redisConn = redis.createClient(config.redis.port, config.redis.host, {})
redisConn.on('error', function () {
    console.error('redis connnected error')
})
redisConn.on('connect', function () {
        console.log('redis connected success')
    }
)

module.exports.redisConn = redisConn;