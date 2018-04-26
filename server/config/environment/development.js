'use strict';

// Development specific configuration
// ==================================
module.exports = {
  version:'0.0.1',
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/smartchimp-dev'
  },

  seedDB: true
};
