var Tool = {};

// 输入：id位数
Tool.getRandomId = function(num) {
    console.log(Math.floor(Math.random() * Math.pow(10, num)));
    return Math.floor(Math.random() * Math.pow(10, num));
}

module.exports = Tool;