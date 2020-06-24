const BrowserFactory= require("../utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
global.assert= require("assert");
const {By, until: {elementIsEnabled, elementIsVisible, elementLocated, stalenessOf}} = require ("selenium-webdriver");
Keys = driver.Key,
driver.get("https://litecart.stqa.ru/en/");
driver.manage().setTimeouts( { implicit: 2000 } );



it ("Add products to cart", async () => {

    for (var i = 0; i <3; i++) {
        await driver.get("https://litecart.stqa.ru/en/");
        await driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(1)')).click();

        var bigDucks = await driver.findElements(By.name('options[Size]'));
        if (bigDucks.length == 1){
            await driver.findElement(By.name('options[Size]')).click();
            await driver.findElement(By.css('#box-product > div.content > div.information > div.buy_now > form > table > tbody > tr:nth-child(1) > td > select > option:nth-child(3)')).click();
        }
        await driver.wait(elementLocated(By.css('#cart > a.content > span.quantity')), 2000);
        var count = await driver.findElement(By.css('#cart > a.content > span.quantity'));
        await driver.findElement(By.name('add_cart_product')).click();
        var countnew = driver.findElement(By.css('#cart > a.content > span.quantity'));
        await driver.sleep(1000);
        assert.ok(count != countnew, 'not equal items');
    }
});

it (" Open the cart Checkout", async () => {
   await driver.findElement(By.css('#cart > a.link')).click();
   await driver.wait(elementLocated(By.name( 'remove_cart_item')),2000);
});
it (" Delete all products", async () => {
    var products = await driver.findElements(By.css(".dataTable.rounded-corners tr > td.item"));
    var pictures= await driver.findElements(By.css('#box-checkout-cart > ul > li'));
    await console.log("picture = " + pictures.length);
                if (pictures.length > 0) {
                    await driver.sleep(500);
                    await driver.findElement(By.css('#box-checkout-cart > ul > li:nth-child(1) > a')).click();
                 }
                for (var item of products){
                   var removeButtons = await driver.findElements(By.name('remove_cart_item'));
                     await console.log("deleted buttons = " + removeButtons.length);
                      if (removeButtons.length >= 0) {
                          await driver.wait(function () {
                              return elementIsVisible(removeButtons[0]);
                          }, 3000)
                              .then(async function () {
                                  await removeButtons[0].click();
                                  await driver.sleep(100);
                                  await driver.wait(stalenessOf(item), 6000);
                              });

                      }
    }
   await driver.wait(elementLocated(By.css('#checkout-cart-wrapper > p:nth-child(2) > a')), 2000);
   await driver.findElement(By.css('#checkout-cart-wrapper > p:nth-child(2) > a')).click();
});
