const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
//driver.manage().timeouts().implicitlyWait(10000);
const {By, until} = require ("selenium-webdriver");
const assert= require("assert");
driver.manage().setTimeouts( { implicit: 4000 } );

driver.get("http://localhost/litecart/admin/");

describe ("Zones Sort",  () => {

    it("OpenURL", async () => {
        await driver.get("http://localhost/litecart/admin/");
        await driver.wait(until.elementLocated(By.name('username'), 10000));
    });

    it("Login", async () => {

        await driver.findElement(By.name('username')).sendKeys('admin');
        await driver.findElement(By.name('password')).sendKeys('admin');
        await driver.findElement(By.name('login')).click();
        await driver.wait(until.elementLocated(By.id("box-apps-menu-wrapper"), 10000));

    });
    it("Checking zones sort", async () => {
        await driver.get("http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones");
        console.log('start');
        var countries = await driver.findElements(By.css('#content > form > table > tbody > tr> td:nth-child(3) > a'));
        console.log('countries.length=' + countries.length);
        for (var i = 0; i < countries.length; i++) {
            console.log('2');


            var css = "#content > form > table > tbody > tr:nth-child(" + (i+2) + ") >td:nth-child(3)> a";
            await driver.wait(until.elementLocated(By.css(css)),1000);
            var country = await driver.findElement(By.css(css));
            await country.click();
            console.log('3');
            zones= await driver.findElements(By.css("#table-zones > tbody > tr> td:nth-child(3) > select"));

            for (var item of  zones){
                {
                   // selectedValue = (new selectElement(item)).selectedOptions.getText();
                    countries.add(selectedValue);
                    countriesForSort.add(selectedValue);
                }

            console.log('startcopyarray');
            var countriesSort = countriesForSort.sort();
            for (var j = 0; j < zones.length; j++)
            {

                assert.ok(countriesSort == countries, 'not equal zones');
            }
            }
        }
        await driver.get("http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones");
        console.log('end');
    });
});
