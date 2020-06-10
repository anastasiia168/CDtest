const { until } = require('selenium-webdriver');

function waitForElement(driver, locator, timeout) {
  var timeout = timeout || DEFAULT_TIMEOUT;
  return driver.wait(until.elementLocated(locator), timeout);
}
module.exports = waitForElement;
