/**
 * Created by Tristan on 2017/3/27.
 */

let redisConn = require('../conn/redis').redisConn;
let getSocketByUserId = async (userId) => {
    return new Promise((resove, reject) => {
    })
}


let saveSocketByUserId = async (userId, socketId) => {
    return new Promise((resove, reject) => {
        let message = {
            socketId: socketId,
            joinTime: new Date()
        }
        redisConn.set('user_sockets:' + userId, JSON.stringify(message), (err) => {
            if (err) {
                reject(err);
                return;
            }
            resove()
        })
    })
}

module.exports.saveSocketByUserId = saveSocketByUserId;


