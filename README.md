# GoodMusicApi
A REST API that serves data for good music.
Current API support includes the routes:

goodmusic.herokuapp.com
* GET
  * /songs - all songs
  * /songs/artist/{*artist*} - all songs by artist
  * /songs/genre/{*genre*} - all songs of genre
* POST
  * /songs/song/
    * title: string
    * artist: string
    * genre: string
    * url: string
    * artwork_url: string
