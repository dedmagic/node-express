const express = require('express');

const { getAllHandler } = require('../controllers/position.controller');

const positionRouter = express.Router();

positionRouter
  .route('/api/positions')
  .all((req, res, next) => {
    // чисто для демонстрации возможности обработки всех запросов
    next();
  })
  .get(async (req, res) => {
    await getAllHandler(req, res);
  });

module.exports = positionRouter;
