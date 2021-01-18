let homepage = require('../Pages/homepage');

describe('Calculator demo tests', function () {

    var optionTag = 'option';
    var Operand = '-';
    var URL = 'https://juliemr.github.io/protractor-demo/';
    var firstValue = '1';
    var secondValue = '3';
    var additionResultValue = '4';
    var subtractionResultValue = '-2';
    var index = 4;    

    it('Additon tests', function () {

        homepage.browserInvoke(URL);

        homepage.enterFirstNumber(firstValue);

        homepage.enterSecondNumber(secondValue);

        homepage.clickGoButton();

        homepage.verifyResult(additionResultValue);

        browser.sleep(2000);

    })

    it('Subtraction tests', function () {

        homepage.browserInvoke(URL);

        homepage.enterFirstNumber(firstValue);

        homepage.enterSecondNumber(secondValue);

        homepage.clickOperands(index);

        homepage.clickGoButton();

        homepage.verifyResult(subtractionResultValue);

        browser.sleep(2000);

    })
})

