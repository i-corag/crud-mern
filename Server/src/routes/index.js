const { Router } = require('express');
const todoRouter = require('./todo.routes.js');

function routerAPI(app) {
  const router = Router();
  app.use('/api/', router);
  router.use('/', todoRouter);
}

module.exports = { routerAPI };
