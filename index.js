var http = require('http'), url = require('url'), fs=require('fs');

var message = ['testing'];
var clients =[];

http.createServer(function (req, res) {
	var url_parts = url.parse(req.url);
	console.log(url_parts);
	if(url_parts.pathname=='/'){
		fs.readFile('./view/index.html', function(err,data){
			res.end(data);
		});		
	}else{
		if(url_parts.pathname.substr(0,5)=='/poll'){
			res.end("poll");
		}
	}

}).listen(8080, 'localhost');
console.log('Server is running.');

