var express = require('express'), 
bodyParser = require('body-parser'),
fs = require('fs'), app= express(), 
sitePath = process.argv[2] || "."; 
var port = 8000;

var pg = require('pg');
var http = require('http').Server(express);
var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  fs.readFile('./view/index.html', function(err,data){
	res.end(data);
	});	
})

//using fs
app.get('/snake', function (req, res) {
  fs.readFile('./Snake/index.html', function(err,data){
	res.end(data);
	});	
})

//using sendfile
app.get('/snake2', function (req, res) {
  res.sendFile(__dirname + '/Snake/index.html');	
})

/*
curl -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://localhost:8080/post
{"MyKey":"My Value"}
*/
app.post('/post', function(req,res){
	console.log(req.body);
	res.send(req.body);
})

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

app.use(express.static(__dirname + '/' + sitePath));

app.listen(process.env.PORT || port);

// app.listen(port, function() { 
//     console.log("Server running at: http://localhost:" + port)
// });

