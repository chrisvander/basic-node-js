module.exports = function (browser) {
    this.load = function(tab) {
      if (tab != undefined || tab != '') url = 'http://localhost:8080/#tab-' + tab;
      else url = 'http://localhost:8080';
      browser
      .url(url)
      .resizeWindow(1920, 1080)
      .waitForElementVisible('body', 1000)
    }
}
