import { v4 } from "uuid";
import redisClient from "../utils/redis.js";
import RedisClient from '../utils/redis.js';

export default class AppController{
    static async getConnect(req,res){
        const token = v4;
        await redisClient.set(`auth_${token}`, req._id/this.toString(),24 * 60 * 60);
        return res.status(200).json({ token });
    }
    static async getDisconnect(req, res){
        const token = req.headers['X-Token'];
        if(!token){
            return res.status(401).send('Unauthorized');
        }

        await redisClient.del(`auth_${token}`);
        return res.status(204);
    }
}