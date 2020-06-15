const BrowserFactory= require("../utils/browserFactory")
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);
//driver.manage().timeouts().implicitlyWait(10000);
const {By, until} = require ("selenium-webdriver");

driver.get("http://localhost/litecart/admin/");

describe ("Admin menu sections",  () =>  {

    it ("OpenURL",async () =>  {
       await driver.get("http://localhost/litecart/admin/");
       await driver.wait(until.elementLocated(By.name('username'),10000));
   });

it ("Login", async () =>  {

    await  driver.findElement(By.name('username')).sendKeys('admin');
   await driver.findElement(By.name('password')).sendKeys('admin');
     await driver.findElement(By.name('login')).click();
    await driver.wait(until.elementLocated(By.id("box-apps-menu-wrapper"),10000));
    await driver.sleep (2000);
});


it ("Admin_menu_sections",  async () =>   {
    await driver.findElement(By.id("box-apps-menu-wrapper"));

    var sections = await driver.findElements(By.css('#app-'));
    console.log(sections.length);
    console.log( await sections[3].getText());
    for (var i = 0; i < sections.length; i++) {
        var xpath = "/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li["+(i+1) + "]/a";
        await driver.wait(until.elementLocated(By.xpath(xpath),1000));
        var section = await driver.findElement(By.xpath(xpath));
        await section.click();

        if("/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li["+(i+1) + "]/ul)"

            document.querySelector("#app- > ul")
        var zonePage = await driver.findElements(By.css('#table-zones > tbody > tr> td:nth-child(3)'));
        if (zonePage.length > 2) {
            var zonesPage = await driver.findElements(By.css('#table-zones > tbody > tr> td:nth-child(3)'));
            console.log(zonesPage.length);
            console.log('startcopyarray');
            var zonesForSort = zonesPage.slice();

        var h1 = await driver.findElement(By.css(" #content > h1"));

        hForPage = await h1.getText();
        section = await sections[i].getText();
        assert.ok(hForPage == section, 'not equal zones');

    }
});
});
/*
    await driver.get("http://localhost/litecart/admin/?app=countries&doc=countries");

    await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li[1]/a/span'),1000));


    await driver.findElement(By.xpath('/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li[1]/a/span')).click();
    await  driver.findElement(By.xpath("//h1[contains(text(), ' Template')]"));

    await driver.findElement(By.xpath('/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li[1]/ul/li[2]/a/span')).click();
    driver.findElement(By.xpath("//h1[contains(text(), ' Logotype')]"));
    await driver.findElement(By.xpath('/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li[2]/a/span[1]')).click();
    driver.findElement(By.xpath("//h1[contains(text(), ' Catalog')]"));
    ///html/body/div[1]/div/div/table/tbody/tr/td[1]/div[3]/ul/li[2]/ul/li[2]/a/span

    console.log('1');//*[@id="app-"]/a/span[2]*/

/*

it
("Appearence", async () => {
  var links = await driver.findElements(By.css("#app- > a > span.name"));
   // console.log(links);
    gg = await links[3].getText();
    await links[2].click();
    await links[3].click();
    await links[4].click();
    await links[5].click();
    console.log(gg);

    console.log(await links[3].get);
    //await driver.findElement(By.linkText("+links[3]")).click();
    //await driver.findElement(By.css("div#box-apps-menu-wrapper li:nth-child(4)")).click();
    console.log(links.length);
    /*
    await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/table/tbody/tr/td[1]/div[3]/ul/li[1]/a/span'),1000));
  for (let link of links)
  {

      text = await link.getText();
      console.log (text);
      await link.click();

      var subLinks = await driver.findElements(By.css("#doc- > a > span"));
      for (let subLink of subLinks)
      {
          subText = await subLink.getText();
          console.log (subText);
      }
  }*/