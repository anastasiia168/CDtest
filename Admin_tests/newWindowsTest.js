const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
//driver.manage().timeouts().implicitlyWait(10000);
const {By, until} = require ("selenium-webdriver");
const assert= require("assert");
driver.manage().setTimeouts( { implicit: 1000 } );

driver.get("http://localhost/litecart/admin/");

describe ("Admin menu sections",  () =>  {

    it ("OpenURL",async () =>  {
        await driver.get("http://localhost/litecart/admin/");
        await driver.wait(until.elementLocated(By.name('username'),10000));
    });
    it ("Login", async () =>  {

        await  driver.findElement(By.name('username')).sendKeys('admin');
        await driver.findElement(By.name('password')).sendKeys('admin');
        await driver.findElement(By.name('login')).click();
        await driver.wait(until.elementLocated(By.id("box-apps-menu-wrapper")),1000);

    });
    it ("Add new country",  async () =>   {
        await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");
        var addcountry = await driver.findElement(By.css('#content > div > a'));
        await  addcountry.click();
        await driver.getAllWindowHandles("http://localhost/litecart/admin/?app=countries&doc=edit_country");

        links=await driver.findElements(By.css('#content > form > table> tbody > tr > td > a > i'));
        let mainWindow = await driver.getWindowHandle();
        let oldWindows = await driver.getAllWindowHandles();
        for (var item of links) {
            await item.click() // открывает новое окно
            let oldWindows1 = await driver.getAllWindowHandles();
            var secondWindow = await oldWindows1 [1];
            await driver.switchTo().window(secondWindow);
            await driver.wait(until.elementLocated(By.css('h1'), 10000));
            await driver.close();
            await driver.switchTo().window(mainWindow);
        }
        await driver.quit()
    });
});