/**
 * bot.js只做微信消息读取、转发 
 */

const { Wechaty, Room } = require('wechaty')
const excel = require('../lib/excel')

const ROOM_NAME = '信息2014寝室长群';
const DEV = true;

var Bot = function () {
    // this.robot_id = 0;
    // this.robot_master = master;
    this.data = [];
    this.setup();
    
}

// 总数
// Bot.prototype.sum = 0;

// 启动机器人
Bot.prototype.setup = function () {
    // this.robot_id = this.sum + 1;
    // this.sum = this.robot_id;
    var self = this;

    Wechaty.instance()

    // 二维码
    .on('scan', (url, code) => {
        self.dispatch({
            mode: 'scan',
            data: {
                url: url
            }
        })
    })

    // 登录
    .on('login', user => {
        self.dispatch({
            mode: 'login',
            data: {
                user: user
            }
        })
    })

    // 收到消息
    .on('message', message => {
        // 自己的消息
        
        self.dispatch({
            mode: 'message',
            data: {
                message: message
            }
        })
        
        if (message.self()) {
            return;
        }

    })

    .start();

    // 检测关闭
    // var liveTime = setInterval(function() {

    // }, 1000 * 60)
}

// 关闭机器人
Bot.prototype.kill = function() {

}

// 调度
Bot.prototype.dispatch = function (msg) {
    console.log(msg)

    switch (msg.mode) {
        case 'scan':
            this.dealWith_scan(msg.data.url);
            break;
        case 'login':
            this.dealWith_login(msg.data.user);
            break;
        case 'message':
            this.dealWith_message(msg.data.message);
            break;
        default:
            console.log("default")
    }
}

Bot.prototype.dealWith_scan = function (url) {
    let loginUrl = url.replace('qrcode', 'l');
    require('qrcode-terminal').generate(loginUrl)
}

Bot.prototype.dealWith_login = function (user) {
    console.log(`${user} login`)
}

Bot.prototype.dealWith_message = function (message) {
    const person = message.from()
    const content = message.content()
    const room = message.room()

    console.log("message")
    // 群聊名称
    if (room) {
        var room_name = room.topic();
        console.log(room.roomAliasMap)
        // console.log(person)

        if (room_name != ROOM_NAME) {

            // console.log(person.name + ": " + content)
            if (/^robot:\/\//g.test(content)) {
                var info = content.slice(8).split("/");
                this.data.push(info);
                message.say("robot get your answer: " + content)
            }
        }
        // 超过11点
        var now = new Date();
        var eleven = new Date(now.toLocaleString() + ' 23:00:00')
        if(DEV || now > eleven){
            excel(this.data);
        }

    } else {
        // 非群聊消息，公众号或个人
        return;
    }
}


Bot.prototype.sendInfo = function() {
    return Msg;
}


module.exports = Bot;
