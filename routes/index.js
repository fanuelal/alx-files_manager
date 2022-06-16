import AppController from "../controllers/AppController";
import UsersController from '../controllers/'


const express = require('express');

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.get('/',(_, res) => {
  res.send('Home Page');
 });
router.post('/users', UsersController.postNew);
route.get('/users/me', UsersController.getMe);

router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);

export default router

