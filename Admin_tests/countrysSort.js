const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const {By, until} = require ("selenium-webdriver");
const assert= require("assert");


describe ("Countries and Zones sort ",  () =>  {

    it ("OpenURL",async () =>  {
       await driver.get("http://localhost/litecart/admin/");
       await driver.wait(until.elementLocated(By.name('username'),10000));
   });

    it ("Login", async () =>  {

     await  driver.findElement(By.name('username')).sendKeys('admin');
     await driver.findElement(By.name('password')).sendKeys('admin');
     await driver.findElement(By.name('login')).click();
     await driver.wait(until.elementLocated(By.id("box-apps-menu-wrapper"),10000));
    });
   // #table-zones > tbody > tr:nth-child(3) > td:nth-child(3) > select > option:nth-child(3)
    it ("Sort Check",  async () =>   {
         await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
         var countries = await driver.findElements(By.css('#content > form > table > tbody > tr > td:nth-child(5) > a'));
         console.log(countries.length);
         var countriesForSort=countries.slice();
         var countriesSort=countriesForSort.sort();
         for(var j = 0; j<countries.length; j++)
         {
             sortcountry = await countriesSort[j].getText();
             country = await countries[j].getText();
             assert.ok( sortcountry == country, 'not equal zones');
         }

});

    it ("Zones",  async () =>   {
        await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
        var countZones = await driver.findElements(By.css('#content > form > table > tbody > tr:nth-child(2) > td:nth-child(4)'));
        for(var i = 0; i<countZones.length; i++)
        {
            countZones = await driver.findElements(By.css('#content > form > table > tbody > tr > td:nth-child(6)'));

            Zone = await countZones[i].getAttribute("textContent");
            if (Zone != "0") {

                var css = "#content > form > table > tbody > (" + (i+2) + ") > td:nth-child(3) > a";
                console.log(css);
                var countryWithZones = await driver.findElement(By.css(css));
                await countryWithZones.click();

                var zonesPage = await driver.findElements(By.css('#table-zones > tbody > tr> td:nth-child(3)'));
                console.log('startcopyarray');
                var zonesForSort = zonesPage.slice();
                var zonesSort = zonesForSort.sort();

                for (var j = 0; j < zonesPage.length; j++) {
                    console.log( await zonesSort[j].getText());

                    sortzone = await zonesSort[j].getText();
                    zone = await zonesPage[j].getText();
                    assert.ok(sortzone == zone, 'not equal zones');
                }

                await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
            }
        }
    });
});