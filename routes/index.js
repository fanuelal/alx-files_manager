import AppController from '../controllers/AppController';

const express = require('express');

const route = express.Router();
route.get('/status', ((req, res) => AppController.getStatus(req, res)));
route.get('/stats', ((req, res) => AppController.getStatus(req, res)));

module.exports = route;
