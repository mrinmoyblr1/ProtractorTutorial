var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  //seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["ElementBasics.js"],
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    //browser.waitForAngularEnabled(false);  
    browser.waitForAngularEnabled(true);
    // Any report related codes also we can mentioned here
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  suites:
  {
    Smoke: ['Alerts.js', 'DropDowns.js'],
    Regression: 'ElementBasics.js'
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
  /*capabilities: {
    'browserName': 'internet explorer'
  }*/
};
