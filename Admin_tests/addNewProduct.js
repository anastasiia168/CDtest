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
        await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div/table/tbody/tr/td[1]/div[3]/ul/li[2]/a')), 5000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/table/tbody/tr/td[1]/div[3]/ul/li[2]/a')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div[1]/a[2]')),1000);
        await  driver.findElement(By.xpath('//*[@id="content"]/div[1]/a[2]')).click();
        await driver.sleep (1000);

    });
    
    it ("General", async () => {
       await  driver.findElement(By.css('#tab-general > table > tbody > tr:nth-child(1) > td > label:nth-child(3) ')).click();//посмотреть селект бокс
        await driver.wait(until.elementLocated(By.name('name[en]')),1000);
        await  driver.findElement(By.name('name[en]')).sendKeys('Duck');
        await driver.findElement(By.name('code')).sendKeys('012345');
        await driver.findElement(By.xpath('//*[@id="tab-general"]/table/tbody/tr[4]/td/div/table/tbody/tr[2]/td[1]/input')).click();
        await driver.findElement(By.xpath('//*[@id="tab-general"]/table/tbody/tr[7]/td/div/table/tbody/tr[4]/td[1]/input')).click();
        await driver.findElement(By.name('quantity')).clear();
        await driver.findElement(By.name('quantity')).sendKeys('3');
        await driver.findElement(By.name('sold_out_status_id')).click();
        await driver.findElement(By.css("#tab-general > table > tbody > tr:nth-child(8) > td > table > tbody > tr > td:nth-child(4) > select > option:nth-child(3)")).click();
        //*[@id="tab-general"]/table/tbody/tr[8]/td/table/tbody/tr/td[4]/select/option[3]
        await driver.findElement(By.name( 'new_images[]')).sendKeys(__dirname + '\\Duck.jpg');
        await driver.findElement(By.name('date_valid_from')).sendKeys('12-06-2020');
        await driver.findElement(By.name('date_valid_to')).sendKeys('08-12-2021');

    });
    it ("Information", async () => {
        await driver.findElement(By.linkText("Information")).click();
        await  driver.findElement(By.name('manufacturer_id')).click();
        await driver.findElement(By.css('#tab-information > table > tbody > tr:nth-child(1) > td > select > option:nth-child(2)')).click();
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
        await driver.findElement(By.css('#tab-prices > table:nth-child(2) > tbody > tr > td > select > option:nth-child(3)')).click();
        await driver.findElement(By.name('prices[USD]')).clear();
        await driver.findElement(By.name('prices[USD]')).sendKeys('12');
        await driver.findElement(By.name('prices[USD]')).clear();
        await driver.findElement(By.name('prices[EUR]')).sendKeys('10');
        await driver.findElement(By.name("save")).click();
    });

});

