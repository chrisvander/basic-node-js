module.exports = function (browser) {
    this.load = function() {
      browser
      .url('http://localhost:8080')
      .resizeWindow(1920, 1080)
      .waitForElementVisible('body', 1000)
    }
}
