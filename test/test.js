var webdriver = require('selenium-webdriver'), driver;

driver = new webdriver.Builder().
		forBrowser('firefox').
		build();

driver.get("https://www.google.com");
driver.getTitle().then(function(title)
{
	console.log("title is = "+title);

});

driver.quit();
