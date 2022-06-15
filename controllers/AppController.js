import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

class AppController {
  static checkStatus(req, res) {
    const status = {
      redis: RedisClient.isAlive(),
      db: DBClient.isAlive(),
    };
    return res.status(200).send(status);
  }

  static getStats(req, res) {
    const stats = {
      users: DBClient.nbUsers(),
      files: DBClient.nbFiles(),
    };
    return res.status(200).send(stats);
  }
}

module.exports = AppController;
