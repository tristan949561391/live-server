/**
 * Created by Tristan on 17/3/15.
 */
const logI = require('log4js').getLogger('info')
const socketRegister = require('./router/socket_register');
const dissconnect = require('./router/disconnect');
module.exports = (chat) => {
    chat.on('connection', async (socket) => {

        socket.on('message', (message) => {
            logI.info(`namespace/chat/index.js --> ${socket.id} send [${message}] message`)
        })

        socket.on('')

        /**
         *接受到给某个人的消息
         */
        socket.on('point_message', (who, message) => {
        })

        /**
         *接受到给某些人的消息
         */
        socket.on('points_message', (who, message) => {

        })

        /**
         * 断开的时候触发
         */
        socket.on('disconnect', async () => {
            await dissconnect.disconnect(socket);
        })

    })
}