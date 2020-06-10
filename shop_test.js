const BrowserFactory= require("./utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const {By, until} = require ("selenium-webdriver");
//driver.manage().timeouts().implicitlyWait(10000);- из примера в СДО  -  TypeError: driver.manage(...).timeouts is not a function
it
    ("Login", async () => {

        driver.get("http://localhost/litecart/en/");
        driver.findElement(By.name('email')).sendKeys('naska121990@mail.ru');
        driver.findElement(By.name('password')).sendKeys('1111');
        driver.findElement(By.name('login')).click();
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


