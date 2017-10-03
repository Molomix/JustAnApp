var webdriver = require('selenium-webdriver'), driver;

driver = webdriver.Builder().
		forBrowser('firefox').
		build();

driver.get("https://www.google.js");
driver.getTitle().then(function(title)
{
	console.log("title is = "+title);

});

driver.quit();
