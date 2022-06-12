const { MongoClient } = require('mongodb');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${host}:${port}`;

class DBClient {
  constructor() {
    MongoClient.connect(url, (error, client) => {
      if (!error) this.db = client.db(database);
      else {
        this.db = false;
      }
    });
  }

  isAlive() {
    if (this.db) return true;
    return false;
  }

  async nbUsers() {
    const amountUsr = this.db.collection('users').countDocuments();
    return amountUsr;
  }

  async nbFiles() {
    const amountFls = this.db.collection('files').countDocuments();
    return amountFls;
  }
}

const dbClient = new DBClient();
export default dbClient;
