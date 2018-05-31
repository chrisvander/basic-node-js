const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const iedriver = require("iedriver");
const edgedriver = require("edgedriver");

module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "page_objects_path" : "page_objects",

  "selenium": {
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    "port": 4444, // standard selenium port
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path,
      "webdriver.ie.driver" : iedriver.path32,
      "webdriver.edge.driver" : edgedriver.path
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}
