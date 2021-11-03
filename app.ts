import express, { NextFunction, Router,Request,Response } from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import {router} from './routes/userRouter';
import {userschema} from './uservalidation'
import { adduser } from './models/userregister';

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/',async (req: Request, res: Response, next: NextFunction)=>{
  res.send('Hello from express.');
})

app.use('/register',router);

// app.post('/register',async (req: Request,res: Response,next: NextFunction)=>{
//   console.log("Inside register");
//   try{
//       let email = req.body.email;
//       let password = req.body.password;
//       let age = req.body.age;
//       let name = req.body.name;
//       let phoneno = req.body.phoneno;
//       const result =  userschema.validateAsync(req.body);
//       console.log("Validated the data");
//       adduser(email,password,age,name,phoneno);
//   }
//   catch(err){
//       console.log(err);
//   }
// });

app.use(async (res: Request, req: Response, next: NextFunction)=>{
  const error = new Error("Not found");
  error.status = 404;
  next(error);
})

app.use((err: Error,req: Request,res: Response,next: NextFunction)=>{
  res.status(err.status||500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
})

app.listen(process.env.PORT, () => {
        console.log("Node server started running ",process.env.PORT);
    });

