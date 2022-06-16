import DBClient from '../utils/db.js';
import sha1 from 'sha1';

export default class UsersController{
    static async postNew(req,res){
        const email = req.body.email ? req.body.email : null;
        let password = req.body.password ? req.body.password : null;

        if(!email){
            return res.status(400).json({error: 'Missing email'});
        }
        if(!password){
            return res.status(400).json({error: 'Missing password' });
        }
        const exit = await DBClient.db.collection('users').findOne({ email });

        if(exit){
            return res.status(400).json({ error : 'Already exist'});
        }
        password = sha1(password);
        const addToDb = await DBClient.db.collection('users').insertOne({ email, password });
        const id = addToDb.insertedId.toString();

        res.status(201).json({ email, id });
    }

    static async getMe(req,res){
        const token = req.headers['X-Token'];
        if(!token){
            return res.status(401).json({error: 'Unautorized'});
        }

        const basic = req.headers.get('Autorization').split(' ')[1];
        const credentials = Buffer.from(basic,'base64').toString('ascii');
        const [_email ] = credentials.split(':');

        return res.status(200).json({email: _email, id: res.toString });
    }
}