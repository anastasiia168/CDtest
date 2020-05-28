var webdriver = require ('selenium-webdriver'),
    By= webdriver.By,
    until= webdriver.until,
    test= require('selenium-webdriver/chrome');
    test.describe('Google Search', function() {
    var driver;

    test.before(function()  {
        var options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should append query to title', function() {
        driver.get('http://www.google.com');
        driver.findElement(By.name('ghfgfhgfhgfq')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000);
    });

    test.after(function() {
        driver.quit();
    });
});
