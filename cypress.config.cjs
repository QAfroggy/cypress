const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      config.env = process.env
      if(process.env.ENV ==='DEV'){
        config.baseUrl = "https://maf-place-dev-fe.azurewebsites.net"
      }
      if(process.env.ENV ==='PROD'){
        config.baseUrl = "https://maf.place"
      }
      return config;
    },
    "viewportHeight": 1000,
    "viewportWidth": 1280,
    "videoUploadOnPasses": false,
    "defaultCommandTimeout": 9000,
    "chromeWebSecurity": false,
    "specPattern": "cypress/specs/**/*.js",
    "screenshotsFolder": "cypress/temp/screenshots",
    "videosFolder": "cypress/temp/videos",
   
    "reporter": "junit",
    "baseUrl": "https://maf-place-qa-fe.azurewebsites.net",
    "reporterOptions": {
      "mochaFile": "cypress/temp/reports/report-[hash].xml",
      "toConsole": true
    },
    "watchForFileChanges": false,
  },
});