const BrowserFactory= require("./utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const emailRegistrationTest= "avstest15@mail.ru";
const passwordRegistrationTest= "1111";
const {By, until} = require ("selenium-webdriver");
Keys = driver.Key,
//driver.manage().timeouts().implicitlyWait(10000);- из примера в СДО  -  TypeError: driver.manage(...).timeouts is not a function

    it ("Registration", async () => {
        await  driver.get("https://litecart.stqa.ru/ru/");
        await  driver.findElement(By.css('#box-account-login > div > form > table > tbody > tr:nth-child(5) > td > a')).click();
        await driver.wait(until.elementLocated(By.name('firstname'),1000));
        await driver.sleep (1000);
        await  driver.findElement(By.name('tax_id')).sendKeys('1111');
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



