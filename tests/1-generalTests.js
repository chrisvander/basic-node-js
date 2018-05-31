var loadPage = require('../test_pages/loadPageAndVerify')
var closePage = require('../test_pages/close')

module.exports = {
  'Open And Verify Loaded' : function (browser) {
      page = new loadPage(browser)
      page.load()
  },
  'Click Through Navigation Bar' : function (browser) {
    var navBar = browser.page.nav();

    navBar.expect.element('@tab2').to.be.visible;
    navBar.expect.element('@tab2Container').to.not.be.visible;
    navBar.click('@tab2').waitForElementVisible('@tab2Container', 1000);
    navBar.expect.element('@tab1Container').to.have.css('display').which.equals('none');
    navBar.expect.element('@tab2Container').to.have.css('display').which.does.not.equal('none');
  },

  'Do All Tests' : function (browser) {
    browser
      .assert.containsText("#vue-music .music-data .artist", "Chortex")
      .assert.containsText("#vue-music .music-data .urls :first-child a", "Soundcloud")
      .click("#nav-tab3")
      .waitForElementVisible('#tab3', 1000)
      .assert.cssClassPresent('#tab3', 'active')
      .setValue('#new-movie', ['infinity war', browser.Keys.ENTER])
      .waitForElementPresent("#vue-movies :nth-child(2) .movie", 4000)
      .assert.elementPresent("#vue-movies :nth-child(2) .movie")
      .assert.containsText("#vue-movies :nth-child(2) .movie .title", "Avengers: Infinity War")
      .assert.containsText("#vue-movies :nth-child(2) .movie .year", "2018")
      .click("#vue-movies :nth-child(2) .movie  button")
      .assert.elementNotPresent("#vue-movies :nth-child(2) .movie")
      .click("#nav-tab4")
      .waitForElementVisible('#tab4', 1000)
      .assert.cssClassPresent('#tab4', 'active')
      .end();
  },

  'Close Out' : function (browser) {
      page = new closePage(browser)
      page.close()
  },
};
