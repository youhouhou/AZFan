var express = require('express');
var path = require("path");
var app = express();
var port = process.env.PORT || 3300;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/public')));
app.use("/static", express.static(path.join(__dirname, '/public/stylesheets')));
app.use("/static", express.static(path.join(__dirname, '/public/javascripts')));
app.use("/static", express.static(path.join(__dirname, '/public/images')));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(port, function(){
	console.log('App listening on port ' + port);
});