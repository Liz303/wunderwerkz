/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wunder-werkz',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // ENV.contentSecurityPolicy = {  
  //   'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com maps.googleapis.com maps.gstatic.com",
  //   'img-src': "'self' https://*.googleapis.com https://*.gstatic.com data: image/webp",
  //   'font-src': "'self' https://*.gstatic.com",
  //   'style-src': "'self' 'unsafe-inline' https://*.googleapis.com",
  //   'object-src': "'self"
  // };

  // ENV.googleMap = {
  //   apiKey: AIzaSyD1ehSxlBtzHcYOtth9XmMyPrlbI0P0U4E
  // }};
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' https://api.instagram.com *.googleapis.com maps.gstatic.com maps.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' scontent.cdninstagram.com *.googleapis.com maps.gstatic.com csi.gstatic.com data: image/webp",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
