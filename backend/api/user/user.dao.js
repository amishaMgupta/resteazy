// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Root@123",
//   database: "resteazy"
// });
// con.connect((err) => {
//     if(err) throw err;
//     console.log('Connected to MySQL Server!');
// });

var dbConn = require('../connection/db.config');
const isUserValid = (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    dbConn.query(`SELECT * from user where username = "${username}" AND password = "${password}"`, (err, rows) => {
        if(err) res.status(404).send(err)
        
        res.status(201).send("true");
       
    });
}
module.exports = {isUserValid}