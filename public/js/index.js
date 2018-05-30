function toggleTab(id) {
  toggleElements(id, document.getElementsByClassName("tab"), "active");
  toggleElements(id, document.getElementsByClassName("nav-button"), "selected");
}

function toggleElements(id,tabs,className) {
  for (var i = 0; i < tabs.length; i++) {
    if (id == i) tabs[i].classList.add(className);
    else if (tabs[i].classList.contains(className)) {
      tabs[i].classList.remove(className);
    }
  }
}

// vue app takes in JSON data and makes it accessible in the DOM
var app = new Vue({
  el: '#music-data',
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
