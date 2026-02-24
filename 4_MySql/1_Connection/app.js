import mysql from  'mysql2'

const db= await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Yash123@@@",
    // database:"",
})
// run command: nodemon app.js

console.log("MySql Connected Successfully");
