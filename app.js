var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
if (process.env.DATABASE_CONNECTION_URL == undefined)
  require('./env.js');
var Song = require('./schemas/SongSchema');

var db = process.env.DATABASE_CONNECTION_URL;
mongoose.connect(db, {useNewUrlParser: true});

mongoose.connection.on('error', function(err){  
  console.log("There was an error connectiong to the database: " + err);
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
  res.send("Welcome to GoodMusicApi!");
});

var songsRoutes = require('./routes/songsRoutes.js');
app.use('/songs', songsRoutes);

var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("GoodMusicApi is listening on port " + port);
});