var webdriver = require('selenium-webdriver');

var By = webdriver.By,
    until = webdriver.until;


class ProductPage {

    constructor(driver) {
        this.driver = driver;
        driver.manage().setTimeouts( { implicit: 2000 } );
    }

    open() {
        this.driver.get("https://litecart.stqa.ru/en/");
        return this;
    }

   /* onThisPageDo(f) {
      this.driver.findElements(By.id("cart-wrapper")).then(async function(arr) {
            console.log("2");
            if (arr.length > 0) {
                console.log("1");
                f.call();
            }
        });
    }*/

    async addProduct(){
        console.log("01");
        this.driver.sleep (1000);
        await this.driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(1)')).click();
        console.log("11");
       // this.driver.sleep (1000);
      //  await this.driver.wait(elementLocated(By.name('options[Size]')), 2000);
      ///  this.driver.sleep (1000);
      //  var bigDucks = await this.driver.findElements(By.name('options[Size]'));
      //  console.log("12");
      //  this.driver.sleep (1000);
      ////  if (bigDucks.length == 1){

       //     await this.driver.findElement(By.name('options[Size]')).click();
       //     await this.driver.findElement(By.css('#box-product > div.content > div.information > div.buy_now > form > table > tbody > tr:nth-child(1) > td > select > option:nth-child(3)')).click();
       // }
        this.driver.sleep (1000);
        console.log("13");
        //await this.driver.wait(elementLocated(By.css('#cart > a.content > span.quantity')), 2000);
      //  var count = await this.driver.findElement(By.css('#cart > a.content > span.quantity'));
      //  console.log("14");
        await this.driver.findElement(By.name('add_cart_product')).click();
      //  var countnew = this.driver.findElement(By.css('#cart > a.content > span.quantity'));
        console.log("15");
        await this.driver.sleep(1000);
        assert.ok(count != countnew, 'not equal items');


        return this;
    }

    async emptyCheckout(){
        await this.driver.findElement(By.css('#cart > a.link')).click();
        await this.driver.wait(elementLocated(By.name( 'remove_cart_item')),2000);
        return this;
    }


    async deleteProducts(){
        var products = await this.driver.findElements(By.css(".dataTable.rounded-corners tr > td.item"));
        var pictures= await this.driver.findElements(By.css('#box-checkout-cart > ul > li'));
        await console.log("picture = " + pictures.length);
        if (pictures.length > 0) {
            await this.driver.sleep(500);
            await this.driver.findElement(By.css('#box-checkout-cart > ul > li:nth-child(1) > a')).click();
        }
        for (var item of products){
            var removeButtons = await this.driver.findElements(By.name('remove_cart_item'));
            await console.log("deleted buttons = " + removeButtons.length);
            if (removeButtons.length >= 0) {
                await this.driver.wait(function () {
                    return elementIsVisible(removeButtons[0]);
                }, 3000)
                    .then(async function () {
                        await removeButtons[0].click();
                        await this.driver.sleep(100);
                        await this.driver.wait(stalenessOf(item), 6000);
                    });

            }
        }
        await this.driver.wait(elementLocated(By.css('#checkout-cart-wrapper > p:nth-child(2) > a')), 2000);
        await this.driver.findElement(By.css('#checkout-cart-wrapper > p:nth-child(2) > a')).click();
    }

}

exports.ProductPage = ProductPage;