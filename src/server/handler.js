const serverless = require('serverless-http');
const express = require('express');
const qs = require('query-string');

// eslint-disable-next-line
console.log('SERVER:ENV:', process.env.NODE_ENV);

const app = express();
app.use('/_next/static', express.static('./.next/static'));
app.use('/assets', express.static('./src/public/assets'));

const env = {
  ISSERVER: true,
  NODE_ENV: process.env.NODE_ENV,
  APIURI: process.env.APIURI,
  AWSREGION: process.env.AWSREGION,
  AWSPOOLID: process.env.AWSPOOLID,
  AWSCLIENTID: process.env.AWSCLIENTID,
};

const buildNewReqUri = (req) => {
  const params = qs.stringify({ ...env, ...req.query });
  return `${req.baseUrl}?${params}`;
};

app.get('/auth/login', (req, res) => {
  req.url = buildNewReqUri(req);
  // eslint-disable-next-line
  require('../../.next/serverless/pages/auth/login').render(req, res);
});

app.get('/', (req, res) => {
  req.url = buildNewReqUri(req);
  // eslint-disable-next-line
  require('../../.next/serverless/pages/index').render(req, res);
});

app.get('*', (req, res) => {
  req.url = buildNewReqUri(req);
  // eslint-disable-next-line
  require('../../.next/serverless/pages/_error').render(req, res);
});

const server = serverless(app, { binary: ['image/*'] });
exports.handler = server;
