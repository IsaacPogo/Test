const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  videoCompression: false,
  chromeWebSecurity: false,
  viewportWidth: 1300,
  viewportHeight: 720,
  defaultCommandTimeout: 20000,
  requestTimeout: 50000,
  env: {
    urlCreateUser: `https://reqres.in/api/user`
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,feature,tsx}',
  },
})
