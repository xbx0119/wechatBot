
var Msg = {};


/* 
 * post数据格式
 * {
 *   mode: String,
 *   data: Object
 * }
*/
Msg.post = function(msg) {
	console.log(msg)

	switch(msg.mode) {
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

Msg.dealWith_scan = function(url) {

}

Msg.dealWith_login = function (user) {

}

Msg.dealWith_message = function(message) {
	const person = message.from()
	const content = message.content()
	const room = message.room()
	// 群聊名称
	if (room) {
		var room_name = room.topic;
		console.log(room)
		console.log(person)

		if (DEV || room_name == ROOM_NAME) {
			Msg.post({
				mode: 'room',
				data: {
					message: message
                    room: room, //room.topic(),
					person: person, //person.name(),
					content: content
				}
			})

			// if (/sbsb/.test(content)) {
			//     m.say("test wechat robot")
			// }
		}

	} else {
		// 非群聊消息，公众号或个人
		return;
	}
}

module.exports = Msg;