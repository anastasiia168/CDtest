


var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options();
options.addArguments(["start-maximized"]);

driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

    it('Login', function() {

        driver.get("https://sagenda.net/");
        driver.findElement(By.name('email')).sendKeys('naska121990@mail.ru');
        driver.findElement(By.name('password')).sendKeys('1111');
        driver.findElement(By.name('login')).click();
        //driver.wait(until.titleIs('Account'), 10000);
    });

    afterEach(function() {
       driver.quit();
       driver=null;
    });

