import AppController from '../controllers/AppController';

const express = require('express');

const route = express.Router();
route.get('/status', AppController.getStatus);
route.get('/stats', AppController.getStatus);

module.exports = route;
