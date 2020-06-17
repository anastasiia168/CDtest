const BrowserFactory= require("../utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const passwordRegistrationTest= "1111";

Keys = driver.Key,
    driver.get("https://litecart.stqa.ru/ru/");
driver.manage().setTimeouts( { implicit: 5000 } );


it ("Enter fields", async () => {
       // await  driver.get("https://litecart.stqa.ru/ru/");
        await  driver.findElement(By.css('#box-account-login > div > form > table > tbody > tr:nth-child(5) > td > a')).click();
        await  console.log( '2');
        await driver.wait(until.elementLocated(By.css('#create-account > h1'),200));
        await  console.log( '3');
        await driver.wait(until.elementLocated(By.name('tax_id'),10000));
        await  console.log( 'page was opened');
    });
it ("Enter fields", async () => {
    await driver.findElement(By.name('tax_id')).sendKeys('1111');

    tax = await driver.findElement(By.name('tax_id')).getText();
    await console.log(tax);
    assert.ok(tax.getText() == '1111');

    await driver.findElement(By.name('company')).sendKeys('ABS');
    await console.log('company');

    await driver.findElement(By.name('firstname')).sendKeys('Anna');

    await driver.findElement(By.name('lastname')).sendKeys('Ivanova');

    var randomValue = Math.floor(Math.random() * 3000);
    await console.log(randomValue);
    var emailRegistrationTest = "test" + randomValue + "@mail.ru";
    await (console.log(emailRegistrationTest));
    await driver.findElement(By.name('email')).sendKeys(emailRegistrationTest);
    await driver.findElement(By.name('city')).sendKeys('Chicago');
    await driver.findElement(By.name('phone')).sendKeys('9871111');
    await driver.findElement(By.name('password')).sendKeys("passwordRegistrationTest");
    await driver.findElement(By.name('confirmed_password')).sendKeys("passwordRegistrationTest");
    await driver.findElement(By.css("span.select2")).click();
    await driver.wait(until.elementLocated(By.className("select2-search__field"), 1000));
    await driver.findElement(By.className("select2-search__field")).sendKeys("United States" + Key.ENTER);
    await driver.findElement(By.name('postcode')).sendKeys('11211');
    await driver.findElement(By.name('address1')).sendKeys('520 S Michigan Ave');
});
         it ("Create_account", async () => {
        await driver.wait(until.elementLocated(By.name('create_account'),1000));
        await driver.findElement(By.name('create_account')).click();
         });
       it ("LogOutAfterRegister", async () => {
        await driver.wait(until.elementLocated(By.linkText('Logout'),1000));
        await driver.findElement(By.linkText("Logout")).click();
        console.log("logout");
        });


      it ("LoginLogout", async () => {
            await driver.wait(until.elementLocated(By.name('email'),1000));
        await  driver.findElement(By.name('email')).sendKeys(emailRegistrationTest);
        await driver.findElement(By.name('password')).sendKeys("passwordRegistrationTest");
        await driver.findElement(By.name('login')).click();
        console.log("login");
            console.log("startlogout");
            const logout= driver.findElement(By.linkText("Logout"));
            await  logout.click();
            console.log("logout");
            await driver.wait(until.elementLocated(By.name('email'),1000));
        console.log("logout");

        });





