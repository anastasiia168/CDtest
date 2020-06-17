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
    await driver.wait(until.elementLocated(By.id("box-apps-menu-wrapper"),10000));
    await driver.sleep (2000);
});


it ("Admin_menu_sections",  async () => {
    await driver.findElement(By.id("box-apps-menu-wrapper"));

    var lis = await driver.findElements(By.css('#app-'));
    console.log(lis.length);
    for (var i = 0; i < lis.length; i++) {
        var lis = await driver.findElements(By.css("li#app-"));
        var li =await lis[i];
        await li.click();
        var h1 = await driver.findElement(By.css("h1"));
        var header = await h1.getText();
        console.log(header);
        console.log(Date.now());
        var lisSub = await driver.findElements(By.css("ul.docs > li"));
        console.log(Date.now());
        console.log(lisSub.length);
            for (var j = 0; j < lisSub.length; j++)
            {
                await console.log(j);
                var lisSub = await driver.findElements(By.css("ul.docs > li"));
                var liSub = await lisSub[j];
                await liSub.click();
                var h1Sub = driver.findElement(By.css("h1"));
                var header = await h1Sub.getText();
              await driver.sleep(500);
              }
         }

    });
});
