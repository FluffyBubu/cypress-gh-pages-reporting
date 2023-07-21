const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-multi-reporters',
  // reporterOptions: {
  //   configFile: 'reporter-config.json',
  // },
    reporter: 'mochawesome',
    reporterOptions: {
      useInlineDiffs: true,
      embeddedScreenshots: true,
      reportDir: 'cypress/results',
      reportFilename: '[name].html',
      overwrite: true,
      html: true,
      json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
