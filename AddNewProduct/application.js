var webdriver = require ("selenium-webdriver");
var product_page = require("../AddNewProduct/product_page");


class  Application {
    constructor() {
        this.driver = new webdriver.Builder().forBrowser("chrome").build();
        this.productPage = new product_page.ProductPage(this.driver);
        this.driver.manage().setTimeouts( { implicit: 2000 } );

    }

    async doIt() {

        var ap = await this.productPage;

        var p0 = await ap.open();
        console.log("product 1");
        console.log(p0);
        var ss = await p0.addProduct();
        console.log("product 2");

        var p1 = await ss.open();
        await p1.addProduct();


        var p5 = await ap.open();
        await p5.addProduct();

        var p4 = await ap.open();
        await p4.deleteProducts();

        var p6 = await ap.open();
        await p6.emptyCheckout();


        console.log("the end");
        return null;
    }
}


exports.Application = Application;