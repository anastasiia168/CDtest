const BrowserFactory= require("../utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
global.assert= require("assert");
const {By, until} = require ("selenium-webdriver");
    Keys = driver.Key,
    driver.get("http://localhost/litecart/admin/");
driver.manage().setTimeouts( { implicit: 5000 } );

    it ("Open main page", async () => {
        await  driver.get("https://litecart.stqa.ru/ru/");
        await driver.wait(until.elementLocated(By.css('#box-most-popular > div > ul > li:nth-child(1)'),2000));
    });
it ("Add first product to cart", async () => {
    console.log('stranica');
     await  driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(1)')).click();
    console.log('pervyi product');
    await driver.wait(until.elementLocated(By.name('add_cart_product'),2000));
    await  driver.findElement(By.name('add_cart_product')).click();
    console.log('add1');
});
it ("Number of products in the cart updated", async () => {

});
it ("Repeat two times", async () => {
    await  driver.findElement(By.css('#site-menu > ul > li.general-0 > a')).click();
    console.log('HomePage');
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.css('#box-most-popular > div > ul > li:nth-child(1)'),2000));

    await driver.sleep(1000);
    await  driver.findElement(By.name('add_cart_product')).click();
    console.log('add2');
    await driver.sleep(1000);
    console.log('HomePage');
    await  driver.findElement(By.css('#site-menu > ul > li.general-0 > a')).click();

    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.css('#box-most-popular > div > ul > li:nth-child(1)'),2000));

    await driver.sleep(1000);
    await  driver.findElement(By.name('add_cart_product')).click();
    console.log('add3');


});

it (" Open the cart Checkout", async () => {
   // await driver.findElement(By.css('#cart > a.link')).click();
  //  await driver.wait(until.elementLocated(By.name( 'remove_cart_item'),2000));
});
it (" Delete all products", async () => {
//6) удалить все товары из корзины один за другим, после каждого удаления подождать, пока внизу обновится таблица
});












