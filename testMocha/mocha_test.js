var assert = require('assert'),
test = require('selenium-webdriver/testing'), driver,
webdriver = require('selenium-webdriver'), until = webdriver.until, by = webdriver.By,
chrome = require('selenium-webdriver/chrome'),
chromedriver = require('chromedriver'), firefoxdriver = require('geckodriver');
 
test.describe('Including driver',function(){
   test.it('Chrome', function(){
	assert.notEqual(chrome,null,'chrome from selenium is null');
	assert.notEqual(chromedriver,null,'chromedriver is null');
   });
   test.it('Firefox',function(){
	assert.notEqual(firefoxdriver,null,'firefox driver is null');
   });
   test.it('Init driver',function()
   {
    //driver = new webdriver.Builder().forBrowser('Chrome').build();
    driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();
   });
});

test.describe('Google Search', function() {
  this.timeout(20000);
  test.it('should work', function() {
    var driver = new webdriver.Builder().
    forBrowser('firefox').
    build();
driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    driver.quit();
  });
});
