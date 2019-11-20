/*
* @Author: scottxiong
* @Date:   2019-11-20 13:55:47
* @Last Modified by:   scottxiong
* @Last Modified time: 2019-11-20 14:48:42
*/
var exec = require('./db/index').exec
var con = require('./db/index').con
var fs=require('fs')

fs.readFile('data.json','utf8',function (err, data) {
	if(err) {
		console.log(err);
		return
	}
	var res=JSON.parse(data);//读取的值

	//遍历数组
	res.answers.forEach((item,index)=>{
		var question = item.question;
		var answers = item.answers.join("\n");
		var sql = `INSERT INTO examine(question,answers) VALUES("${question}","${answers}")`
		exec(sql).then(data=>{
			console.log(data)
		}).catch(err=>{
			console.log(err)
		})
	})
	con.end()
});
