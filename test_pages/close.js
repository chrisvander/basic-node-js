module.exports = function (browser) {
    this.close = function() {
        browser.end();
    }
}
