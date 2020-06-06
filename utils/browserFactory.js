const { Builder, Capabilities } = require("selenium-webdriver");
const cbtHub = "http://localhost:4444/wd/hub";

const BrowserFactory = {
  create: function(browser) {
    if (browser == "ie" || browser == "internet explorer") {
      let capabilities = Capabilities.ie();
      capabilities.set("ignoreProtectedModeSettings", true);
      capabilities.set("ignoreZoomSetting", true);
      capabilities.set("nativeEvents", false);
      //capabilities.set("ensureCleanSession", true);
      return new Builder()
      //  .usingServer(cbtHub)
        .withCapabilities(capabilities)
        .build();
    }
    if (browser == "Firefox" || browser == "firefox") {

      return new Builder()
          .withCapabilities({'marionette': true})
          .forBrowser('firefox')
          .build();
    }
    if (browser == "Chrome" || browser == "chrome") {

     // var options = new chrome.Options();
   //   options.addArguments(["start-maximized"]);
      return new Builder()
          .forBrowser('chrome')
    //      .setChromeOptions(options)
          .build();
  }
}};

module.exports = BrowserFactory;
