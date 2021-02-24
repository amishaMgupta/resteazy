var dbConn = require('../connection/db.config');
const getVenders = (req,res) => {
    dbConn.query("select * from vendors", (err, rows) => {
        if(err) res.status(404).send(err)
        console.log(rows);
        res.status(201).send(rows);
       // dbConn.end();
    });
}

module.exports = {getVenders}