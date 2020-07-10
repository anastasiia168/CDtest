const BrowserFactory= require("../utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
global.assert= require("assert");
const {By, until: {elementIsEnabled, elementIsVisible, elementLocated, stalenessOf}} = require ("selenium-webdriver");
Keys = driver.Key;
driver.get("https://litecart.stqa.ru/en/");
driver.manage().setTimeouts( { implicit: 2000 } );


describe('LiteCart',  () =>  {


it ("Add products to cart", async () => {

        await driver.findElement(By.name('add_cart_product')).click();
        var countnew =await driver.findElement(By.css('#cart > a.content > span.quantity'));
        await driver.sleep(1000);
        assert.ok(count != countnew, 'not equal items');

});

});