import  { Request,Response,NextFunction } from 'express'
import {userschema} from '../uservalidation'
import { adduser } from '../models/userregister';
import { Router } from 'express';

const router = Router();

router.post('/register', async (req: Request,res: Response,next: NextFunction)=>{
    console.log("Inside register");
    try{
        let email = req.body.email;
        let password = req.body.password;
        let age = req.body.age;
        let name = req.body.name;
        let phoneno = req.body.phoneno;
        const result =  userschema.validateAsync(req.body);
        console.log("Validated the data");
        const a = await adduser(email,password,age,name,phoneno);
        console.log("Sending the response");
        const obj = {
            statusCode: 200,
            message: "Successfull",
            body: a
        }
        res.send(obj)
    }
    catch(err){
        res.send(err);
    }
});

export {router};
