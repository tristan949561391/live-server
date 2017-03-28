/**
 * Created by Tristan on 17/3/14.
 */
const server = require('http').createServer();
const io = require('socket.io')(server);
const logI = require('log4js').getLogger('info');
const initChat = require('./nsp/chat')
const initShare = require('./nsp/share')

io.use(function (socket, next) {
    logI.info(`index.js --> ${socket.id} connect to the server before`)
    next();
});
let chat = io.of('/chat');
initChat(chat);
let share = io.of('/share');
initShare(share);
module.exports = server