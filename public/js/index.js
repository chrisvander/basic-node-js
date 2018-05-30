// ----------------- //
// ---- NAV BAR ---- //
// ----------------- //

function toggleTab(id) {
  toggleElements(id, document.getElementsByClassName("tab"), "active");
  toggleElements(id, document.getElementsByClassName("nav-button"), "selected");
}

function toggleElements(id,tabs,className) {
  for (var i = 0; i < tabs.length; i++) {
    if (id == i) {
      tabs[i].classList.add(className);
      if (className === "selected") {
        window.location.hash = 'tab-' + i;
      }
    }
    else if (tabs[i].classList.contains(className)) {
      tabs[i].classList.remove(className);
    }
  }
}

window.onload = function() {
  if (window.location.hash !== "") {
    toggleTab(parseInt(window.location.hash[5]));
  }
}

// ----------------- //
// ----- MUSIC ----- //
// ----------------- //

var app = new Vue({
  el: '#vue-music',
  data: { results: [] },
  mounted() { getMusicJSON() }
});

function getMusicJSON() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "/data/music", true);
  xhr.send();

  xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        app.results = JSON.parse(xhr.responseText);
    }
  }, false);
}

// ----------------- //
// ----- MOVIES ---- //
// ----------------- //

Vue.component('movie-item', {
  template: '\
    <div class="movie">\
      <span class="title">{{ title }}</span>\
      <span class="year">{{ year }}</span>\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </div>\
  ',
  props: ['title','year','runtime','rating','director']
})

var app2 = new Vue({
  el: '#vue-movies',
  data: {
    newMovieText: '',
    movies: [],
    nextMovieId: 2
  },
  methods: {
    addNewMovie: function () {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', "http://www.omdbapi.com/?apikey=539d6961&t=" + this.newMovieText, true);
      xhr.send();

      xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var ret = JSON.parse(xhr.responseText);
            console.log(ret);
            app2.movies.push({
              id: app2.nextMovieId++,
              title: ret.Title,
              year: ret.Year,
              rating: ret.Rated,
              runtime: ret.Runtime,
              director: ret.Director
            })
        }
      }, false);
      app2.newMovieText = ''
    }
  }
});
