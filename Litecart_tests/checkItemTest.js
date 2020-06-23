const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const {By, until} = require ("selenium-webdriver");
const assert= require("assert");
driver.manage().setTimeouts( { implicit: 3000 } );

it ("main page", async () => {


    await driver.get("https://litecart.stqa.ru/en/");
    await driver.wait(until.elementLocated(By.className('product column shadow hover-light')), 200);
   await driver.wait(until.elementLocated(By.xpath('//*[@id="box-campaigns"]/div/ul/li/a[1]/div[2]')), 200);
    var itemName = await driver.findElement(By.xpath('//*[@id="box-campaigns"]/div/ul/li/a[1]/div[2]'));
    var itemNameContent = await itemName.getAttribute("textContent");
    console.log(itemNameContent);

    var itemRegularPrice = await driver.findElement(By.css("#box-campaigns .regular-price"));
    var itemRegularPriceContent =  await itemRegularPrice.getAttribute("textContent");
    var itemRegularPriceColor =await itemRegularPrice.getCssValue("color");
    var itemRegularPriceFont =await itemRegularPrice.getCssValue("font-size");
    console.log(itemRegularPriceContent);
    /*   var itemRegularPriceFontDouble = (float)convertT(itemRegularPriceFont);

    //   var separators = { ",", "(", ")" };
    var itemRegularPriceColorRGBA = itemRegularPriceColor.Split(separators, StringSplitOptions.RemoveEmptyEntries);
  //  var itemRegularPriceColorRGBATrim = myTrim(itemRegularPriceColorRGBA);
*/
    var itemCampaignPrice = await driver.findElement(By.css("#box-campaigns .campaign-price"));
    var itemCampaignPriceContent =  await itemCampaignPrice.getAttribute("textContent");
    var itemCampaignPriceColor =  await itemCampaignPrice.getCssValue("color");
    var itemCampaignPriceFont =  await itemCampaignPrice.getCssValue("font-size");
    console.log(itemCampaignPriceContent);
 //   var itemCampaignPriceColorRGBA = itemCampaignPriceColor.Split(separators, StringSplitOptions.RemoveEmptyEntries);
  //  var itemCampaignPriceColorRGBATrim = MyTrim(itemCampaignPriceColorRGBA);






    var duck = await driver.findElement(By.css("#box-campaigns a.link"));
    duck.click();
    console.log("1");
    await driver.wait(until.elementLocated(By.xpath('//*[@id="box-product"]/div[1]/h1'), 2000));
    console.log("2");
    var itemNameMain = await driver.findElement(By.css('#box-product > div:nth-child(1) > h1'));
    var itemNameMainContent =  await itemNameMain.getAttribute("textContent");
    console.log(itemNameMainContent);
    var itemRegularPriceMain = await driver.findElement(By.css(".price-wrapper .regular-price"));
    var itemRegularPriceMainContent = itemRegularPriceMain.getAttribute("textContent");
    var itemRegularPriceMainFont = itemRegularPriceMain.getCssValue("font-size");
 //   var itemRegularPriceMainFontDouble = (float)Convert.ToDouble(itemRegularPriceMainFont);

    var itemCampaignPriceMain =await  driver.findElement(By.css(".price-wrapper .campaign-price"));
    var itemCampaignPriceMainContent = itemCampaignPriceMain.getAttribute("textContent");
    var itemCampaignPriceMainFont = itemCampaignPriceMain.getCssValue("font-size");
  //  var itemCampaignPriceMainFontDouble = (float)Convert.ToDouble(itemCampaignPriceMainFont);

    assert.ok(itemNameContent == itemNameMainContent, 'not equal Names');
    assert.ok(itemRegularPriceContent == itemRegularPriceMainContent, 'not equal Prices');
    assert.ok(itemCampaignPriceContent == itemCampaignPriceMainContent, 'not equal CampaignPrices');
    /*
      //  assert.areEqual(itemRegularPriceColorRGBATrim[1], itemRegularPriceColorRGBATrim[2]);
      //  assert.areEqual(itemRegularPriceColorRGBATrim[2], itemRegularPriceColorRGBATrim[3]);
      //  assert.areEqual(itemRegularPriceColorRGBATrim[1], itemRegularPriceColorRGBATrim[3]);

     //   assert.areEqual(itemCampaignPriceColorRGBATrim[2], itemCampaignPriceColorRGBATrim[3]);
     //   assert.areEqual(itemCampaignPriceColorRGBATrim[2], "0");
     //   assert.areEqual(itemCampaignPriceColorRGBATrim[3], "0");

       // assert.g    (itemCampaignPriceFontDouble, itemRegularPriceFontDouble);
       // assert.Greater(itemCampaignPriceMainFontDouble, itemRegularPriceMainFontDouble);
    */
});