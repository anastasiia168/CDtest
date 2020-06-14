const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
//driver.manage().timeouts().implicitlyWait(10000);
const {By, until} = require ("selenium-webdriver");
const assert= require("assert");

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
        await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
        console.log('start');
        var countries = await driver.findElements(By.css('#content > form > table > tbody > tr > td:nth-child(5) > a'));
        for (var i = 0; i < countries.length; i++) {
            var css = "#content > form > table > tbody > tr:nth-child(" + (i+2) + ") > td:nth-child(5) > a";
            await driver.wait(until.elementLocated(By.css(css),1000));
            var country = await driver.findElement(By.css(css));
            await country.click();
            await driver.wait(until.elementLocated(By.id("table-zones"),1000));
            var zonePage = await driver.findElements(By.css('#table-zones > tbody > tr> td:nth-child(3)'));
            if (zonePage.length > 2) {
                var zonesPage = await driver.findElements(By.css('#table-zones > tbody > tr> td:nth-child(3)'));
                console.log(zonesPage.length);
                console.log('startcopyarray');
                var zonesForSort = zonesPage.slice();
                var zonesSort = zonesForSort.sort();
                for (var j = 0; j < zonesPage.length; j++) {
                    console.log( await zonesSort[j].getText());
                    sortzone = await zonesSort[j].getText();
                    zone = await zonesPage[j].getText();
                    assert.ok(sortzone == zone, 'not equal zones');
                }
            }
            await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
        }
        console.log('end');
    });
});

