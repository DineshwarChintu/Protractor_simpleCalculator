var reporter = require('C:\\Users\\admin\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\chercher-tech-jasmine-reporter');


exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//Tests//Calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    var ChercherTechJasmineReporter = reporter.ChercherTechJasmineReporter;
    jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
        screenshotOnFail :true,
        showSkipped:false,
        browser:browser,
        showLineChart:true,      
    }));
  },
  onComplete:function(exitcode){
    reporter.write_consolidated()
  },

  afterLaunch:function(exitcode){
    return new Promise(function(resolve){
      reporter.processResults()
      return 0
    })
  }


 
};
