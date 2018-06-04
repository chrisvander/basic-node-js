module.exports = {
  url: 'http://localhost:8080/#tab-1',
  elements: {
    artist: {
      selector: '#vue-music .music-data .artist'
    },
    soundcloudLink: {
      selector: '#vue-music .music-data .urls :first-child a'
    },
    appleMusicLink: {
      selector: '#vue-music .music-data .urls :nth-child(2) a'
    },
    spotifyLink: {
      selector: '#vue-music .music-data .urls :nth-child(3) a'
    },
    spacedOutAlbum: {
      selector: '#vue-music .music-data .albums :first-child'
    },
    spacedOutAlbumDescentSong: {
      selector: '#vue-music .music-data .albums :first-child :first-child'
    }
  }
};
