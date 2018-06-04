var loadPage = require('../test_pages/loadPageAndVerify')
var closePage = require('../test_pages/close')

module.exports = {
  before : function (browser) {
      page = new loadPage(browser)
      page.load(1)
  },
  'Verify Artist Elements Loaded' : function (browser) {
    var musicPage = browser.page.music_page();

    musicPage.waitForElementVisible('@artist',1000);
    musicPage.expect.element('@artist').to.be.present.and.visible
    musicPage.expect.element('@artist').text.to.equal('Chortex')
    musicPage.expect.element('@soundcloudLink').to.be.present
    musicPage.expect.element('@soundcloudLink').text.to.equal('Soundcloud')
    musicPage.expect.element('@appleMusicLink').to.be.present.and.text.to.equal('Apple Music')
    musicPage.expect.element('@spotifyLink').to.be.present.and.text.to.equal('Spotify')
    musicPage.expect.element('@spacedOutAlbum').to.be.present.and.text.to.contain('Spaced Out EP has 3 songs')
    musicPage.expect.element('@spacedOutAlbumDescentSong').to.be.present.and.text.to.equal('Descent')
  },
  after : function (browser) {
      page = new closePage(browser)
      page.close()
  }
};
