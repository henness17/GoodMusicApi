module.exports = (function() {
    'use strict';
    var songsRoutes = require('express').Router();
    var Song = require('../schemas/SongSchema');

    songsRoutes.get('/', function(req, res){
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

    songsRoutes.get('/genre/:genre', function(req, res){
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

    songsRoutes.get('/artist/:artist', function(req, res){
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

    songsRoutes.post('/song', function(req, res){
      var newSong = new Song();

      newSong.title = req.body.title;
      newSong.artist = req.body.artist;
      newSong.genre = req.body.genre;
      newSong.url = req.body.url;
      newSong.artwork_url = req.body.artwork_url;

      newSong.save(function(err, song){
        if (err){
          res.send('Error saving song: ' + err);
        } else {
          console.log(song);
          res.send(song);
        }
      });
    });

    return songsRoutes;
})();