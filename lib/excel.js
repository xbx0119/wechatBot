var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path')

module.exports = function(data) {
    var header = [['寝室号', '是否到齐', '说明', '说明']];

    data = header.concat(data);
    console.log(data)
    var buffer = xlsx.build([{ name: "mysheet", data: data }]); // Returns a buffer

    var name = "查寝" + (new Date()).toLocaleDateString();
    fs.writeFileSync(path.join(__dirname, "../public/", "file") + name + '.xlsx', buffer, { 'flag': 'w' });   //生成excel  
}

