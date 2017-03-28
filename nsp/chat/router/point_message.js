/**
 * Created by Tristan on 2017/3/27.
 */
const logD = require('log4js').getLogger('debug')
const socketRepository = require('../repository/socket_repository');

module.exports.sendPoint = async (socket, to, message) => {
    await socketRepository.saveSocketByUserId("asdasd", socket.id);
    return
}