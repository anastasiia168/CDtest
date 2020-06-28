const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
const {By, until} = require ("selenium-webdriver");
const assert= require("assert");
driver.manage().setTimeouts( { implicit: 3000 } );

it ("Main page", async () => {
    await driver.get("https://litecart.stqa.ru/en/");
    await driver.wait(until.elementLocated(By.className('product column shadow hover-light')), 200);
    await driver.wait(until.elementLocated(By.xpath('//*[@id="box-campaigns"]/div/ul/li/a[1]/div[2]')), 200);
    global.itemName = await driver.findElement(By.xpath('//*[@id="box-campaigns"]/div/ul/li/a[1]/div[2]'));
    global.itemNameContent = await itemName.getAttribute("textContent");
    global.itemRegularPrice = await driver.findElement(By.css("#box-campaigns .regular-price"));
    global.itemRegularPriceContent =  await itemRegularPrice.getAttribute("textContent");
    global.itemRegularPriceColor =await itemRegularPrice.getCssValue("color");
    let sep = await itemRegularPriceColor.indexOf(", ") > -1 ? ", " : " ";
    RegularPrice =await itemRegularPriceColor.substr(5).split(")")[0].split(sep);
    global.itemRegularPriceFontSize =await itemRegularPrice.getCssValue("font-size");
    global.itemRegularPriceFontLine =await itemRegularPrice.getCssValue("text-decoration-line");
    global.itemCampaignPrice = await driver.findElement(By.css("#box-campaigns .campaign-price"));
    global.itemCampaignPriceContent =  await itemCampaignPrice.getAttribute("textContent");
    global.itemCampaignPriceColor =  await itemCampaignPrice.getCssValue("color");
    let sep1 =await itemRegularPriceColor.indexOf(", ") > -1 ? ", " : " ";
    CampaignPrice = await itemCampaignPriceColor.substr(5).split(")")[0].split(sep1);
    global.itemCampaignPriceFontSize =  await itemCampaignPrice.getCssValue("font-size");
    global.itemCampaignPriceFontWeight =  await itemCampaignPrice.getCssValue("font-weight");
});

 it ("Duck page", async () => {
    var duck = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link"));
    duck.click();
    await driver.wait(until.elementLocated(By.xpath('//*[@id="box-product"]/div[1]/h1'), 2000));
    global.itemNameMain = await driver.findElement(By.css('#box-product > div:nth-child(1) > h1'));
    global.itemNameMainContent =  await itemNameMain.getAttribute("textContent");
    global.itemRegularPriceMain = await driver.findElement(By.css(".price-wrapper .regular-price"));
    global.itemRegularPriceMainContent = await itemRegularPriceMain.getAttribute("textContent");
    global.itemRegularPriceMainColor =  await itemRegularPriceMain.getCssValue("color");
    let sep2 = await itemRegularPriceMainColor.indexOf(", ") > -1 ? ", " : " ";
    RegularPriceMain =await itemRegularPriceMainColor.substr(5).split(")")[0].split(sep2);
    global.itemRegularPriceMainFontSize = await itemRegularPriceMain.getCssValue("font-size");
    global.itemRegularPriceMainFontLine =await  itemRegularPriceMain.getCssValue("text-decoration-line");
    global.itemCampaignPriceMain =await  driver.findElement(By.css(".price-wrapper .campaign-price"));
    global.itemCampaignPriceMainContent = await itemCampaignPriceMain.getAttribute("textContent");
    global.itemCampaignPriceMainColor =  await itemCampaignPriceMain.getCssValue("color");
    sep3= await itemRegularPriceMainColor.indexOf(", ") > -1 ? ", " : " ";
    CampaignPriceMain = itemCampaignPriceMainColor .substr(5).split(")")[0].split(sep3);
    global.itemCampaignPriceMainFontSize =await  itemCampaignPriceMain.getCssValue("font-size");
    global.itemCampaignPriceMainFontWeight =await  itemCampaignPriceMain.getCssValue("font-weight");
 });
  //  var itemCampaignPriceMainFontDouble = (float)Convert.ToDouble(itemCampaignPriceMainFont);
  it ("Duck's name ", async () => {
    assert.ok(itemNameContent === itemNameMainContent, 'not equal Names');
  });

   it ("Duck's price ", async () => {
    assert.ok(itemRegularPriceContent == itemRegularPriceMainContent, 'not equal Prices');
    assert.ok(itemCampaignPriceContent == itemCampaignPriceMainContent, 'not equal CampaignPrices');
  });
 it ("Grey regular price ", async () => {
     assert.ok(global.itemRegularPriceFontLine  == "line-through", 'not equal Prices');
     assert.ok(itemRegularPriceMainFontLine == "line-through", 'not equal CampaignPrices');
     assert.ok(RegularPriceMain [1] == RegularPriceMain [2] , 'not equal CampaignPrices');
     assert.ok(RegularPriceMain [2] == RegularPriceMain [0] , 'not equal CampaignPrices');
     assert.ok( RegularPrice[1] == RegularPrice[2], 'not equal CampaignPrices');
     assert.ok( RegularPrice [2] == RegularPrice [0], 'not equal CampaignPrices');
 });
 it ("Red and bold action price ", async () => {
   assert.ok(itemCampaignPriceMainFontWeight == "700", 'not equal Prices');
   assert.ok(itemCampaignPriceFontWeight == "700", 'not equal CampaignPrices');
   assert.ok(CampaignPriceMain [1] == 0 , 'not equal CampaignPrices');
   assert.ok(CampaignPriceMain [2] == 0 , 'not equal CampaignPrices');
   assert.ok(CampaignPriceMain [0] != 0 , 'not equal CampaignPrices');
   assert.ok(CampaignPrice [1] == "0" , 'not equal CampaignPrices');
   assert.ok(CampaignPrice [2] == "0" , 'not equal CampaignPrices');
   assert.ok(CampaignPrice [0] != "0" , 'not equal CampaignPrices');
 });
 it ("Action price bigger than regular price ", async () => {
  assert.ok(  itemRegularPriceMainFontSize < itemCampaignPriceMainFontSize, 'not equal Prices');
  assert.ok(itemRegularPriceFontSize <itemCampaignPriceFontSize, 'not equal CampaignPrices');
 });