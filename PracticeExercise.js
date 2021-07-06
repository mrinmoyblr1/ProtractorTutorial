describe("Protractor baby step", function() {
	function selectItems(product){
		  element.all(by.tagName("app-card")).each(function(item) {
			  item.element(by.css("h4 a")).getText().then(function(text){
				  if(text==product){
					  item.element(by.css("button[class*='btn-info']")).click();
				  }
			  })
		  })
	}
  it("Open Angular js Website", function() {
	  browser.driver.manage().window().maximize();
	  browser.get("https://rahulshettyacademy.com/angularpractice/");
	  element(by.name("name")).sendKeys("MyStudents");
	  element(by.css("input[name='email']")).sendKeys("MyStudents@gmail.com");
	  element(by.id("exampleInputPassword1")).sendKeys("Password2");
	  element(by.css("input[type='checkbox']")).click();
	 // element(by.css("select[id='exampleFormControlSelect1']")).element(by.css("option:nth-child(2)")).click();
	  element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
	  element.all(by.name("inlineRadioOptions")).first().click();
	  element(by.buttonText("Submit")).click().then(function(){
		  element(by.css("div[class*='alert alert-su']")).getText().then(function(text){
			  console.log(text);
		  })
	  });
	  element(by.name("name")).clear();
	  element(by.name("name")).sendKeys("M").then(function(){
		  element(by.css("div[class='alert alert-danger']")).getText().then(function(text){
			  console.log(text);
	  });
	  });	  
	  element(by.linkText("Shop")).click();
	  selectItems("Samsung Note 8");
	  selectItems("iphone X");	  
	  element(by.partialLinkText("Checkout")).getText().then(function(text){
		  var res=text.split("(");
		  var x=Number(res[1].trim().charAt(0));
		  console.log("Total number of items in the Cart: "+res[1].trim().charAt(0));
		  y=x+1;
		  console.log("The Value of Y is: "+y);
		  expect(x).toBe(y-1);
	  })
  });
});