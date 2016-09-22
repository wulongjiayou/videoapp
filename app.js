'use strict'

const express = require('express');
let app = express();

app.use(express.static(__dirname));

app.listen(6004,()=>{
	
	console.log('webapp服务器已经启动 6004');
});
