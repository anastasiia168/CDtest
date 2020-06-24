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
        await driver.wait(until.elementLocated(By.className("fa fa-external-link]")),1000);

        var links = await driver.findElements(By.className("fa fa-external-link]"));
        console.log(links.length); //link.click();

       // var link = await driver.findElement(By.css('#content > a'));

    });
    it ("new window",  async () =>   {
    let mainWindow = await driver.getWindowHandle();
    let oldWindows = await driver.getAllWindowHandles()
    await link.click() // открывает новое окно
    let newWindow = await driver.wait(thereIsWindowOtherThan(mainWindow), 10000)
    await driver.switchTo().window(oldWindows)
// ...
    await driver.close()
    await driver.switchTo().window(mainWindow)
    await driver.quit()
    });
});
//#content > form > table:nth-child(2) > tbody > tr:nth-child(2) > td > a > i
//html/body/div/div/div/table/tbody/tr/td[3]/form/table[1]/tbody/tr[2]/td/a
//*[@id="content"]/form/table[1]/tbody/tr[2]/td/a
//#content > form > table:nth-child(2) > tbody > tr:nth-child(2) > td > a