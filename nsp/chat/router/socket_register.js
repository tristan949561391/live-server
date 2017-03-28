/**
 * Created by Tristan on 2017/3/27.
 */
const logD = require('log4js').getLogger('debug')
const socketRepository = require('../repository/socket_repository');
module.exports.register = async (userId, socket) => {
    await socketRepository.saveSocketByUserId(userId, socket.id);
    return
}