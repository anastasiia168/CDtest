const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const {By, until} = require ("selenium-webdriver");
Keys = driver.Key;
driver.manage().setTimeouts( { implicit: 5000 } );
driver.get("http://outsourcing.nat.tepkom.ru:5080/login");



    it ("LOG in",async () => {
        await driver.get("http://outsourcing.nat.tepkom.ru:5080/login");
        await driver.sleep(5000);
        loginInput = await driver.findElement(By.id('mat-input-0'));
        await loginInput.sendKeys('avstest2');
        PasswordInput = await driver.findElement(By.id('mat-input-1'));
        await PasswordInput.sendKeys('Янгянф1990!!');
        await driver.sleep(100);
        await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/app-login/app-login-like-layout/section/form/div[2]/button')), 10000);
        authButton = await driver.findElement(By.xpath('/html/body/app-root/app-login/app-login-like-layout/section/form/div[2]/button')).click();
    });
it ("create project",async () => {
    addProjectButtonButton = await driver.findElement(By.className('mat-focus-indicator page__button app-button app-button--bordered mat-button mat-button-base ng-star-inserted'));
    addProjectButtonButton.click();
    await driver.sleep(1000);
    addProjectsType = await driver.findElement(By.className('mat-radio-button project-create-dialog__type-item mat-accent ng-star-inserted mat-radio-checked'));
    addProjectsType.click();
    addProjectsContinue = await driver.findElement(By.className('mat-focus-indicator app-button app-button--accent mat-button mat-button-base ng-star-inserted'));
    addProjectsContinue.click();
    await driver.sleep(1000);
    projectNameInput= await driver.findElement(By.id('mat-input-10'));
    await  projectNameInput.sendKeys('Duck');
    zonesNameInput= await driver.findElement(By.id('mat-input-11'));
    await  zonesNameInput.sendKeys('Duck2');
    await driver.sleep(1000);
    customerInput= await driver.findElement(By.xpath('//*[@id="customer"]/app-select-field/mat-form-field/div/div[1]/div'));
    await driver.sleep(1000);
    await    customerInput.click();
    await driver.sleep(1000);
    //await driver.findElement(By.xpath('//*[@id="mat-option-98"]/div')).click();
    await driver.sleep(1000);
    customerInputField= await driver.findElement(By.id('mat-input-13'));

    await   customerInputField.sendKeys('энергетическая');
    await driver.sleep(1000);
    selectCustomerField = await driver.findElement(By.xpath('//*[@id="mat-option-295"]/span'));
    await     selectCustomerField.click();

    LYInput= await driver.findElement(By.xpath('//*[@id="licenseParts"]/app-select-field/mat-form-field'));
    await    LYInput.click();
    LYInputField= await driver.findElement(By.id('mat-input-22'));
    await   LYInputField.sendKeys('ямбургский');
    await driver.sleep(1000);
    selectLYfild = await driver.findElement(By.id('mat-option-346'));
    await    selectLYfild.click();
    await LYInputField.clear();
    await   LYInputField.sendKeys('игнялинский');
    await driver.sleep(1000);
    selectLYSecondfild= await driver.findElement(By.id("mat-option-352"));
    selectLYSecondfild.click();
    LYclose= await driver.findElement(By.xpath("/html/body/div[2]/div[3]")).click();


    RegionInput= await driver.findElement(By.xpath('//*[@id="regions"]/app-select-field/mat-form-field'));
    await    RegionInput.click();
    await driver.sleep(1000);
    selectRegionfild = await driver.findElement(By.id('mat-option-356'));
    await    selectRegionfild.click();
    Regionclose= await driver.findElement(By.xpath("/html/body/div[2]/div[3]")).click();

    ARInput= await driver.findElement(By.xpath('//*[@id="municipalUnions"]/app-select-field/mat-form-field'));
    await    ARInput.click();
    await driver.sleep(1000);
    selectARfild = await driver.findElement(By.id('mat-option-461'));
    await    selectARfild.click();
    ARclose= await driver.findElement(By.xpath("/html/body/div[2]/div[3]")).click();

});
// await driver.wait(until.elementLocated(By.css('div.login__actions > button')), 10000);
       // await driver.wait(until.alertIsPresent(),10000);
      //  await driver.switchTo().alert().then(async function(alrt) {
      //      await  console.log("alert");
        //     var alertText = alrt.getText();
        //    await     console.log(alertText);
        //    await alrt.dismiss();
           // await driver.close();
      //  await driver.sendKeys(escape);
       //  });
      // driver.alrt.sendKeys(escape);
     //   });

    //});
/*
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
  //  });
*/


