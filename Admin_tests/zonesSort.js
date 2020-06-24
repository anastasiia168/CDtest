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
            var selects = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3) > select'));
            var zones=[];
            var zonesForSort=[];
            for(var item of selects) {
                var selectedText = await item.findElement(By.css('[selected]'));
                console.log(await selectedText.getText());
                zones.push(await selectedText.getText());
                zonesForSort.push(await selectedText.getText())  ;
            };
           console.log(zones);

            var zonesSort = zonesForSort.sort();

            for (var j = 0; j < zones.length; j++) {
                console.log( await zonesSort[j]);

                sortzone = await zonesSort[j];
                zone = await zones[j];
                assert.ok(sortzone == zone, 'not equal zones');
            }
            await driver.get("http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones");
            console.log('end');
        }

    });
});
//var zonesForSort = zonesPage.slice();
//var zonesSort = zonesForSort.sort();

//for (var j = 0; j < zonesPage.length; j++) {
  //  console.log( await zonesSort[j].getText());

 //   sortzone = await zonesSort[j].getText();
 //   zone = await zonesPage[j].getText();
 //   assert.ok(sortzone == zone, 'not equal zones');