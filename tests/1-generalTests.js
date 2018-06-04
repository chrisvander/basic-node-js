var loadPage = require('../test_pages/loadPageAndVerify')
var closePage = require('../test_pages/close')

module.exports = {
  before : function (browser) {
      page = new loadPage(browser)
      page.load(0)
  },
  'Click Through Navigation Bar' : function (browser) {
    var navBar = browser.page.nav();

    navBar.expect.element('@tab2').to.be.present.and.visible;
    navBar.expect.element('@tab2Container').to.be.present.and.not.visible;
    navBar.click('@tab2').waitForElementVisible('@tab2Container', 1000);
    navBar.expect.element('@tab1Container').to.have.css('display').which.equals('none');
    navBar.expect.element('@tab2Container').to.have.css('display').which.does.not.equal('none');
    navBar.expect.element('@tab3').to.be.present.and.visible;
    navBar.expect.element('@tab3Container').to.be.present.and.not.visible;
    navBar.click('@tab3').waitForElementVisible('@tab3Container', 1000);
    navBar.expect.element('@tab2Container').to.have.css('display').which.equals('none');
    navBar.expect.element('@tab3Container').to.have.css('display').which.does.not.equal('none');
    navBar.expect.element('@tab4').to.be.present.and.visible;
    navBar.expect.element('@tab4Container').to.be.present.and.not.visible;
    navBar.click('@tab4').waitForElementVisible('@tab4Container', 1000);
    navBar.expect.element('@tab3Container').to.have.css('display').which.equals('none');
    navBar.expect.element('@tab4Container').to.have.css('display').which.does.not.equal('none');
  },
  'Verify Footer' : function (browser) {
    var footer = browser.page.footer();

    footer.expect.element('@footerContainer').to.be.present.and.visible;
    footer.expect.element('@githubIcon').to.be.present.and.visible;
    footer.expect.element('@githubIcon').to.have.css('fill').which.equals('rgb(236, 240, 241)');
    footer.moveToElement('@githubIcon',5,5);
    browser.pause(300); // must complete .2s animation, extra .1s just in case
    footer.expect.element('@githubIcon').to.have.css('fill').which.equals('rgb(52, 73, 94)')
  },
  after : function (browser) {
      page = new closePage(browser)
      page.close()
  }
};
