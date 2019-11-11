const withCss = require('@zeit/next-css');
const dotenv = require('dotenv');

// eslint-disable-next-line
console.log('NEXTJS:ENV:STAGE', process.env.NODE_ENV, process.env.SLS_STAGE);
const isServer = !!process.env.SLS_STAGE;

let config = {
  distDir: '../.next',
  target: 'serverless',
  env: { ISSERVER: isServer },
};

if (!isServer) {
  if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './.env.development' });
  }

  if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: './.env.production' });
  }

  if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: './.env.test' });
  }

  config.env.APIURI = process.env.APIURI;
  config.env.AWSREGION = process.env.AWSREGION;
  config.env.AWSPOOLID = process.env.AWSPOOLID;
  config.env.AWSCLIENTID = process.env.AWSCLIENTID;
}

// eslint-disable-next-line
console.log('NEXTJS:CONFIG:', config);

config = withCss(config);
module.exports = config;
