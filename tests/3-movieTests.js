var loadPage = require('../test_pages/loadPageAndVerify')
var closePage = require('../test_pages/close')

module.exports = {
  before : function (browser) {
      page = new loadPage(browser)
      page.load(2)
  },
  'Verify Movies Elements Loaded' : function (browser) {
    var moviePage = browser.page.movie_page();

    moviePage.expect.element('@movieForm').to.be.present.and.visible;
    moviePage.expect.element('@textInput').to.be.present.and.visible;
    moviePage.expect.element('@submitButton').to.be.present.and.visible;
  },
  'Add And Remove Movie' : function (browser) {
    var moviePage = browser.page.movie_page();

    moviePage.setValue('@textInput', ['infinity war', browser.Keys.ENTER])
    moviePage.waitForElementPresent("@movieTitle", 4000)
    moviePage.expect.element('@movieTitle').to.be.present.and.visible.and.text.to.equal('Avengers: Infinity War');
    moviePage.expect.element('@movieYear').to.be.present.and.visible.and.text.to.equal('2018');
    moviePage.expect.element('@movieRemove').to.be.present.and.visible;
    moviePage.click('@movieRemove');
    moviePage.waitForElementNotPresent("@movieTitle", 4000)
    moviePage.expect.element('@movieTitle').to.not.be.present;
    moviePage.expect.element('@movieYear').to.not.be.present;
    moviePage.expect.element('@movieRemove').to.not.be.present;
  },
  after : function (browser) {
      page = new closePage(browser)
      page.close()
  }
};
