const Router = require('koa-router');
const router = new Router();

const controller = require('./controller');

const api = {};

Object.keys(controller).forEach(key => {
  const { method, url, route } = controller[key];

  router[method](url, route);
  api[key] = { method, url };
});

module.exports = { router, api };
