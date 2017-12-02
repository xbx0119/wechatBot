/**
 * bot.js只做微信消息读取、转发 
 */


const { Wechaty, Room } = require('wechaty')
const sendMsg = require('../lib/sendMsg');

const ROOM_NAME = 'test';


Wechaty.instance()

// 二维码
.on('scan', (url, code) => {
    let loginUrl = url.replace('qrcode', 'l');
    // terminal paint qrcode
    require('qrcode-terminal').generate(loginUrl)
    sendMsg(url)
})

// 登录
.on('login', user => {
    sendMsg(`${user} login`)
})

// 收到朋友消息？
.on('friend', function(contact, request) {
    if (request) {
        request.accept().then(function() {
            sendMsg(`Contact: ${contact.name()} send request ${request.hello}`)
        })
    }
})

// 收到消息
.on('message', function(m) {
    const person = m.from()
    const content = m.content()
    const room = m.room()

    // 群聊名称
    if (room) {
        var room_name = room.topic;

        if (room_name == ROOM_NAME) {
            sendMsg(`Room: ${room.topic()} Contact: ${person.name()} Content: ${content}`)
            m.say("test wechat bot")
        }

    } 
    // 非群聊消息，公众号或个人
    else {
        return;
        // sendMsg(`Contact: ${person.name()} Content: ${content}`)
    }

    // 自己的消息
    if (m.self()) {
        return;
    }

    if (/test/.test(content)) {
        m.say("test wechat robot")
    }

})

.start()

