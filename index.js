var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send("This is the route!");

});

app.get('/views/home', function(req, res){

	res.sendFile(__dirname+'/views/index.html');
});


app.get('/views/about', function(req, res){

	res.sendFile(__dirname+'/views/about.html');
});


app.get('/views/blog', function(req, res){

	res.sendFile(__dirname+'/views/blog-directory.html');
});


app.listen(8000, function(){
	console.log("listening to the port 8000!")
});
