const BrowserFactory= require("../utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);

const {By, until} = require ("selenium-webdriver");
Keys = driver.Key,
driver.get("http://localhost/litecart/admin/");
driver.manage().setTimeouts( { implicit: 5000 } );
    it
    ("Login", async () => {

        await   driver.get("http://localhost/litecart/en/");
        await  driver.findElement(By.name('email')).sendKeys('naska121990@mail.ru');
        await  driver.findElement(By.name('password')).sendKeys('1111');
        await  driver.findElement(By.name('login')).click();
        driver.findElement( By.css('#box-account > div > ul > li:nth-child(4) ')).click();

    });
 it
("DucksStikers", async () => {
    await driver.findElements(By.css("li.product"))
       .then(
           async function(ducks){
               console.log("bili naideni utki");
               console.log(ducks.length);

              for (let i = 0; i < ducks.length; i++)
               {
                  console.log(ducks[i].getId());

                   await driver.findElements(By.css("div.sticker")).then(
                       //если вместо driver  поставить ducks[i] , элемент не находится. Подскажите пожалуйста почему.
                        function (stickers) {
                           console.log("bili naideni utki stickery");
                           console.log(stickers.length);
                           //так же не понятно как проверить наличие только одного стикера в СДО для JS  нет понятного примера
                       }
                   );
               }
           });
});




