var express = require('express'), bodyParser =require('body-parser'),fs=require('fs'), app= express(), sitePath = process.argv[2] || "."; var port = 8000;

app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  fs.readFile('./view/index.html', function(err,data){
	res.end(data);
	});	
})

app.get('/snake', function (req, res) {
  fs.readFile('./Snake/index.html', function(err,data){
	res.end(data);
	});	
})

/*
curl -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://localhost:8080/post
{"MyKey":"My Value"}
*/
app.post('/post', function(req,res){
	console.log(req.body);
	res.send(req.body);
})

app.use(express.static(__dirname + '/' + sitePath));
app.listen(port, function() { 
    console.log("Server running at: http://localhost:" + port)
});

