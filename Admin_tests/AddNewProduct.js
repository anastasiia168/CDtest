const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
//driver.manage().timeouts().implicitlyWait(10000);
const {By, until} = require ("selenium-webdriver");
const emailRegistrationTest= "avstest15@mail.ru";
const passwordRegistrationTest= "1111";
Keys = driver.Key,
//driver.manage().timeouts().implicitlyWait(10000);- из примера в СДО  -  TypeError: driver.manage(...).timeouts is not a function
driver.get("http://localhost/litecart/admin/");

describe ("Add New Product",  () =>  {

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
    it ("Go to catalog", async () => {
        await driver.wait(until.elementLocated(By.css('#app-'), 10000));
        await driver.findElement(By.xpath('/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li[2]/a/span[1]')).click();
        await driver.wait(until.elementLocated(By.css('#app- > a > span.name'),1000));
        await driver.findElement(By.xpath("//h1[contains(text(), ' Catalog')]"));
        await  driver.findElement(By.xpath('//*[@id="content"]/div[1]/a[2]')).click();
        await driver.sleep (1000);

    });
    
    it ("General", async () => {
       await  driver.findElement(By.css('#tab-general > table > tbody > tr:nth-child(1) > td > label:nth-child(3) ')).click();//посмотреть селект бокс
        await  driver.findElement(By.name('name[en]')).sendKeys('Duck');
        await driver.findElement(By.name('code')).sendKeys('012345');
        await driver.findElement(By.xpath('//*[@id="tab-general"]/table/tbody/tr[4]/td/div/table/tbody/tr[2]/td[1]/input')).click();
        await driver.findElement(By.xpath('//*[@id="tab-general"]/table/tbody/tr[7]/td/div/table/tbody/tr[4]/td[1]/input')).click();
        await driver.findElement(By.name('quantity')).sendKeys('3');
        await driver.findElement(By.name('sold_out_status_id'))
        await driver.findElement(By.name( 'new_images[]')).sendKeys(__dirname + '\\Duck.jpg');
        await driver.findElement(By.name('date_valid_from')).sendKeys('12-06-2020');
        await driver.findElement(By.name('date_valid_to')).sendKeys('20-12-2021');

    });
    it ("Information", async () => {
        await driver.findElement(By.linkText("Information")).click();
        await  driver.findElement(By.name('manufacturer_id')).click();//посмотреть селект бокс
        await driver.sleep (2000);
        await driver.findElement(By.name('keywords')).sendKeys('Utka');
        await driver.findElement(By.name('short_description[en]')).sendKeys('Utka testovaya');
        await driver.findElement(By.name('description[en]')).click();
        await driver.findElement(By.name('description[en]')).sendKeys('Utka testovaya Description');
        await driver.findElement(By.name('head_title[en]')).sendKeys('Utka new');
        await driver.findElement(By.name('meta_description[en]')).sendKeys('Utka new 1');
    });
    it ("Prices", async () => {

        await driver.findElement(By.linkText("Prices")).click();
        await  driver.findElement(By.name('purchase_price')).sendKeys('2');
        await driver.findElement(By.name('purchase_price_currency_code')).click();
        await driver.findElement(By.name('purchase_price_currency_code')).sendKeys('2');//посмотреть селект бокс


        await driver.findElement(By.name('prices[USD]')).sendKeys('12');
       // await driver.findElement(By.name('gross_prices[USD]')).sendKeys('1');
        await driver.findElement(By.name('prices[EUR]')).sendKeys('10');
       // await driver.findElement(By.name('gross_prices[EUR]')).sendKeys('2');
        await driver.findElement(By.name("save")).click();
    });

});

   /* it ("Registration", async () => {
        await  driver.get("https://litecart.stqa.ru/ru/");
        await  driver.findElement(By.css('#box-account-login > div > form > table > tbody > tr:nth-child(5) > td > a')).click();
        await driver.wait(until.elementLocated(By.name('firstname'),1000));
        await driver.sleep (1000);
        await  driver.findElement(By.name('status')).sendKeys('1111');
        await driver.findElement(By.name('company')).sendKeys('ABS');
        await driver.findElement(By.name('firstname')).sendKeys('Anna');
        await driver.findElement(By.name('lastname')).sendKeys('Ivanova');
        await driver.findElement(By.name('city')).sendKeys('Chicago');
        await driver.findElement(By.name('phone')).sendKeys('9871111');
        await driver.findElement(By.name('password')).sendKeys(passwordRegistrationTest);
        await driver.findElement(By.name('confirmed_password')).sendKeys(passwordRegistrationTest);
        await  driver.findElement(By.css("span.select2")).click();
        await driver.wait(until.elementLocated(By.className("select2-search__field"),2000));
        await driver.findElement(By.className("select2-search__field")).sendKeys("United States"+Key.ENTER);
        await driver.findElement(By.name('postcode')).sendKeys('11211');
        await driver.findElement(By.name('address1')).sendKeys('520 S Michigan Ave');
        await driver.findElement(By.name('email')).sendKeys(emailRegistrationTest);
        await driver.sleep (100);
        await driver.findElement(By.name('create_account')).click();
        await driver.sleep (300);
        await driver.findElement(By.linkText("Logout")).click();
        console.log("logout");

    });

        it ("LoginLogout", async () => {
            await driver.wait(until.elementLocated(By.name('email'),1000));
        await  driver.findElement(By.name('email')).sendKeys(emailRegistrationTest);
        await driver.sleep (100);
        await driver.findElement(By.name('password')).sendKeys(passwordRegistrationTest);
        await driver.findElement(By.name('login')).click();
        console.log("login");
            console.log("startlogout");
            const logout= driver.findElement(By.linkText("Logout"));
            await  logout.click();
            console.log("logout");
            await driver.wait(until.elementLocated(By.name('email'),1000));
        console.log("logout");
        });
*/


