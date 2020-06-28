const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
//driver.manage().timeouts().implicitlyWait(10000);
const {By, until} = require ("selenium-webdriver");
const emailRegistrationTest= "avstest15@mail.ru";
const passwordRegistrationTest= "1111";
Keys = driver.Key,
driver.manage().setTimeouts( { implicit: 3000 } );
driver.get("http://localhost/litecart/admin/");

describe ("Add New Product",  () =>  {

       it ("OpenURL",async () =>  {
           await driver.get("http://localhost/litecart/admin/");
           await driver.wait(until.elementLocated(By.name('username')),5000);
       });

       it ("Login", async () =>  {

           await  driver.findElement(By.name('username')).sendKeys('admin');
           await driver.findElement(By.name('password')).sendKeys('admin');
           await driver.findElement(By.name('login')).click();
           await driver.wait(until.elementLocated(By.id("box-apps-menu-wrapper")),1000);

       });
       it ("Go to catalog", async () => {
           await driver.get("http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1");
           await driver.sleep (1000);

       });
          it ("Go to Products", async () => {
           console.log('start');
           var products = await driver.findElements(By.css('#content > form > table > tbody > tr> td:nth-child(3) > a'));
           console.log('products.length=' + products.length);
           for (var i = 0; i < products.length; i++) {
               var css =   " #content > form > table > tbody > tr:nth-child(" + (i+4) + ")> td:nth-child(3) > a";
               await driver.wait(until.elementLocated(By.css(css)),1000);
               var product = await driver.findElement(By.css(css));
               await product.click();
               await driver.wait(until.elementLocated(By.css( "#content > h1")),1000);
               await  driver.manage().logs().get("browser").then(async function(logsEntries) {
                   console.log(logsEntries.length);
                   logsEntries.forEach(async function(l) {
                       console.log("1"+l);
                   });
                   console.log('log');
               });
               await driver.get("http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1");
           };
       });

});

