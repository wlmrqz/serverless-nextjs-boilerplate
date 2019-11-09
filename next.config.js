const withCss = require('@zeit/next-css');

console.log('#:NEXT_CONFIG:NODE_ENV:', process.env.NODE_ENV); // eslint-disable-line

let config = {
  distDir: '../.next',
  target: 'serverless',
};

config = withCss(config);
module.exports = config;
