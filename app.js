var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Song = require('./SongSchema');

var db ='';

mongoose.connect(db, {useNewUrlParser: true});

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

var port = 5000;
app.listen(port, function(){
  console.log("GoodMusicApi is listening on port " + port);
});