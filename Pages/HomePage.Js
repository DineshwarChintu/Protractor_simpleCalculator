let homepage = function(){

   var firstTextBox =  element(by.model('first'));
   var secondTextBox = element(by.model('second'));
   var goButton = element(by.id('gobutton'));   

   this.enterFirstNumber = function(Number){
    firstTextBox.sendKeys(Number);
   };

   this.enterSecondNumber = function(Number){
    secondTextBox.sendKeys(Number);
   };

   this.clickGoButton = function(){
    goButton.click();
   };

   this.browserInvoke = function(URL){    
    browser.get(URL);
   };

   this.verifyResult = function(Result){
    
    let actualResult = element(by.cssContainingText('.ng-binding',Result));
    expect(actualResult.getText()).toEqual(Result);
   };

/*     this.clickOperands = function(tagValue,operand) {   
    element(by.cssContainingText(tagValue,operand)).click();  */

    this.clickOperands = function(i) {   
   var operandElements = element.all(by.options('value for (key, value) in operators')).get(i).click();   

};  

};

module.exports = new homepage();