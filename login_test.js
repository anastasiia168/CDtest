var webdriver = require('selenium-webdriver'),
By=webdriver.By,
    until = webdriver.until;

const assert = require ('assert');
        driver = new webdriver.Builder()
            .forBrowser('chrome').build();
//chrome_driver = new webdriver.Builder().forBrowser('chrome').build();
//ie_driver = new webdriver.Builder().forBrowser('ie').build();
//firefox_driver = new webdriver.Builder().forBrowser('firefox').build();


    it('Login', function() {

        driver.get("https://sagenda.net/");
        driver.wait(until.titleIs('Login'), 10000);
        driver.findElement(By.name('email')).sendKeys('naska121990@mail.ru');
        driver.findElement(By.name('password')).sendKeys('1111');
        driver.findElement(By.name('login')).click();
        //driver.wait(until.titleIs('Account'), 10000);
    });

    afterEach(function() {
       driver.quit();
       driver=null;
    });

