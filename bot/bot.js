/**
 * bot.js只做微信消息读取、转发 
 */

const { Wechaty, Room } = require('wechaty')
const Msg = require('../lib/Msg.js');

const ROOM_NAME = 'test';
const DEV = true;


Wechaty.instance()

// 二维码
.on('scan', (url, code) => {
    let loginUrl = url.replace('qrcode', 'l');
    //require('qrcode-terminal').generate(loginUrl)
    Msg.post({
        mode: 'scan',
        data: {
            url: url
        }
    })
});

// 登录
.on('login', user => {
    Msg.post({
        mode: 'login',
        data: {
            user: user
        }
    })
})

// 收到消息
.on('message', message => {
    // 自己的消息
    if (message.self()) {
        return;
    }

    Msg.post({
        mode: 'message',
        data: {
            message: message
        }
    })

})

.start()

