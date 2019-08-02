var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Song = require('./schemas/SongSchema');
if (process.env.DATABASE_CONNECTION_URL == undefined)
  require('./env.js');

var db = process.env.DATABASE_CONNECTION_URL;

mongoose.connect(db, {useNewUrlParser: true});

app.get('/', function(req, res){
  res.send("Welcome to GoodMusicApi!");
});

app.get('/songs', function(req, res){
  Song.find({})
    .exec(function(err, songs){
      if (err){
        res.send('error...');
      }else{
        console.log(songs);
        res.json(songs);
      }
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("GoodMusicApi is listening on port " + port);
});