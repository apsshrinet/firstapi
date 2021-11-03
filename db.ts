import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

db.connect((err: Error|null)=>{
    if(err){
        console.log(err.message);
    }
    else{
    console.log("Succesfully connected to database....");
    }
});

let checkcratetable ="SELECT EXISTS(SELECT * FROM information_schema.tables WHERE table_schema = 'db' AND table_name = 'table');"
db.query(checkcratetable,(err,result)=>{
    if(err){
        throw err;
    }
    else{
        if(checkcratetable)
        {
            console.log("Table user already exists in database");
        }
        else
        {
            let createtable = "CREATE TABLE user (email VARCHAR(255),phoneno INTEGER,name VARCHAR(255), age INTEGER, password VARCHAR(255));"
            db.query(createtable,(err,result)=>{
                if(err){
                    throw err;
                }
                else{
                    console.log("Created table");
                }
            });
        }
    }
});
