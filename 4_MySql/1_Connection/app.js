import mysql from  'mysql2/promise'

const db= await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",  // if password is wrong, then app will crashes
    database:"mysql_dbb",
})
// run command: nodemon app.js
console.log("MySql Connected Successfully");


// 1. create a Database
// await db.execute('create database mysql_dbb');
// console.log(await db.execute(`show databases`));


// 2. create a table
// await db.execute(`
//     create table users(
//         id int auto_increment primary key,
//         username varchar(100) not null,
//         email varchar(100) not null unique
//     )
// `)


// 3. insert of data
// await db.execute(`
//     insert into users (username, email) values
//     ('yash', 'yash@gmail.com'),
//     ('yash2', 'yash2@gmail.com')
// `)


// 4. Read
// const rows = await db.execute(`select * from users`)
// console.log(rows);


// 5. safe way to insert a data
// await db.execute(`insert into users (username, email) values(?,?)`,[
//     ('yash3', 'yash3@gmail.com'),
// ])
// console.log(await db.execute(`select * from users`));

// const values =[
//     ['yash14', 'yash14@gmail.com'],
//     ['yash5', 'yash5@gmail.com']
// ]
// await db.query(`insert into users (username, email) values ? `,[values])
// console.log(await db.execute(`select * from users`));


// 6.Update
// try {
//     await db.execute("update users set username='UpdatedName' where id=1")
//     console.log(await db.execute(`select * from users`));
// } catch (error) {
//     console.log("ERROR: ",error);
// }


// 7. Delete
// try {
//     await db.execute("delete from users where id=7")
//     console.log(await db.execute(`select * from users`));
// } catch (error) {
//     console.log("ERROR: ",error);
// }