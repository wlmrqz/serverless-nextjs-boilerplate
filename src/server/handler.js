const serverless = require('serverless-http');
const express = require('express');

console.log('#:SERVERLESS_HANDLER:NODE_ENV:', process.env.NODE_ENV); // eslint-disable-line

const app = express();
app.use('/_next/static', express.static('./.next/static'));
app.use('/assets', express.static('./src/public/assets'));

app.get('/auth/login', (req, res) => {
  require('../../.next/serverless/pages/auth/login').render(req, res); // eslint-disable-line
});

app.get('/', (req, res) => {
  require('../../.next/serverless/pages/index').render(req, res); // eslint-disable-line
});

app.get('*', (req, res) => {
  require('../../.next/serverless/pages/_error').render(req, res); // eslint-disable-line
});

const server = serverless(app, { binary: ['image/*'] });
exports.handler = server;
