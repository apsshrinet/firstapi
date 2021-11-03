import {db} from "../db"

export const adduser = async (email:string,password:string,age: Number, name: String, phoneno: Number)=>{
    const queryString = "INSERT INTO user (email, password, age, name, phoneno) VALUES (?, ?, ?, ?, ?)"
    await db.query(
        queryString,
        [email, password, age, name, phoneno],
        (err, result) => {
          if (err) {console.log(err)};
          console.log(result);
        }
    )    
};