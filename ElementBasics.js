describe("Protractor Element Demo", function () {
	var obj = require("./jsObjectDemo.js");
	var using = require('jasmine-data-provider');
	var d = require("./data.js");
	// This is Setup methods, part of Jasmine Framework
	beforeEach(function () {
		obj.getURL();
	});

	using(d.DataDriven, function (data, description) {
		// data stores actual Data
		// description stores sub-object name from data.js file
		// for every iteration one data set will be picked

		it("Testing of Calculator Functionality " + description, function () {

			obj.firstInput.sendKeys(data.firstinput);
			obj.secondInput.sendKeys(data.secondinput);
			obj.goButton.click();
			expect(obj.result.getText()).toBe(data.result);
			obj.result.getText().then(function (grab_Result) {
				console.log("The Result is::::::::::: " + grab_Result);
			});
		});
	});

	// This is Tear-Down methods, part of Jasmine Framework
	afterEach(function () {
		console.log(".......Test is Completed....")
	});
});
// First parameter - Test Suites Name
// Second parameter is - function(function will have all tests(it blocks))
