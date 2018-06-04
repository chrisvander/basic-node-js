module.exports = {
  url: 'http://localhost:8080/#tab-1',
  elements: {
    movieForm: {
      selector: '.vue-movies form'
    },
    textInput: {
      selector: '#new-movie'
    },
    submitButton: {
      selector: '#vue-movies form button'
    },
    movieTitle: {
      selector: '#vue-movies .movie .title'
    },
    movieYear: {
      selector: '#vue-movies .movie .year'
    },
    movieRemove: {
      selector: '#vue-movies .movie button'
    }
  }
};
