import AppController from "../controllers/AppController";
import UsersController from '../controllers/''


const express = require("express");

const route = express.Router();

route.get('/status', AppController.getStatus);
route.get('/stats', AppController.getStats);
route.get('/',(_, res) => {
  res.send('Home Page'); });

  route.post('/users', UsersController.postNew);
  route.get('/users/me', UsersController.getMe);
})