const browserEnv = require('browser-env'),
      hook = require('vue-node'),
      { join } = require('path')

// Setup a fake browser environment
browserEnv()

// Pass an absolute path to your webpack configuration to the hook function
hook(join(__dirname, './webpack.config.js'))
