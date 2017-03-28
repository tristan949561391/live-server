/**
 * Created by Tristan on 2017/3/27.
 */
const logI = require('log4js').getLogger('info')

module.exports.disconnect = async (socket) => {
    logI.info(`触发断开 --> ${socket.id} disconnect`)
}