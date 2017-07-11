var express = require('express'), fs=require('fs'), app= express(), sitePath = process.argv[2] || "."; var port = 8080;

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

app.use(express.static(__dirname + '/' + sitePath));
app.listen(port, function() { 
    console.log("Server running at: http://localhost:" + port)
});