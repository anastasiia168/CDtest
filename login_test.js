const BrowserFactory= require("./utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const {By, until} = require ("selenium-webdriver");




    it
    ("Login", function() {

        driver.get("http://localhost/litecart/en/");
        driver.findElement(By.name('email')).sendKeys('naska121990@mail.ru');
        driver.findElement(By.name('password')).sendKeys('1111');
        driver.findElement(By.name('login')).click();
    });

   // afterEach(function() {
    //   driver.quit();
    //   driver=null;
   // });
    /*
    driver.manage().addCookie({'name': "test", 'value':"test"});
    var testCookie = driver.manage().getCookie("test");
var cookies = driver.manage().getCookies();
driver.manage().deleteCookie("test");
driver.manage().deleteAllCookies(); */
