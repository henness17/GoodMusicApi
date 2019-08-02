var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Song = require('./schemas/SongSchema');
if (process.env.DATABASE_CONNECTION_URL == undefined)
  require('./env.js');

var db = process.env.DATABASE_CONNECTION_URL;

mongoose.connect(db, {useNewUrlParser: true});

mongoose.connection.on('error', function(err){  
  console.log("There was an error connectiong to the database: " + err);
}); 

app.get('/', function(req, res){
  res.send("Welcome to GoodMusicApi!");
});

app.get('/songs', function(req, res){
  Song.find({})
    .exec(function(err, songs){
      if (err){
        res.send('An error occured finding songs.');
      }else{
        console.log("Songs found.");
        res.json(songs);
      }
    });
});

app.get('/songs/genre/:genre', function(req, res){
  Song.find({
    genre: req.params.genre
  })
    .exec(function(err, songs){
      if (err){
        res.send('An error occured finding songs.');
      }else{
        console.log("Songs found.");
        res.json(songs);
      }
    });
});

app.get('/songs/artist/:artist', function(req, res){
  Song.find({
    artist: req.params.artist
  })
    .exec(function(err, songs){
      if (err){
        res.send('An error occured finding songs.');
      }else{
        console.log("Songs found.");
        res.json(songs);
      }
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("GoodMusicApi is listening on port " + port);
});